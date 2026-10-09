/**
 * robots.txt gerado no build a partir da URL do site (astro.config `site`).
 * Com SITE_NOINDEX=true bloqueia a indexação (domínio provisório / homologação).
 */
import type { APIRoute } from 'astro';
import { SITE_NOINDEX } from 'astro:env/server';

export const GET: APIRoute = ({ site }) => {
  const body = SITE_NOINDEX
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
