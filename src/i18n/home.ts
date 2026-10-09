/**
 * Conteúdo da home nos três idiomas.
 * Slogans e frases institucionais vêm do brand board da Vectis.
 */
import type { Locale } from './config';
import type { ServiceSlug } from '../data/services';

type ServiceCopy = Record<ServiceSlug, { text: string; tags: string[] }>;

const pt = {
  meta: {
    title: 'Vectis International Logistics | The Way Forward',
    description:
      'Logística internacional de ponta a ponta: frete marítimo, aéreo e rodoviário, desembaraço aduaneiro, armazenagem e seguro de carga. Conhecemos o caminho.',
  },
  hero: {
    h1: 'Vectis International Logistics: logística internacional, frete marítimo, aéreo e rodoviário e desembaraço aduaneiro',
    label: 'Destaques da Vectis',
    cta: 'Vamos em frente',
    prev: 'Slide anterior',
    next: 'Próximo slide',
    goTo: 'Ir para o slide',
    pause: 'Pausar apresentação',
    play: 'Retomar apresentação',
    pillars: ['Pessoas', 'Expertise', 'Soluções', 'Movimento', 'Oportunidades'],
    slides: [
      {
        label: 'Marítimo',
        eyebrow: 'Frete marítimo',
        title: ['Conhecemos o caminho.', 'Mantemos o seu negócio em movimento.'],
        text: 'Logística internacional para levar a sua empresa mais longe, hoje e amanhã.',
      },
      {
        label: 'Aéreo',
        eyebrow: 'Frete aéreo',
        title: ['Rotas diferentes.', 'Um amanhã mais forte.'],
        text: 'Agilidade e as melhores conexões para cargas urgentes, sensíveis e de alto valor.',
      },
      {
        label: 'Rodoviário',
        eyebrow: 'Transporte rodoviário',
        title: ['Desafios existem.', 'Soluções movem negócios.'],
        text: 'Do porto ou do aeroporto até a porta do seu cliente, em uma operação integrada.',
      },
      {
        label: 'Global',
        eyebrow: 'Rede global',
        title: ['Conexões globais.', 'Negócios reais.'],
        text: 'Parceiros em todos os continentes conectando a sua empresa a novas oportunidades.',
      },
    ],
  },
  about: {
    eyebrow: 'Quem somos',
    statement: 'Mais que logística. Movimento para um mundo de oportunidades.',
    text: 'A Vectis nasceu para simplificar o comércio exterior. Unimos pessoas experientes, uma rede global de parceiros e tecnologia para planejar, executar e acompanhar cada embarque, com a agilidade e a transparência de que o seu negócio precisa para seguir em frente.',
    signature: 'We know the way. We keep it moving.',
    pillars: [
      { title: 'Pessoas', text: 'Um time experiente e próximo, que trata cada carga como se fosse sua.' },
      { title: 'Expertise', text: 'Domínio técnico de todos os modais, regimes aduaneiros e rotas internacionais.' },
      { title: 'Soluções', text: 'Respostas sob medida para cada desafio da sua cadeia de suprimentos.' },
      { title: 'Movimento', text: 'Agilidade e visibilidade para manter a sua operação sempre fluindo.' },
      { title: 'Oportunidades', text: 'Novos mercados e novas rotas para levar o seu negócio mais longe.' },
    ],
  },
  services: {
    eyebrow: 'O que fazemos',
    title: ['Soluções de ponta a ponta', 'para mover o seu negócio'],
    text: 'Cuidamos de cada etapa da sua operação internacional, de forma integrada ou apenas com o serviço de que você precisa.',
    cta: 'Cotar este serviço',
    items: {
      ocean: {
        text: 'Contêineres completos ou consolidados com os principais armadores, nas rotas que conectam o Brasil ao mundo.',
        tags: ['FCL', 'LCL', 'Break bulk', 'Reefer'],
      },
      air: {
        text: 'Agilidade para cargas urgentes, perecíveis ou de alto valor, com consolidação e serviço porta a porta.',
        tags: ['Expresso', 'Consolidado', 'Charter', 'Perecíveis'],
      },
      road: {
        text: 'Coleta e distribuição em todo o Brasil e no Mercosul, integradas aos seus embarques internacionais.',
        tags: ['Carga fechada', 'Fracionada', 'Mercosul', 'Last mile'],
      },
      customs: {
        text: 'Despacho de importação e exportação com compliance, classificação fiscal e regimes aduaneiros especiais.',
        tags: ['DUIMP', 'LI / LPCO', 'Ex-tarifário', 'Drawback'],
      },
      warehousing: {
        text: 'Armazéns alfandegados e gerais, gestão de estoque e cross-docking para acelerar a sua operação.',
        tags: ['Alfandegado', 'Cross-docking', 'WMS', 'Fulfillment'],
      },
      insurance: {
        text: 'Cobertura internacional sob medida para que a sua mercadoria viaje protegida do início ao fim.',
        tags: ['All risks', 'Porta a porta', 'Averbação'],
      },
    } satisfies ServiceCopy,
  },
  process: {
    eyebrow: 'Como trabalhamos',
    title: 'The way forward.',
    text: 'Um caminho claro, do primeiro contato à entrega final.',
    steps: [
      { title: 'Diagnóstico', text: 'Entendemos a sua carga, os seus prazos, os custos e o momento do seu negócio.' },
      { title: 'Planejamento', text: 'Desenhamos a rota ideal: modal, consolidação, documentação e compliance.' },
      { title: 'Execução', text: 'Booking, desembaraço e transporte porta a porta com parceiros qualificados.' },
      { title: 'Visibilidade', text: 'Acompanhamento proativo de cada etapa, com um especialista dedicado a você.' },
    ],
  },
  network: {
    eyebrow: 'Rede global',
    title: ['Conexões globais.', 'Negócios reais.'],
    text: 'De São Paulo para o mundo: agentes e parceiros nos principais hubs logísticos conectam a sua empresa aos mercados que importam.',
    hq: 'Sede',
    cities: {
      saoPaulo: 'São Paulo',
      miami: 'Miami',
      newYork: 'Nova York',
      losAngeles: 'Los Angeles',
      mexicoCity: 'Cidade do México',
      buenosAires: 'Buenos Aires',
      santiago: 'Santiago',
      rotterdam: 'Roterdã',
      valencia: 'Valência',
      dubai: 'Dubai',
      mumbai: 'Mumbai',
      shanghai: 'Xangai',
      singapore: 'Singapura',
      johannesburg: 'Joanesburgo',
      sydney: 'Sydney',
    },
  },
  industries: {
    eyebrow: 'Setores',
    title: ['Experiência que atravessa', 'diferentes indústrias'],
    text: 'Cada setor tem seu ritmo, suas exigências e seus riscos. Conhecemos as particularidades de cada um.',
    items: [
      { icon: 'wheat', title: 'Agronegócio', text: 'Insumos, máquinas e commodities com rotas e prazos sob controle.' },
      { icon: 'car', title: 'Automotivo', text: 'Peças e componentes em fluxos just-in-time para a sua linha de produção.' },
      { icon: 'flask-conical', title: 'Químico', text: 'Cargas perigosas com documentação e manuseio especializados.' },
      { icon: 'pill', title: 'Saúde & Farma', text: 'Temperatura controlada e rastreabilidade de ponta a ponta.' },
      { icon: 'shopping-cart', title: 'Varejo & E-commerce', text: 'Importação recorrente e reposição ágil do seu estoque.' },
      { icon: 'cpu', title: 'Tecnologia', text: 'Eletrônicos de alto valor com segurança e velocidade.' },
      { icon: 'cog', title: 'Máquinas & Equipamentos', text: 'Cargas de projeto, superdimensionadas e break bulk.' },
      { icon: 'zap', title: 'Energia', text: 'Equipamentos para óleo e gás, solar e eólica no prazo certo.' },
    ],
  },
  contact: {
    eyebrow: 'Vamos em frente',
    title: ['Fale com um', 'especialista Vectis'],
    text: 'Conte sobre a sua carga e a sua operação. Um especialista retorna com uma proposta sob medida.',
    response: 'Retorno em até 1 dia útil',
    whatsapp: 'WhatsApp',
    form: {
      name: 'Nome completo',
      company: 'Empresa',
      email: 'E-mail corporativo',
      phone: 'Telefone / WhatsApp',
      service: 'Serviço de interesse',
      servicePlaceholder: 'Selecione',
      serviceOther: 'Outro / ainda não sei',
      operation: 'Operação',
      operations: ['Importação', 'Exportação', 'Ambas'],
      message: 'Conte sobre a sua carga',
      messagePlaceholder: 'Origem, destino, tipo de carga, volume, prazos…',
      consent: 'Concordo com o tratamento dos meus dados para retorno deste contato, conforme a',
      consentLink: 'Política de privacidade',
      submit: 'Enviar solicitação',
      sending: 'Enviando…',
      required: 'Preencha este campo.',
      invalidEmail: 'Informe um e-mail válido.',
      businessEmail: 'Use um e-mail corporativo para que possamos responder com prioridade.',
      consentRequired: 'Precisamos da sua autorização para entrar em contato.',
      successTitle: 'Solicitação enviada!',
      successText: 'Obrigado pelo contato. Um especialista Vectis vai retornar em breve.',
      again: 'Enviar outra solicitação',
      error: 'Não foi possível enviar agora. Tente novamente ou escreva para',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Perguntas frequentes',
    text: 'Não encontrou o que procurava? O nosso time está pronto para ajudar.',
    cta: 'Falar no WhatsApp',
    items: [
      {
        q: 'Quais serviços a Vectis oferece?',
        a: 'Frete marítimo (FCL e LCL), frete aéreo, transporte rodoviário, desembaraço aduaneiro, armazenagem e seguro de carga. Você pode contratar a operação completa, porta a porta, ou apenas a etapa de que precisa.',
      },
      {
        q: 'Vocês atendem importação e exportação?',
        a: 'Sim. Atuamos nos dois sentidos, para empresas de todos os portes, com rotas para as Américas, Europa, Ásia, Oriente Médio, África e Oceania.',
      },
      {
        q: 'A Vectis cuida do desembaraço aduaneiro?',
        a: 'Sim. O nosso time cuida da classificação fiscal, das licenças (LI/LPCO), do registro das declarações (DUIMP e DU-E) e do acompanhamento junto à Receita Federal e aos órgãos anuentes.',
      },
      {
        q: 'Como solicito uma cotação?',
        a: 'Pelo formulário desta página, pelo WhatsApp ou por e-mail. Informe origem, destino, tipo de carga, peso, volume e o Incoterm negociado. Se ainda não tiver tudo, ajudamos a levantar as informações.',
      },
      {
        q: 'Consigo acompanhar o meu embarque?',
        a: 'Sim. Você recebe atualizações proativas em cada etapa e conta com um especialista dedicado para tirar dúvidas e antecipar soluções.',
      },
      {
        q: 'Vocês transportam cargas especiais?',
        a: 'Sim: cargas perigosas (IMO), refrigeradas, de alto valor, superdimensionadas e cargas de projeto, sempre com o planejamento e a documentação adequados.',
      },
    ],
  },
  final: {
    statement: ['Logística internacional com propósito.', 'Hoje. E sempre adiante.'],
    cta: 'Vamos em frente',
  },
};

export type HomeCopy = typeof pt;

const en: HomeCopy = {
  meta: {
    title: 'Vectis International Logistics | The Way Forward',
    description:
      'End-to-end international logistics: ocean, air and road freight, customs brokerage, warehousing and cargo insurance. We know the way.',
  },
  hero: {
    h1: 'Vectis International Logistics: international logistics, ocean, air and road freight and customs brokerage',
    label: 'Vectis highlights',
    cta: "Let's move forward",
    prev: 'Previous slide',
    next: 'Next slide',
    goTo: 'Go to slide',
    pause: 'Pause slideshow',
    play: 'Resume slideshow',
    pillars: ['People', 'Expertise', 'Solutions', 'Movement', 'Opportunities'],
    slides: [
      {
        label: 'Ocean',
        eyebrow: 'Ocean freight',
        title: ['We know the way.', 'We keep it moving.'],
        text: 'International logistics for a further tomorrow.',
      },
      {
        label: 'Air',
        eyebrow: 'Air freight',
        title: ['Different routes.', 'A stronger tomorrow.'],
        text: 'Speed and the best connections for urgent, sensitive and high-value cargo.',
      },
      {
        label: 'Road',
        eyebrow: 'Road transport',
        title: ["Challenges don't stop business.", 'Solutions do.'],
        text: "From port or airport to your customer's door, in one integrated operation.",
      },
      {
        label: 'Global',
        eyebrow: 'Global network',
        title: ['Global connections.', 'Real business.'],
        text: 'Partners on every continent connecting your company to new opportunities.',
      },
    ],
  },
  about: {
    eyebrow: 'Who we are',
    statement: 'More than logistics. Movement for a world of opportunities.',
    text: 'Vectis was born to make international trade simpler. We bring together experienced people, a global partner network and technology to plan, execute and follow every shipment, with the speed and transparency your business needs to keep moving forward.',
    signature: 'We know the way. We keep it moving.',
    pillars: [
      { title: 'People', text: 'An experienced, hands-on team that treats every shipment as its own.' },
      { title: 'Expertise', text: 'Technical command of every mode, customs regime and international route.' },
      { title: 'Solutions', text: 'Tailored answers to every challenge in your supply chain.' },
      { title: 'Movement', text: 'Speed and visibility to keep your operation flowing.' },
      { title: 'Opportunities', text: 'New markets and new routes to take your business further.' },
    ],
  },
  services: {
    eyebrow: 'What we do',
    title: ['End-to-end solutions', 'to move your business'],
    text: 'We handle every step of your international operation, fully integrated or just the service you need.',
    cta: 'Quote this service',
    items: {
      ocean: {
        text: 'Full and consolidated containers with leading carriers, on the routes that connect Brazil to the world.',
        tags: ['FCL', 'LCL', 'Break bulk', 'Reefer'],
      },
      air: {
        text: 'Speed for urgent, perishable or high-value cargo, with consolidation and door-to-door service.',
        tags: ['Express', 'Consolidated', 'Charter', 'Perishables'],
      },
      road: {
        text: 'Pickup and distribution across Brazil and Mercosur, integrated with your international shipments.',
        tags: ['FTL', 'LTL', 'Mercosur', 'Last mile'],
      },
      customs: {
        text: 'Import and export clearance with compliance, tariff classification and special customs regimes.',
        tags: ['DUIMP', 'Licensing', 'Tariff relief', 'Drawback'],
      },
      warehousing: {
        text: 'Bonded and general warehouses, inventory management and cross-docking to speed up your operation.',
        tags: ['Bonded', 'Cross-docking', 'WMS', 'Fulfillment'],
      },
      insurance: {
        text: 'Tailored international coverage so your goods travel protected from start to finish.',
        tags: ['All risks', 'Door to door', 'Open policy'],
      },
    },
  },
  process: {
    eyebrow: 'How we work',
    title: 'The way forward.',
    text: 'A clear path, from first contact to final delivery.',
    steps: [
      { title: 'Discovery', text: 'We understand your cargo, deadlines, costs and where your business stands.' },
      { title: 'Planning', text: 'We design the ideal route: mode, consolidation, documents and compliance.' },
      { title: 'Execution', text: 'Booking, clearance and door-to-door transport with qualified partners.' },
      { title: 'Visibility', text: 'Proactive follow-up at every step, with a dedicated specialist.' },
    ],
  },
  network: {
    eyebrow: 'Global network',
    title: ['Global connections.', 'Real business.'],
    text: 'From São Paulo to the world: agents and partners in the main logistics hubs connect your company to the markets that matter.',
    hq: 'Headquarters',
    cities: {
      saoPaulo: 'São Paulo',
      miami: 'Miami',
      newYork: 'New York',
      losAngeles: 'Los Angeles',
      mexicoCity: 'Mexico City',
      buenosAires: 'Buenos Aires',
      santiago: 'Santiago',
      rotterdam: 'Rotterdam',
      valencia: 'Valencia',
      dubai: 'Dubai',
      mumbai: 'Mumbai',
      shanghai: 'Shanghai',
      singapore: 'Singapore',
      johannesburg: 'Johannesburg',
      sydney: 'Sydney',
    },
  },
  industries: {
    eyebrow: 'Industries',
    title: ['Experience across', 'different industries'],
    text: 'Every industry has its own pace, requirements and risks. We know the specifics of each one.',
    items: [
      { icon: 'wheat', title: 'Agribusiness', text: 'Inputs, machinery and commodities with routes and lead times under control.' },
      { icon: 'car', title: 'Automotive', text: 'Parts and components in just-in-time flows for your production line.' },
      { icon: 'flask-conical', title: 'Chemicals', text: 'Dangerous goods with specialized documents and handling.' },
      { icon: 'pill', title: 'Healthcare & Pharma', text: 'Temperature control and end-to-end traceability.' },
      { icon: 'shopping-cart', title: 'Retail & E-commerce', text: 'Recurring imports and fast restocking of your inventory.' },
      { icon: 'cpu', title: 'Technology', text: 'High-value electronics, moved safely and fast.' },
      { icon: 'cog', title: 'Machinery & Equipment', text: 'Project, oversized and break bulk cargo.' },
      { icon: 'zap', title: 'Energy', text: 'Oil & gas, solar and wind equipment, right on schedule.' },
    ],
  },
  contact: {
    eyebrow: "Let's move forward",
    title: ['Talk to a', 'Vectis specialist'],
    text: 'Tell us about your cargo and your operation. A specialist will get back to you with a tailored proposal.',
    response: 'Reply within 1 business day',
    whatsapp: 'WhatsApp',
    form: {
      name: 'Full name',
      company: 'Company',
      email: 'Business email',
      phone: 'Phone / WhatsApp',
      service: 'Service of interest',
      servicePlaceholder: 'Select',
      serviceOther: "Other / not sure yet",
      operation: 'Operation',
      operations: ['Import', 'Export', 'Both'],
      message: 'Tell us about your cargo',
      messagePlaceholder: 'Origin, destination, cargo type, volume, deadlines…',
      consent: 'I agree to the processing of my data so Vectis can reply to this request, as described in the',
      consentLink: 'Privacy policy',
      submit: 'Send request',
      sending: 'Sending…',
      required: 'Please fill in this field.',
      invalidEmail: 'Please enter a valid email.',
      businessEmail: 'Please use a business email so we can prioritize your request.',
      consentRequired: 'We need your permission to get in touch.',
      successTitle: 'Request sent!',
      successText: 'Thank you for reaching out. A Vectis specialist will get back to you shortly.',
      again: 'Send another request',
      error: 'We could not send your request right now. Please try again or write to',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    text: "Didn't find what you were looking for? Our team is ready to help.",
    cta: 'Chat on WhatsApp',
    items: [
      {
        q: 'What services does Vectis offer?',
        a: 'Ocean freight (FCL and LCL), air freight, road transport, customs brokerage, warehousing and cargo insurance. You can hire the full door-to-door operation or just the step you need.',
      },
      {
        q: 'Do you handle both imports and exports?',
        a: 'Yes. We work in both directions, for companies of every size, with routes to the Americas, Europe, Asia, the Middle East, Africa and Oceania.',
      },
      {
        q: 'Does Vectis handle customs clearance in Brazil?',
        a: 'Yes. Our team takes care of tariff classification, import licensing, filing the declarations (DUIMP and DU-E) and follow-up with Brazilian Customs and the other regulatory agencies.',
      },
      {
        q: 'How do I request a quote?',
        a: 'Through the form on this page, on WhatsApp or by email. Share origin, destination, cargo type, weight, volume and the agreed Incoterm. If you do not have everything yet, we will help you gather it.',
      },
      {
        q: 'Can I follow my shipment?',
        a: 'Yes. You receive proactive updates at every step and have a dedicated specialist to answer questions and anticipate solutions.',
      },
      {
        q: 'Do you move special cargo?',
        a: 'Yes: dangerous goods (IMO), reefer, high-value, oversized and project cargo, always with the right planning and documents.',
      },
    ],
  },
  final: {
    statement: ['International logistics with purpose.', 'Today. And always forward.'],
    cta: "Let's move forward",
  },
};

const es: HomeCopy = {
  meta: {
    title: 'Vectis International Logistics | The Way Forward',
    description:
      'Logística internacional de punta a punta: flete marítimo, aéreo y terrestre, despacho aduanero, almacenaje y seguro de carga. Conocemos el camino.',
  },
  hero: {
    h1: 'Vectis International Logistics: logística internacional, flete marítimo, aéreo y terrestre y despacho aduanero',
    label: 'Destacados de Vectis',
    cta: 'Sigamos adelante',
    prev: 'Diapositiva anterior',
    next: 'Siguiente diapositiva',
    goTo: 'Ir a la diapositiva',
    pause: 'Pausar presentación',
    play: 'Reanudar presentación',
    pillars: ['Personas', 'Experiencia', 'Soluciones', 'Movimiento', 'Oportunidades'],
    slides: [
      {
        label: 'Marítimo',
        eyebrow: 'Flete marítimo',
        title: ['Conocemos el camino.', 'Mantenemos su negocio en movimiento.'],
        text: 'Logística internacional para llevar su empresa más lejos, hoy y mañana.',
      },
      {
        label: 'Aéreo',
        eyebrow: 'Flete aéreo',
        title: ['Rutas distintas.', 'Un mañana más fuerte.'],
        text: 'Agilidad y las mejores conexiones para cargas urgentes, sensibles y de alto valor.',
      },
      {
        label: 'Terrestre',
        eyebrow: 'Transporte terrestre',
        title: ['Los desafíos existen.', 'Las soluciones mueven negocios.'],
        text: 'Del puerto o aeropuerto hasta la puerta de su cliente, en una operación integrada.',
      },
      {
        label: 'Global',
        eyebrow: 'Red global',
        title: ['Conexiones globales.', 'Negocios reales.'],
        text: 'Socios en todos los continentes conectando su empresa con nuevas oportunidades.',
      },
    ],
  },
  about: {
    eyebrow: 'Quiénes somos',
    statement: 'Más que logística. Movimiento hacia un mundo de oportunidades.',
    text: 'Vectis nació para simplificar el comercio exterior. Reunimos personas con experiencia, una red global de socios y tecnología para planificar, ejecutar y acompañar cada embarque, con la agilidad y la transparencia que su negocio necesita para seguir adelante.',
    signature: 'We know the way. We keep it moving.',
    pillars: [
      { title: 'Personas', text: 'Un equipo experimentado y cercano, que cuida cada carga como si fuera propia.' },
      { title: 'Experiencia', text: 'Dominio técnico de todos los modos, regímenes aduaneros y rutas internacionales.' },
      { title: 'Soluciones', text: 'Respuestas a medida para cada desafío de su cadena de suministro.' },
      { title: 'Movimiento', text: 'Agilidad y visibilidad para mantener su operación siempre fluyendo.' },
      { title: 'Oportunidades', text: 'Nuevos mercados y nuevas rutas para llevar su negocio más lejos.' },
    ],
  },
  services: {
    eyebrow: 'Qué hacemos',
    title: ['Soluciones de punta a punta', 'para mover su negocio'],
    text: 'Cuidamos cada etapa de su operación internacional, de forma integrada o solo con el servicio que necesita.',
    cta: 'Cotizar este servicio',
    items: {
      ocean: {
        text: 'Contenedores completos o consolidados con las principales navieras, en las rutas que conectan Brasil con el mundo.',
        tags: ['FCL', 'LCL', 'Break bulk', 'Reefer'],
      },
      air: {
        text: 'Agilidad para cargas urgentes, perecederas o de alto valor, con consolidación y servicio puerta a puerta.',
        tags: ['Expreso', 'Consolidado', 'Chárter', 'Perecederos'],
      },
      road: {
        text: 'Recolección y distribución en todo Brasil y el Mercosur, integradas a sus embarques internacionales.',
        tags: ['Carga completa', 'Fraccionada', 'Mercosur', 'Última milla'],
      },
      customs: {
        text: 'Despacho de importación y exportación con compliance, clasificación arancelaria y regímenes especiales.',
        tags: ['DUIMP', 'Licencias', 'Ex-tarifario', 'Drawback'],
      },
      warehousing: {
        text: 'Almacenes aduaneros y generales, gestión de inventario y cross-docking para acelerar su operación.',
        tags: ['Aduanero', 'Cross-docking', 'WMS', 'Fulfillment'],
      },
      insurance: {
        text: 'Cobertura internacional a medida para que su mercancía viaje protegida de principio a fin.',
        tags: ['All risks', 'Puerta a puerta', 'Póliza abierta'],
      },
    },
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'The way forward.',
    text: 'Un camino claro, del primer contacto a la entrega final.',
    steps: [
      { title: 'Diagnóstico', text: 'Entendemos su carga, sus plazos, sus costos y el momento de su negocio.' },
      { title: 'Planificación', text: 'Diseñamos la ruta ideal: modo, consolidación, documentación y compliance.' },
      { title: 'Ejecución', text: 'Booking, despacho y transporte puerta a puerta con socios calificados.' },
      { title: 'Visibilidad', text: 'Seguimiento proactivo de cada etapa, con un especialista dedicado.' },
    ],
  },
  network: {
    eyebrow: 'Red global',
    title: ['Conexiones globales.', 'Negocios reales.'],
    text: 'De São Paulo al mundo: agentes y socios en los principales hubs logísticos conectan su empresa con los mercados que importan.',
    hq: 'Sede',
    cities: {
      saoPaulo: 'São Paulo',
      miami: 'Miami',
      newYork: 'Nueva York',
      losAngeles: 'Los Ángeles',
      mexicoCity: 'Ciudad de México',
      buenosAires: 'Buenos Aires',
      santiago: 'Santiago',
      rotterdam: 'Róterdam',
      valencia: 'Valencia',
      dubai: 'Dubái',
      mumbai: 'Bombay',
      shanghai: 'Shanghái',
      singapore: 'Singapur',
      johannesburg: 'Johannesburgo',
      sydney: 'Sídney',
    },
  },
  industries: {
    eyebrow: 'Sectores',
    title: ['Experiencia que atraviesa', 'distintas industrias'],
    text: 'Cada sector tiene su ritmo, sus exigencias y sus riesgos. Conocemos las particularidades de cada uno.',
    items: [
      { icon: 'wheat', title: 'Agronegocio', text: 'Insumos, maquinaria y commodities con rutas y plazos bajo control.' },
      { icon: 'car', title: 'Automotriz', text: 'Piezas y componentes en flujos just-in-time para su línea de producción.' },
      { icon: 'flask-conical', title: 'Químico', text: 'Mercancías peligrosas con documentación y manipulación especializadas.' },
      { icon: 'pill', title: 'Salud y Farma', text: 'Temperatura controlada y trazabilidad de punta a punta.' },
      { icon: 'shopping-cart', title: 'Retail y E-commerce', text: 'Importación recurrente y reposición ágil de su inventario.' },
      { icon: 'cpu', title: 'Tecnología', text: 'Electrónicos de alto valor con seguridad y velocidad.' },
      { icon: 'cog', title: 'Maquinaria y Equipos', text: 'Carga de proyecto, sobredimensionada y break bulk.' },
      { icon: 'zap', title: 'Energía', text: 'Equipos de petróleo y gas, solar y eólica en el plazo correcto.' },
    ],
  },
  contact: {
    eyebrow: 'Sigamos adelante',
    title: ['Hable con un', 'especialista Vectis'],
    text: 'Cuéntenos sobre su carga y su operación. Un especialista le responderá con una propuesta a medida.',
    response: 'Respuesta en hasta 1 día hábil',
    whatsapp: 'WhatsApp',
    form: {
      name: 'Nombre completo',
      company: 'Empresa',
      email: 'Correo corporativo',
      phone: 'Teléfono / WhatsApp',
      service: 'Servicio de interés',
      servicePlaceholder: 'Seleccione',
      serviceOther: 'Otro / aún no lo sé',
      operation: 'Operación',
      operations: ['Importación', 'Exportación', 'Ambas'],
      message: 'Cuéntenos sobre su carga',
      messagePlaceholder: 'Origen, destino, tipo de carga, volumen, plazos…',
      consent: 'Acepto el tratamiento de mis datos para recibir respuesta a este contacto, según la',
      consentLink: 'Política de privacidad',
      submit: 'Enviar solicitud',
      sending: 'Enviando…',
      required: 'Complete este campo.',
      invalidEmail: 'Ingrese un correo válido.',
      businessEmail: 'Use un correo corporativo para que podamos responder con prioridad.',
      consentRequired: 'Necesitamos su autorización para contactarle.',
      successTitle: '¡Solicitud enviada!',
      successText: 'Gracias por contactarnos. Un especialista Vectis le responderá en breve.',
      again: 'Enviar otra solicitud',
      error: 'No fue posible enviar ahora. Inténtelo de nuevo o escriba a',
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
    text: '¿No encontró lo que buscaba? Nuestro equipo está listo para ayudar.',
    cta: 'Hablar por WhatsApp',
    items: [
      {
        q: '¿Qué servicios ofrece Vectis?',
        a: 'Flete marítimo (FCL y LCL), flete aéreo, transporte terrestre, despacho aduanero, almacenaje y seguro de carga. Puede contratar la operación completa, puerta a puerta, o solo la etapa que necesita.',
      },
      {
        q: '¿Atienden importación y exportación?',
        a: 'Sí. Trabajamos en ambos sentidos, para empresas de todos los tamaños, con rutas hacia las Américas, Europa, Asia, Medio Oriente, África y Oceanía.',
      },
      {
        q: '¿Vectis se encarga del despacho aduanero en Brasil?',
        a: 'Sí. Nuestro equipo se ocupa de la clasificación arancelaria, las licencias de importación, el registro de las declaraciones (DUIMP y DU-E) y el seguimiento ante la Aduana brasileña y los demás organismos.',
      },
      {
        q: '¿Cómo solicito una cotización?',
        a: 'Por el formulario de esta página, por WhatsApp o por correo. Indique origen, destino, tipo de carga, peso, volumen y el Incoterm negociado. Si aún no tiene todo, le ayudamos a reunir la información.',
      },
      {
        q: '¿Puedo seguir mi embarque?',
        a: 'Sí. Recibe actualizaciones proactivas en cada etapa y cuenta con un especialista dedicado para resolver dudas y anticipar soluciones.',
      },
      {
        q: '¿Transportan cargas especiales?',
        a: 'Sí: mercancías peligrosas (IMO), refrigeradas, de alto valor, sobredimensionadas y carga de proyecto, siempre con la planificación y la documentación adecuadas.',
      },
    ],
  },
  final: {
    statement: ['Logística internacional con propósito.', 'Hoy. Y siempre adelante.'],
    cta: 'Sigamos adelante',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { pt, en, es };
