/**
 * Dados institucionais da Vectis, usados em todo o site.
 * ⚠ Valores marcados com PLACEHOLDER vieram do brand board e precisam ser
 *   confirmados com o cliente antes de publicar.
 */
export const site = {
  name: 'Vectis International Logistics',
  shortName: 'Vectis',
  tagline: 'The way forward.',
  url: 'https://www.vectislogistics.com',

  email: 'contato@vectislogistics.com', // PLACEHOLDER
  phone: '+55 11 99999-9999', // PLACEHOLDER
  phoneHref: '+5511999999999', // PLACEHOLDER
  whatsapp: '5511999999999', // PLACEHOLDER (formato internacional, só dígitos)

  address: {
    city: 'São Paulo',
    region: 'SP',
    country: 'BR',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/vectis-logistics', // PLACEHOLDER
    instagram: 'https://www.instagram.com/vectislogistics', // PLACEHOLDER
  },

  /** Deixe vazio para não carregar o Google Analytics. Ex.: 'G-XXXXXXXXXX'. */
  gaId: '',

  /** Endpoint PHP que recebe o formulário de cotação (fase seguinte). */
  quoteEndpoint: '/api/quote.php',

  /** Página de privacidade por idioma (a ser criada na próxima fase). */
  privacyPath: {
    pt: '/politica-de-privacidade/',
    en: '/en/privacy-policy/',
    es: '/es/politica-de-privacidad/',
  },
} as const;
