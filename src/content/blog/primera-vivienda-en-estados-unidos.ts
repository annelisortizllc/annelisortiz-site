import type { BlogPost } from './types'

export const post: BlogPost = {
  slug: 'primera-vivienda-en-estados-unidos',
  title:
    'Cómo comprar tu primera vivienda en Estados Unidos sin perder dinero ni tiempo',
  description:
    'El proceso completo paso a paso para familias hispanas que compran su primera casa en EE.UU.: desde preparación hasta cierre, sin tecnicismos y con lo que de verdad importa.',
  publishedAt: '2026-05-19',
  readingTimeMin: 9,
  category: 'Primera vivienda',
  keywords: [
    'comprar primera casa estados unidos',
    'primer comprador hispano',
    'cómo comprar casa en EE.UU.',
    'preaprobación hipoteca',
    'closing costs primera casa',
    'cierre de casa proceso',
  ],
  intro:
    'Comprar tu primera casa en Estados Unidos no es complicado, pero sí tiene pasos que en otros países no existen — y cada uno tiene su propio "tiempo crítico" donde las decisiones cuestan dinero. Este artículo es el mapa completo del proceso para que llegues al cierre con confianza y sin sorpresas.',
  sections: [
    {
      type: 'paragraph',
      text: 'Una verdad incómoda: en EE.UU. compras casa con un sistema muy diferente al de Puerto Rico, México, Colombia o donde sea que hayas crecido. Hay 7-9 actores distintos en cada transacción (originador, agente, asegurador, abogado de título, inspector, tasador, escrow, etc.), cada uno con su rol, y tú estás coordinando todo. Cuando entiendes la secuencia, deja de ser caótico.',
    },

    { type: 'heading', level: 2, text: 'Mes 0-6 · Preparación (lo que más pesa)' },
    {
      type: 'paragraph',
      text: 'Esta es la fase donde se gana o se pierde el 80% del éxito de tu compra. Si tu crédito y tus finanzas no están listas, ningún corredor de bienes raíces ni ningún originador puede hacer magia. Cubrí esto en detalle en el artículo de preparación crediticia, pero el resumen es:',
    },
    {
      type: 'list',
      items: [
        'Credit score arriba de 680 idealmente (640 mínimo para FHA viable)',
        'Debt-to-income (DTI) idealmente bajo 36% — incluyendo el pago futuro de la hipoteca',
        '2 años de historial laboral estable (si cambiaste de trabajo, espera 6+ meses en el nuevo)',
        'Down payment + closing costs en cuenta bancaria, con seasoning de 60+ días',
        'Reservas de 2-6 meses de pagos de hipoteca (depende del programa)',
      ],
    },

    { type: 'heading', level: 2, text: 'Mes 6 · Conseguir la pre-aprobación (NO la pre-calificación)' },
    {
      type: 'paragraph',
      text: 'Hay dos cosas que parecen iguales pero no lo son: la pre-qualification y la pre-approval. La pre-qualification es básicamente "le dijiste a un originador tus números por teléfono y te dieron un estimado". La pre-approval es real: el originador jala tu crédito, revisa tu W-2/1099, verifica tu cuenta de banco, y te emite una carta diciendo qué monto puede aprobar el lender con condiciones específicas.',
    },
    {
      type: 'paragraph',
      text: 'Los agentes de bienes raíces serios — y los vendedores — solo toman en serio una pre-approval real. Una pre-qualification es un sticker; una pre-approval es la llave para entrar al juego. Pide siempre pre-approval.',
    },
    {
      type: 'callout',
      tone: 'highlight',
      title: 'Dato útil',
      text: 'La pre-approval típicamente vale 90 días. Si pasan más, hay que renovar (jalar crédito de nuevo, actualizar pay stubs). No la saques 6 meses antes de comprar — sácala cuando estés a 1-2 meses de buscar casa de verdad.',
    },

    { type: 'heading', level: 2, text: 'Mes 7-9 · Buscar casa (y sobrevivir el mercado)' },
    {
      type: 'paragraph',
      text: 'Con tu pre-approval en mano, contactas a un agente de bienes raíces. Algo importante: en EE.UU. tradicionalmente el vendedor pagaba la comisión de AMBOS agentes (el suyo y el tuyo). Eso cambió en 2024 con el settlement de NAR — ahora muchos compradores tienen que negociar y firmar un buyer-broker agreement donde tú asumes la comisión de TU agente. Antes de firmar nada con un agente, lee el documento entero y entiende qué te están cobrando.',
    },
    {
      type: 'paragraph',
      text: 'Tres reglas para sobrevivir esta fase emocionalmente:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'No te enamores de la primera casa. El 90% de compradores cambia de opinión sobre lo que "necesitan" después de ver 10 propiedades. Visita varias antes de hacer oferta.',
        'En mercados competitivos, las ofertas escaladas (con appraisal gap waivers, escalation clauses, etc.) son comunes. Asegúrate de entender lo que firmas — un waiver de appraisal gap puede costarte $20k si la tasación viene baja.',
        'No te saltes la inspección, ni siquiera en un mercado de vendedor. Una inspección de $400 puede ahorrarte $40,000 en problemas estructurales escondidos. Si el vendedor exige no-inspection, busca otra casa.',
      ],
    },

    { type: 'heading', level: 2, text: 'Mes 9-10 · Bajo contrato (under contract)' },
    {
      type: 'paragraph',
      text: 'Una vez que tu oferta es aceptada y firman el contrato, entras a la fase de "under contract" o "in escrow". Esto típicamente dura 30-45 días. Aquí pasan en paralelo:',
    },
    {
      type: 'list',
      items: [
        'Inspección de la casa (dentro de los primeros 10-14 días)',
        'Tasación o "appraisal" (el banco contrata un tasador independiente)',
        'Búsqueda de título y compra de title insurance',
        'Procesamiento final del préstamo (documentos finales, verificación de empleo, verificación de fondos)',
        'Negociación de "repair requests" basados en lo que salga en la inspección',
        'Selección y compra de homeowners insurance (algunos lenders te lo exigen pre-cierre)',
      ],
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'No hagas esto bajo contrato',
      text: 'No abras crédito nuevo, no hagas compras grandes, no cambies de trabajo, no muevas dinero entre cuentas sin documentar, no co-firmes nada. Los lenders RE-VERIFICAN todo justo antes del cierre. He visto cerrar caer 3 días antes por un crédito nuevo de muebles que el comprador abrió "porque ya estaba aprobado".',
    },

    { type: 'heading', level: 2, text: 'Mes 10 · Closing day' },
    {
      type: 'paragraph',
      text: 'El día del cierre firmas entre 80 y 120 páginas de documentos. Lo que de verdad importa que leas:',
    },
    {
      type: 'list',
      items: [
        'Closing Disclosure (CD) — el documento más importante. Tu lender debe darte una copia 3 días antes del cierre. Compáralo contra tu Loan Estimate original. Si hay diferencias significativas, pregunta antes de firmar.',
        'Promissory Note — la promesa legal de pagar el préstamo',
        'Deed of Trust o Mortgage — pone tu casa como colateral del préstamo',
        'Title — quién es dueño legal (tú, después de cerrar)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pregunta antes de firmar lo que no entiendas. Es tu derecho y no es ofender al closing agent. Una decisión equivocada en una firma puede costarte miles.',
    },

    { type: 'heading', level: 2, text: 'Costos reales que nadie te detalla' },
    {
      type: 'paragraph',
      text: 'El precio de la casa es solo una parte. Para una casa de $300,000 con FHA 3.5% down, prepárate para:',
    },
    {
      type: 'list',
      items: [
        'Down payment: $10,500 (3.5%)',
        'Closing costs: $9,000-$12,000 (3-4%) — incluye origination fee, title insurance, appraisal, inspection, etc.',
        'Earnest money deposit: $3,000-$10,000 (al hacer la oferta, va al final hacia el down payment)',
        'Reservas post-cierre: $5,000-$10,000 (lender quiere ver que tienes runway)',
        'Mudanza y muebles esenciales: $3,000-$8,000',
        'Primer año de mantenimiento imprevisto: presupuesta 1% del valor de la casa ($3,000)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Total realista para empezar bien: $30,000-$50,000 disponibles, no solo el down payment. Esto es lo que más sorprende a las familias primerizas. Si tu plan era llegar con exactamente el down payment, mejor espera 6 meses más y junta el cushion. Comprar casa "ajustada" es la receta para estrés financiero los primeros 2 años.',
    },

    { type: 'heading', level: 2, text: 'Después del cierre: lo que NADIE te enseña' },
    {
      type: 'paragraph',
      text: 'Felicidades, eres dueña de casa. Tres cosas que hacer las primeras 4 semanas:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Cambia todas las cerraduras y códigos (las llaves anteriores podrían estar circulando)',
        'Localiza el shut-off principal de agua, gas y el panel eléctrico (en una emergencia no es momento de buscarlo)',
        'Configura los pagos automáticos de hipoteca, property tax, y homeowners insurance — la mayoría de defaults vienen de "se me olvidó pagar" no de "no tenía el dinero"',
      ],
    },
  ],
  faq: [
    {
      question: '¿Cuánto tiempo toma todo el proceso desde "quiero comprar" hasta el cierre?',
      answer:
        'Realista: 9-12 meses si empiezas desde cero. 6 meses de preparación + 1 mes para pre-approval y búsqueda inicial + 1-2 meses bajo contrato. Si tu crédito y finanzas ya están listas, puede ser tan rápido como 60-90 días desde la oferta hasta el cierre. Si NO estás lista, ningún atajo te va a ahorrar tiempo: el sistema entero es burocrático y cualquier intento de acelerar termina con préstamo rechazado o casa perdida.',
    },
    {
      question: '¿Puedo comprar casa sin ser ciudadana de EE.UU.?',
      answer:
        'Sí. Residentes permanentes (green card) tienen acceso a todos los préstamos. ITIN holders (sin SSN) tienen menos opciones pero existen "ITIN loans" en varios estados, generalmente con tasas más altas y down payments más grandes (15-20%). Algunos lenders especializados sirven a esta comunidad. No es tan fluido como con SSN, pero es 100% posible y legal.',
    },
    {
      question: '¿Down payment assistance programs son reales o estafa?',
      answer:
        'Son reales y MUY subutilizados por la comunidad hispana. Casi todos los estados tienen programas de down payment assistance — préstamos a 0% que se perdonan después de X años, grants no-reembolsables, o segundas hipotecas con tasas bajas. Requieren cumplir income limits y, normalmente, hacer un curso de "homebuyer education" (gratis, 6-8 horas online). Pregúntale a tu originador qué programas aplica para tu condado específico. He visto familias ahorrar $15,000-$30,000 con estos programas.',
    },
    {
      question: '¿Por qué algunos lenders me ofrecen tasa más baja que otros?',
      answer:
        'Tres razones: (1) algunos cobran origination fees más altos para compensar y la tasa "baja" en realidad es igual o peor cuando sumas todo (mira siempre el APR, no solo la rate); (2) algunos tienen relaciones con servicers diferentes y manejan distintos productos; (3) algunos buscan volumen y aceptan menos margen. Siempre pide 2-3 Loan Estimates y compáralos lado a lado. La diferencia entre un buen y un mal originador puede ser $20,000-$50,000 sobre la vida del préstamo.',
    },
    {
      question: '¿Vale la pena comprar ahora o esperar a que bajen las tasas?',
      answer:
        'La respuesta honesta: la tasa "perfecta" es la tasa que puedes pagar cómodamente HOY con tu situación actual. Esperar 6-12 meses esperando que bajen las tasas casi siempre te cuesta más en apreciación de precios que lo que te ahorra la tasa. Si tienes el down payment, el crédito, los ingresos estables, y la casa te cabe en el presupuesto al 28-32% de DTI — cómprala. Después siempre puedes refinanciar si las tasas bajan. Lo que no puedes hacer es retroceder en el tiempo y comprar a 2022 prices.',
    },
  ],
  relatedSlugs: ['preparacion-crediticia-antes-de-hipoteca', 'fha-vs-convencional-2026'],
}
