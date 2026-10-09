import { defaultLocale, locales, type Locale } from './config';

function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Idioma a partir da URL: /en/... → 'en'; sem prefixo → idioma padrão. */
export function getLocale(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return isLocale(first) ? first : defaultLocale;
}

/** Caminho no idioma informado: localizePath('/', 'en') → '/en/'. */
export function localizePath(path: string, locale: Locale): string {
  const clean = `/${path.replace(/^\/+/, '')}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean}`;
}

/** Mesma página, em outro idioma (seletor de idioma e hreflang). */
export function switchLocalePath(url: URL, target: Locale): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (isLocale(segments[0])) segments.shift();
  const rest = segments.join('/');
  const trailing = rest && url.pathname.endsWith('/') ? '/' : '';
  return localizePath(rest + trailing, target);
}

/** Links alternativos de todos os idiomas, para as tags hreflang. */
export function getAlternates(url: URL, site: URL | string) {
  return locales.map((locale) => ({
    locale,
    href: new URL(switchLocalePath(url, locale), site).href,
  }));
}

/** Locales que precisam de rota prefixada (todos menos o padrão). */
export const prefixedLocales = locales.filter((l) => l !== defaultLocale);
