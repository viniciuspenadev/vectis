# Vectis International Logistics — site

Site institucional em **Astro 7** (estático) + **Tailwind CSS 4**, publicado via Docker (nginx)
no Easypanel. Referência de estrutura e funcionalidades: site oficial em PHP
(`C:\xampp\htdocs\site_oficial`).

## Comandos

```bash
npm install        # 1ª vez
npm run dev        # desenvolvimento em http://localhost:4321
npm run build      # gera a pasta dist/
npm run preview    # serve o dist/ localmente
npx astro check    # checagem de tipos
```

## Estrutura

```
src/
├── pages/                 index.astro (PT, raiz) · [lang]/index.astro (/en/, /es/) · 404 · robots.txt.ts
├── components/
│   ├── Navbar, Footer, SEO, Icon, CookieConsent, WhatsAppButton
│   └── home/              Hero, About, Services, Process, Network, Industries, FinalCta, Contact, Faq
├── i18n/                  config.ts (idiomas) · ui.ts (textos comuns) · home.ts (textos da home)
├── data/                  site.ts (contatos, redes, GA, endpoint) · services.ts
├── assets/                images/ (fotos) · brand/ (logo e símbolo V)
└── styles/global.css      tokens da marca (navy, prata, azul-gelo) e componentes
public/                    favicons e logo (copiados como estão)
deploy/                    nginx.conf e cabeçalhos de segurança do container
Dockerfile                 build do Astro + nginx servindo o site na porta 80
```

- **Textos**: todo o conteúdo está em `src/i18n/` nos 3 idiomas.
- **Idioma padrão**: PT na raiz. Para trocar, altere `defaultLocale` em `src/i18n/config.ts`
  **e** em `astro.config.mjs`.
- **Imagens**: coloque em `src/assets/images/`; o build gera AVIF/WebP em vários tamanhos.

## ⚠ Antes de publicar

Valores provisórios (marcados com `PLACEHOLDER` no código):

- `src/data/site.ts`: e-mail, telefone, WhatsApp, LinkedIn, Instagram
- `src/i18n/home.ts`: prazo "Retorno em até 1 dia útil" (seção de contato)
- Fotos: bancos livres do Unsplash (licença permite uso comercial); trocar por fotos próprias
  quando houver

Pendências da próxima fase:

- Endpoint do formulário de cotação (`site.quoteEndpoint`, hoje `/api/quote.php`). No container
  nginx não há PHP: a ideia é um serviço pequeno à parte (ou PHP-FPM) com envio por SMTP +
  reCAPTCHA, encaminhado em `/api/` no `deploy/nginx.conf`
- Página de política de privacidade (`/politica-de-privacidade/`, `/en/privacy-policy/`,
  `/es/politica-de-privacidad/`), já linkada no rodapé, cookies e formulário
- `gaId` em `src/data/site.ts` para ativar o Google Analytics (só carrega após consentimento)

## Deploy (GitHub + Easypanel)

O Easypanel baixa o repositório, constrói a imagem pelo `Dockerfile` e publica com HTTPS
automático (Let's Encrypt). O container serve o site em HTTP na **porta 80**.

### 1. Enviar o código para o GitHub

Crie um repositório **privado** vazio no GitHub (sem README) e, nesta pasta:

```bash
git remote add origin https://github.com/<usuario>/<repositorio>.git
git push -u origin main
```

### 2. Criar o app no Easypanel

1. Repositório privado: em **Settings → GitHub**, cadastre um token do GitHub com acesso ao repo.
2. Crie um projeto e, dentro dele, um serviço **App**.
3. **Source → GitHub**: usuário, repositório, branch `main`, build path `/`.
4. **Build**: escolha **Dockerfile** (arquivo `Dockerfile`).
5. **Domains**: use o domínio padrão do Easypanel ou adicione o seu, com **HTTPS** ligado e
   **porta 80**. Para domínio próprio, aponte antes o DNS (registro A) para o IP da VPS.
6. Clique em **Deploy**. Para publicar a cada `git push`, ative o deploy automático do app.

### Variáveis de build (opcionais)

| Variável | Padrão | Para quê |
|---|---|---|
| `SITE_URL` | `https://www.vectislogistics.com` | URL usada em canonical, sitemap e Open Graph |
| `SITE_NOINDEX` | `false` | `true` bloqueia buscadores (meta robots + robots.txt) |

Enquanto o site estiver só no domínio provisório do Easypanel, use `SITE_NOINDEX=true` e
`SITE_URL` com esse domínio. Defina na aba **Environment** do app; se o build não refletir
os valores, altere o padrão nas linhas `ARG` do `Dockerfile`. Na publicação definitiva,
volte `SITE_NOINDEX` para `false` e `SITE_URL` para o domínio oficial.
