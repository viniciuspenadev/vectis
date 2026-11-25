/**
 * Conteúdo da home nos três idiomas.
 * PT: textos revisados e aprovados pela diretoria (Vectis_Revisao_Textos_Site_para_Marketing_v2).
 * EN/ES: traduções dos textos aprovados em PT.
 * Tagline oficial: "Your way forward" · Frase institucional: "We know the way. We keep it moving."
 */
import type { Locale } from './config';
import type { ServiceSlug } from '../data/services';

type ServiceCopy = Record<ServiceSlug, { text: string; tags: string[] }>;

const pt = {
  meta: {
    title: 'Vectis International Logistics | Your Way Forward',
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
    pillars: ['Pessoas', 'Conhecimento', 'Agilidade', 'Presença', 'Movimento'],
    slides: [
      {
        label: 'Marítimo',
        eyebrow: 'Frete marítimo',
        title: ['Logística internacional.', 'Simples, ágil e eficiente.'],
        text: 'O caminho certo para o seu negócio ir mais longe.',
      },
      {
        label: 'Aéreo',
        eyebrow: 'Frete aéreo',
        title: ['Prazos curtos exigem', 'escolhas inteligentes.'],
        text: 'Agilidade e conexões estratégicas para cargas urgentes, sensíveis e de alto valor.',
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
        text: 'Uma rede internacional de parceiros conectando sua operação aos principais mercados do mundo.',
      },
    ],
  },
  about: {
    eyebrow: 'Quem somos',
    statement:
      'Na Vectis, experiência, conhecimento de mercado e execução caminham juntos para desenvolver soluções alinhadas às necessidades de cada operação.',
    text: 'Mais do que movimentar cargas, entendemos o negócio por trás de cada embarque. Assim, transformamos complexidade em decisões mais simples, respostas mais rápidas e caminhos mais eficientes.',
    signature: 'We know the way. We keep it moving.',
    pillars: [
      {
        title: 'Pessoas',
        lead: 'Relações que fazem a diferença.',
        text: 'Um time experiente, acessível e comprometido com cada etapa da operação.',
      },
      {
        title: 'Conhecimento',
        lead: 'Experiência que orienta decisões.',
        text: 'Conhecemos o mercado, as rotas e os desafios da logística internacional para encontrar caminhos mais eficientes.',
      },
      {
        title: 'Agilidade',
        lead: 'O tempo importa. A resposta também.',
        text: 'Decisões rápidas, comunicação direta e capacidade de reagir quando o cenário muda.',
      },
      {
        title: 'Presença',
        lead: 'Sempre perto. Da origem ao destino.',
        text: 'Acompanhamos cada operação de forma próxima, com comunicação clara e visibilidade ao longo do caminho.',
      },
      {
        title: 'Movimento',
        lead: 'O caminho só importa quando leva adiante.',
        text: 'Transformamos decisões em execução para manter cargas e negócios em movimento.',
      },
    ],
  },
  services: {
    eyebrow: 'O que fazemos',
    title: ['Tudo o que a sua operação', 'precisa para seguir em frente.'],
    text: 'Cuidamos de cada etapa da sua operação internacional, de forma integrada ou apenas com o serviço de que você precisa.',
    cta: 'Cotar este serviço',
    items: {
      ocean: {
        text: 'Soluções em frete marítimo para diferentes perfis de carga, com os principais armadores e rotas internacionais.',
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
        text: 'Soluções de armazenagem alfandegada e geral, gestão de estoque e cross-docking integradas à sua operação.',
        tags: ['Alfandegado', 'Cross-docking', 'WMS', 'Fulfillment'],
      },
      insurance: {
        text: 'Seguro de carga para operações nacionais e internacionais, com coberturas adequadas às características de cada embarque.',
        tags: ['All risks', 'Porta a porta', 'Averbação'],
      },
    } satisfies ServiceCopy,
  },
  process: {
    eyebrow: 'Como trabalhamos',
    signature: 'We know the way. We keep it moving.',
    title: 'Your way forward',
    text: 'Cada operação tem suas particularidades. Nosso trabalho começa por entendê-las.',
    steps: [
      {
        title: 'Entendemos',
        text: 'Origem, destino, carga, prazos e prioridades. Entendemos o contexto da operação antes de definir a melhor solução.',
      },
      {
        title: 'Planejamos',
        text: 'Avaliamos rotas, modais, parceiros e alternativas para construir uma operação eficiente e adequada a cada necessidade.',
      },
      {
        title: 'Executamos',
        text: 'Coordenamos cada etapa da operação, conectando os envolvidos e respondendo rapidamente aos desafios ao longo do percurso.',
      },
      {
        title: 'Acompanhamos',
        text: 'Mantemos comunicação próxima e visibilidade durante toda a operação, da origem ao destino.',
      },
    ],
  },
  network: {
    eyebrow: 'Rede global',
    title: ['Conexões globais.', 'Negócios reais.'],
    text: [
      'Operamos a partir de um dos principais centros do comércio exterior brasileiro, conectados a uma rede internacional de agentes, armadores, companhias aéreas e parceiros logísticos.',
      'Essa estrutura nos permite coordenar operações em diferentes mercados, avaliar alternativas e construir o melhor caminho para cada embarque.',
    ],
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
    title: ['Experiência que atravessa', 'diferentes mercados'],
    text: 'Diferentes setores exigem diferentes soluções. Atuamos em operações com perfis, mercados e necessidades distintas, combinando conhecimento e capacidade de execução para responder às particularidades de cada negócio.',
    items: [
      { icon: 'wheat', title: 'Agronegócio & Alimentos', text: 'Commodities, alimentos, proteína animal, ingredientes e insumos.' },
      { icon: 'factory', title: 'Indústria & Manufatura', text: 'Máquinas, equipamentos, partes, peças, componentes e produtos industrializados.' },
      { icon: 'flask-conical', title: 'Matérias-primas & Insumos', text: 'Polímeros, produtos químicos e insumos para diferentes cadeias produtivas.' },
      { icon: 'shopping-cart', title: 'Bens de consumo', text: 'Produtos acabados, móveis e mercadorias destinadas ao varejo e distribuição.' },
      { icon: 'container', title: 'Projetos & Cargas especiais', text: 'Operações que exigem planejamento específico em função das características, dimensões ou necessidades da carga.' },
    ],
  },
  contact: {
    eyebrow: 'Vamos em frente',
    title: ['Fale com um', 'especialista Vectis'],
    text: 'Conte sobre a sua carga e a sua operação. Nosso time retorna com uma proposta adequada às suas necessidades.',
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
        a: 'Sim. Coordenamos todo o processo de desembaraço aduaneiro, incluindo classificação fiscal, licenças, registro das declarações e acompanhamento junto à Receita Federal e aos órgãos anuentes.',
      },
      {
        q: 'Como solicito uma cotação?',
        a: 'Pelo formulário desta página, pelo WhatsApp ou por e-mail. Informe origem, destino, tipo de carga, peso, volume e o Incoterm negociado. Se ainda não tiver tudo, ajudamos a levantar as informações.',
      },
      {
        q: 'Consigo acompanhar o meu embarque?',
        a: 'Sim. Você recebe atualizações proativas ao longo da operação e conta com nosso time para acompanhar o embarque e esclarecer dúvidas.',
      },
      {
        q: 'Vocês transportam cargas especiais?',
        a: 'Sim: cargas perigosas (IMO), refrigeradas, de alto valor, superdimensionadas e cargas de projeto, sempre com o planejamento e a documentação adequados.',
      },
    ],
  },
  final: {
    title: 'Your way forward',
    statement: 'O próximo destino começa com o caminho certo.',
    cta: 'Fale com a Vectis',
  },
};

