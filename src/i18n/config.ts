/**
 * Idiomas do site. Mantenha em sincronia com `i18n` em astro.config.mjs.
 * Para trocar o idioma da raiz (/), altere `defaultLocale` aqui e lá.
 */
export const locales = ['pt', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string; og: string }> = {
  pt: { label: 'Português', short: 'PT', htmlLang: 'pt-BR', og: 'pt_BR' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', og: 'en_US' },
  es: { label: 'Español', short: 'ES', htmlLang: 'es', og: 'es_ES' },
};
