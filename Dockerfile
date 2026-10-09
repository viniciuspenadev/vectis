# Vectis — imagem de produção (Easypanel / qualquer host Docker).
# Estágio 1 gera o site estático com Astro; estágio 2 serve com nginx na porta 80.
# O HTTPS fica no proxy do Easypanel (Traefik), que encaminha para a porta 80.

# ---------- 1. Build ----------
FROM node:22-bookworm-slim AS build
WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# URL pública do site (canonical, sitemap, Open Graph).
ARG SITE_URL=https://www.vectislogistics.com
# true = não indexar nos buscadores (domínio provisório / homologação).
ARG SITE_NOINDEX=false
ENV SITE_URL=${SITE_URL} \
    SITE_NOINDEX=${SITE_NOINDEX}

RUN npm run build

# ---------- 2. Servidor ----------
FROM nginx:stable-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