export type HomeCopy = typeof pt;

const en: HomeCopy = {
  meta: {
    title: 'Vectis International Logistics | Your Way Forward',
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
    pillars: ['People', 'Knowledge', 'Agility', 'Presence', 'Movement'],
    slides: [
      {
        label: 'Ocean',
        eyebrow: 'Ocean freight',
        title: ['International logistics.', 'Simple, fast and efficient.'],
        text: 'The right path for your business to go further.',
      },
      {
        label: 'Air',
        eyebrow: 'Air freight',
        title: ['Tight deadlines call for', 'smart choices.'],
        text: 'Speed and strategic connections for urgent, sensitive and high-value cargo.',
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
        text: "An international partner network connecting your operation to the world's key markets.",
      },
    ],
  },
  about: {
    eyebrow: 'Who we are',
    statement:
      'At Vectis, experience, market knowledge and execution work together to build solutions aligned with the needs of each operation.',
    text: 'More than moving cargo, we understand the business behind every shipment. That is how we turn complexity into simpler decisions, faster answers and more efficient paths.',
    signature: 'We know the way. We keep it moving.',
    pillars: [
      {
        title: 'People',
        lead: 'Relationships that make a difference.',
        text: 'An experienced, accessible team committed to every step of the operation.',
      },
      {
        title: 'Knowledge',
        lead: 'Experience that guides decisions.',
        text: 'We know the market, the routes and the challenges of international logistics, so we can find more efficient paths.',
      },
      {
        title: 'Agility',
        lead: 'Time matters. So does the answer.',
        text: 'Quick decisions, direct communication and the ability to react when the scenario changes.',
      },
      {
        title: 'Presence',
        lead: 'Always close. From origin to destination.',
        text: 'We follow every operation closely, with clear communication and visibility along the way.',
      },
      {
        title: 'Movement',
        lead: 'A path only matters when it leads forward.',
        text: 'We turn decisions into execution to keep cargo and business moving.',
      },
    ],
  },
  services: {
    eyebrow: 'What we do',
    title: ['Everything your operation', 'needs to keep moving forward.'],
    text: 'We handle every step of your international operation, fully integrated or just the service you need.',
    cta: 'Quote this service',
    items: {
      ocean: {
        text: 'Ocean freight solutions for different cargo profiles, with leading carriers and international routes.',
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
        text: 'Bonded and general warehousing, inventory management and cross-docking solutions integrated with your operation.',
        tags: ['Bonded', 'Cross-docking', 'WMS', 'Fulfillment'],
      },
      insurance: {
        text: 'Cargo insurance for domestic and international operations, with coverage suited to the characteristics of each shipment.',
        tags: ['All risks', 'Door to door', 'Open policy'],
      },
    },
  },
  process: {
    eyebrow: 'How we work',
    signature: 'We know the way. We keep it moving.',
    title: 'Your way forward',
    text: 'Every operation has its own specifics. Our work starts by understanding them.',
    steps: [
      {
        title: 'We understand',
        text: 'Origin, destination, cargo, deadlines and priorities. We understand the context of the operation before defining the best solution.',
      },
      {
        title: 'We plan',
        text: 'We assess routes, modes, partners and alternatives to build an efficient operation suited to each need.',
      },
      {
        title: 'We execute',
        text: 'We coordinate every step of the operation, connecting everyone involved and responding quickly to challenges along the way.',
      },
      {
        title: 'We follow up',
        text: 'We keep close communication and visibility throughout the operation, from origin to destination.',
      },
    ],
  },
  network: {
    eyebrow: 'Global network',
    title: ['Global connections.', 'Real business.'],
    text: [
      "We operate from one of Brazil's leading foreign trade hubs, connected to an international network of agents, ocean carriers, airlines and logistics partners.",
      'This structure allows us to coordinate operations across different markets, assess alternatives and build the best path for each shipment.',
    ],
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
    title: ['Experience across', 'different markets'],
    text: 'Different industries require different solutions. We handle operations with distinct profiles, markets and needs, combining knowledge and execution capacity to respond to the specifics of each business.',
    items: [
      { icon: 'wheat', title: 'Agribusiness & Food', text: 'Commodities, food, animal protein, ingredients and inputs.' },
      { icon: 'factory', title: 'Industry & Manufacturing', text: 'Machinery, equipment, parts, components and manufactured goods.' },
      { icon: 'flask-conical', title: 'Raw materials & Inputs', text: 'Polymers, chemicals and inputs for different production chains.' },
      { icon: 'shopping-cart', title: 'Consumer goods', text: 'Finished products, furniture and goods for retail and distribution.' },
      { icon: 'container', title: 'Projects & Special cargo', text: 'Operations that require specific planning due to the characteristics, dimensions or needs of the cargo.' },
    ],
  },
  contact: {
    eyebrow: "Let's move forward",
    title: ['Talk to a', 'Vectis specialist'],
    text: 'Tell us about your cargo and your operation. Our team will get back to you with a proposal suited to your needs.',
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
        a: 'Yes. We coordinate the entire customs clearance process, including tariff classification, licensing, filing of declarations and follow-up with Brazilian Customs and the other regulatory agencies.',
      },
      {
        q: 'How do I request a quote?',
        a: 'Through the form on this page, on WhatsApp or by email. Share origin, destination, cargo type, weight, volume and the agreed Incoterm. If you do not have everything yet, we will help you gather it.',
      },
      {
        q: 'Can I follow my shipment?',
        a: 'Yes. You receive proactive updates throughout the operation and can count on our team to follow your shipment and answer your questions.',
      },
      {
        q: 'Do you move special cargo?',
        a: 'Yes: dangerous goods (IMO), reefer, high-value, oversized and project cargo, always with the right planning and documents.',
      },
    ],
  },
  final: {
    title: 'Your way forward',
    statement: 'The next destination starts with the right path.',
    cta: 'Talk to Vectis',
  },
};

