// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Mantenha em sincronia com src/i18n/config.ts
const defaultLocale = 'pt';
const locales = ['pt', 'en', 'es'];

// https://astro.build/config
export default defineConfig({
  // URL pública (canonical, hreflang, sitemap, Open Graph). No Docker vem do build arg SITE_URL.
  site: process.env.SITE_URL || 'https://www.vectislogistics.com',
  // Saída 100% estática: o Dockerfile gera dist/ e o nginx serve (ver deploy/).
  output: 'static',
  // Gera /en/index.html → o nginx serve a URL limpa /en/.
  build: { format: 'directory' },
  // PT na raiz (/), demais idiomas com prefixo (/en/, /es/).
  i18n: {
    defaultLocale,
    locales,
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale,
        locales: { pt: 'pt-BR', en: 'en', es: 'es' },
      },
    }),
  ],
  env: {
    schema: {
      // true = pede aos buscadores para não indexar (domínio provisório / homologação).
      SITE_NOINDEX: envField.boolean({ context: 'server', access: 'public', default: false }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
    // Config PostCSS inline: impede o Vite de herdar um postcss.config de pastas
    // acima do projeto (há um em C:\). O Tailwind roda pelo plugin do Vite.
    css: { postcss: {} },
  },
});
