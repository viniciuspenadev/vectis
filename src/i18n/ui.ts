/**
 * Textos compartilhados (menu, rodapé, cookies, WhatsApp, nomes dos serviços).
 * Textos específicos da home ficam em ./home.ts.
 */
import type { Locale } from './config';
import type { ServiceSlug } from '../data/services';

type ServiceNames = Record<ServiceSlug, { title: string; short: string }>;

const pt = {
  skip: 'Pular para o conteúdo',
  nav: {
    main: 'Navegação principal',
    home: 'Vectis, página inicial',
    about: 'Sobre',
    services: 'Serviços',
    process: 'Como trabalhamos',
    industries: 'Setores',
    network: 'Rede global',
    contact: 'Contato',
    faq: 'FAQ',
    quote: 'Cotação',
    menu: 'Abrir menu',
    close: 'Fechar menu',
    language: 'Idioma',
    servicesIntro: 'Soluções integradas para importação e exportação, do primeiro contato à entrega final.',
    allServices: 'Ver todos os serviços',
  },
  services: {
    ocean: { title: 'Frete Marítimo', short: 'FCL, LCL e carga de projeto' },
    air: { title: 'Frete Aéreo', short: 'Agilidade para cargas urgentes' },
    road: { title: 'Transporte Rodoviário', short: 'Brasil e Mercosul' },
    customs: { title: 'Desembaraço Aduaneiro', short: 'Importação e exportação' },
    warehousing: { title: 'Armazenagem', short: 'Alfandegada e geral' },
    insurance: { title: 'Seguro de Carga', short: 'Cobertura internacional' },
  } satisfies ServiceNames,
  footer: {
    statement: ['Logística internacional com propósito.', 'Hoje. E sempre adiante.'],
    services: 'Serviços',
    company: 'Empresa',
    contact: 'Contato',
    follow: 'Siga a Vectis',
    rights: 'Todos os direitos reservados.',
    cookies: 'Preferências de cookies',
    privacy: 'Política de privacidade',
    hours: 'Seg. a sex., 8h às 18h',
    backToTop: 'Voltar ao topo',
  },
  cookie: {
    title: 'Sua privacidade',
    text: 'Usamos cookies para melhorar sua experiência e entender como o site é utilizado, conforme a LGPD.',
    accept: 'Aceitar',
    essential: 'Apenas essenciais',
    policy: 'Política de privacidade',
  },
  whatsapp: {
    label: 'Fale com a Vectis no WhatsApp',
    message: 'Olá! Vim pelo site da Vectis e gostaria de falar com um especialista.',
  },
};

export type UI = typeof pt;

const en: UI = {
  skip: 'Skip to content',
  nav: {
    main: 'Main navigation',
    home: 'Vectis home page',
    about: 'About',
    services: 'Services',
    process: 'How we work',
    industries: 'Industries',
    network: 'Global network',
    contact: 'Contact',
    faq: 'FAQ',
    quote: 'Get a quote',
    menu: 'Open menu',
    close: 'Close menu',
    language: 'Language',
    servicesIntro: 'Integrated import and export solutions, from first contact to final delivery.',
    allServices: 'See all services',
  },
  services: {
    ocean: { title: 'Ocean Freight', short: 'FCL, LCL and project cargo' },
    air: { title: 'Air Freight', short: 'Speed for urgent cargo' },
    road: { title: 'Road Transport', short: 'Brazil and Mercosur' },
    customs: { title: 'Customs Brokerage', short: 'Import and export' },
    warehousing: { title: 'Warehousing', short: 'Bonded and general' },
    insurance: { title: 'Cargo Insurance', short: 'International coverage' },
  },
  footer: {
    statement: ['International logistics with purpose.', 'Today. And always forward.'],
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    follow: 'Follow Vectis',
    rights: 'All rights reserved.',
    cookies: 'Cookie preferences',
    privacy: 'Privacy policy',
    hours: 'Mon to Fri, 8am to 6pm (BRT)',
    backToTop: 'Back to top',
  },
  cookie: {
    title: 'Your privacy',
    text: 'We use cookies to improve your experience and understand how the site is used, in line with data protection laws.',
    accept: 'Accept',
    essential: 'Essential only',
    policy: 'Privacy policy',
  },
  whatsapp: {
    label: 'Chat with Vectis on WhatsApp',
    message: 'Hello! I found Vectis through your website and would like to talk to a specialist.',
  },
};

const es: UI = {
  skip: 'Saltar al contenido',
  nav: {
    main: 'Navegación principal',
    home: 'Vectis, inicio',
    about: 'Nosotros',
    services: 'Servicios',
    process: 'Cómo trabajamos',
    industries: 'Sectores',
    network: 'Red global',
    contact: 'Contacto',
    faq: 'FAQ',
    quote: 'Cotizar',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    language: 'Idioma',
    servicesIntro: 'Soluciones integradas de importación y exportación, del primer contacto a la entrega final.',
    allServices: 'Ver todos los servicios',
  },
  services: {
    ocean: { title: 'Flete Marítimo', short: 'FCL, LCL y carga de proyecto' },
    air: { title: 'Flete Aéreo', short: 'Agilidad para cargas urgentes' },
    road: { title: 'Transporte Terrestre', short: 'Brasil y Mercosur' },
    customs: { title: 'Despacho Aduanero', short: 'Importación y exportación' },
    warehousing: { title: 'Almacenaje', short: 'Aduanero y general' },
    insurance: { title: 'Seguro de Carga', short: 'Cobertura internacional' },
  },
  footer: {
    statement: ['Logística internacional con propósito.', 'Hoy. Y siempre adelante.'],
    services: 'Servicios',
    company: 'Empresa',
    contact: 'Contacto',
    follow: 'Sigue a Vectis',
    rights: 'Todos los derechos reservados.',
    cookies: 'Preferencias de cookies',
    privacy: 'Política de privacidad',
    hours: 'Lun. a vie., 8h a 18h (BRT)',
    backToTop: 'Volver arriba',
  },
  cookie: {
    title: 'Tu privacidad',
    text: 'Usamos cookies para mejorar tu experiencia y entender cómo se utiliza el sitio, conforme a la normativa de protección de datos.',
    accept: 'Aceptar',
    essential: 'Solo esenciales',
    policy: 'Política de privacidad',
  },
  whatsapp: {
    label: 'Habla con Vectis por WhatsApp',
    message: '¡Hola! Encontré a Vectis en su sitio web y me gustaría hablar con un especialista.',
  },
};

export const ui: Record<Locale, UI> = { pt, en, es };