const es: HomeCopy = {
  meta: {
    title: 'Vectis International Logistics | Your Way Forward',
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
    pillars: ['Personas', 'Conocimiento', 'Agilidad', 'Presencia', 'Movimiento'],
    slides: [
      {
        label: 'Marítimo',
        eyebrow: 'Flete marítimo',
        title: ['Logística internacional.', 'Simple, ágil y eficiente.'],
        text: 'El camino correcto para que su negocio llegue más lejos.',
      },
      {
        label: 'Aéreo',
        eyebrow: 'Flete aéreo',
        title: ['Plazos cortos exigen', 'decisiones inteligentes.'],
        text: 'Agilidad y conexiones estratégicas para cargas urgentes, sensibles y de alto valor.',
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
        text: 'Una red internacional de socios que conecta su operación con los principales mercados del mundo.',
      },
    ],
  },
  about: {
    eyebrow: 'Quiénes somos',
    statement:
      'En Vectis, experiencia, conocimiento del mercado y ejecución van de la mano para desarrollar soluciones alineadas con las necesidades de cada operación.',
    text: 'Más que mover cargas, entendemos el negocio detrás de cada embarque. Así transformamos la complejidad en decisiones más simples, respuestas más rápidas y caminos más eficientes.',
    signature: 'We know the way. We keep it moving.',
    pillars: [
      {
        title: 'Personas',
        lead: 'Relaciones que marcan la diferencia.',
        text: 'Un equipo experimentado, accesible y comprometido con cada etapa de la operación.',
      },
      {
        title: 'Conocimiento',
        lead: 'Experiencia que orienta decisiones.',
        text: 'Conocemos el mercado, las rutas y los desafíos de la logística internacional para encontrar caminos más eficientes.',
      },
      {
        title: 'Agilidad',
        lead: 'El tiempo importa. La respuesta también.',
        text: 'Decisiones rápidas, comunicación directa y capacidad de reaccionar cuando el escenario cambia.',
      },
      {
        title: 'Presencia',
        lead: 'Siempre cerca. Del origen al destino.',
        text: 'Acompañamos cada operación de cerca, con comunicación clara y visibilidad a lo largo del camino.',
      },
      {
        title: 'Movimiento',
        lead: 'El camino solo importa cuando lleva adelante.',
        text: 'Transformamos decisiones en ejecución para mantener cargas y negocios en movimiento.',
      },
    ],
  },
  services: {
    eyebrow: 'Qué hacemos',
    title: ['Todo lo que su operación', 'necesita para seguir adelante.'],
    text: 'Cuidamos cada etapa de su operación internacional, de forma integrada o solo con el servicio que necesita.',
    cta: 'Cotizar este servicio',
    items: {
      ocean: {
        text: 'Soluciones de flete marítimo para distintos perfiles de carga, con las principales navieras y rutas internacionales.',
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
        text: 'Soluciones de almacenaje aduanero y general, gestión de inventario y cross-docking integradas a su operación.',
        tags: ['Aduanero', 'Cross-docking', 'WMS', 'Fulfillment'],
      },
      insurance: {
        text: 'Seguro de carga para operaciones nacionales e internacionales, con coberturas adecuadas a las características de cada embarque.',
        tags: ['All risks', 'Puerta a puerta', 'Póliza abierta'],
      },
    },
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    signature: 'We know the way. We keep it moving.',
    title: 'Your way forward',
    text: 'Cada operación tiene sus particularidades. Nuestro trabajo empieza por entenderlas.',
    steps: [
      {
        title: 'Entendemos',
        text: 'Origen, destino, carga, plazos y prioridades. Entendemos el contexto de la operación antes de definir la mejor solución.',
      },
      {
        title: 'Planificamos',
        text: 'Evaluamos rutas, modos, socios y alternativas para construir una operación eficiente y adecuada a cada necesidad.',
      },
      {
        title: 'Ejecutamos',
        text: 'Coordinamos cada etapa de la operación, conectando a los involucrados y respondiendo rápidamente a los desafíos a lo largo del recorrido.',
      },
      {
        title: 'Acompañamos',
        text: 'Mantenemos una comunicación cercana y visibilidad durante toda la operación, del origen al destino.',
      },
    ],
  },
  network: {
    eyebrow: 'Red global',
    title: ['Conexiones globales.', 'Negocios reales.'],
    text: [
      'Operamos desde uno de los principales centros del comercio exterior brasileño, conectados a una red internacional de agentes, navieras, aerolíneas y socios logísticos.',
      'Esta estructura nos permite coordinar operaciones en distintos mercados, evaluar alternativas y construir el mejor camino para cada embarque.',
    ],
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
    title: ['Experiencia que atraviesa', 'distintos mercados'],
    text: 'Distintos sectores exigen distintas soluciones. Actuamos en operaciones con perfiles, mercados y necesidades diferentes, combinando conocimiento y capacidad de ejecución para responder a las particularidades de cada negocio.',
    items: [
      { icon: 'wheat', title: 'Agronegocio y Alimentos', text: 'Commodities, alimentos, proteína animal, ingredientes e insumos.' },
      { icon: 'factory', title: 'Industria y Manufactura', text: 'Máquinas, equipos, partes, piezas, componentes y productos industrializados.' },
      { icon: 'flask-conical', title: 'Materias primas e Insumos', text: 'Polímeros, productos químicos e insumos para distintas cadenas productivas.' },
      { icon: 'shopping-cart', title: 'Bienes de consumo', text: 'Productos terminados, muebles y mercancías destinadas al retail y la distribución.' },
      { icon: 'container', title: 'Proyectos y Cargas especiales', text: 'Operaciones que exigen una planificación específica según las características, dimensiones o necesidades de la carga.' },
    ],
  },
  contact: {
    eyebrow: 'Sigamos adelante',
    title: ['Hable con un', 'especialista Vectis'],
    text: 'Cuéntenos sobre su carga y su operación. Nuestro equipo le responderá con una propuesta adecuada a sus necesidades.',
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
        a: 'Sí. Coordinamos todo el proceso de despacho aduanero, incluida la clasificación arancelaria, las licencias, el registro de las declaraciones y el seguimiento ante la Aduana brasileña y los demás organismos intervinientes.',
      },
      {
        q: '¿Cómo solicito una cotización?',
        a: 'Por el formulario de esta página, por WhatsApp o por correo. Indique origen, destino, tipo de carga, peso, volumen y el Incoterm negociado. Si aún no tiene todo, le ayudamos a reunir la información.',
      },
      {
        q: '¿Puedo seguir mi embarque?',
        a: 'Sí. Recibe actualizaciones proactivas a lo largo de la operación y cuenta con nuestro equipo para seguir el embarque y resolver dudas.',
      },
      {
        q: '¿Transportan cargas especiales?',
        a: 'Sí: mercancías peligrosas (IMO), refrigeradas, de alto valor, sobredimensionadas y carga de proyecto, siempre con la planificación y la documentación adecuadas.',
      },
    ],
  },
  final: {
    title: 'Your way forward',
    statement: 'El próximo destino empieza con el camino correcto.',
    cta: 'Hable con Vectis',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { pt, en, es };
