import type { BlogPost } from './types'

export const post: BlogPost = {
  publishedAt: '2026-05-19',
  readingTimeMin: 9,
  relatedSlugs: ['preparacion-crediticia-antes-de-hipoteca', 'fha-vs-convencional-2026'],
  es: {
    slug: 'primera-vivienda-en-estados-unidos',
    title:
      'Cómo comprar tu primera vivienda en Estados Unidos sin perder dinero ni tiempo',
    description:
      'El proceso completo paso a paso para familias hispanas que compran su primera casa en EE.UU.: desde preparación hasta cierre, sin tecnicismos y con lo que de verdad importa.',
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
  },
  en: {
    slug: 'how-to-buy-first-home-in-usa',
    title:
      'How to Buy Your First Home in the US Without Wasting Money or Time',
    description:
      'The complete step-by-step process for Hispanic families buying their first home in the US: from preparation to closing, jargon-free and focused on what actually matters.',
    category: 'First-time homebuyer',
    keywords: [
      'how to buy first home in usa',
      'first time home buyer hispanic',
      'first home buying process',
      'mortgage pre-approval guide',
      'closing costs first home',
      'home closing process explained',
    ],
    intro:
      'Buying your first home in the US is not complicated, but it does include steps that don\'t exist in other countries — and each one has its own "critical window" where decisions cost real money. This article is the complete map of the process so you arrive at closing day with confidence and no surprises.',
    sections: [
      {
        type: 'paragraph',
        text: 'An uncomfortable truth: in the US you buy a home through a system that\'s very different from Puerto Rico, Mexico, Colombia, or wherever you grew up. There are 7-9 different players in every transaction (loan officer, agent, underwriter, title attorney, inspector, appraiser, escrow, etc.), each with their own role, and you\'re the one coordinating it all. Once you understand the sequence, it stops feeling chaotic.',
      },

      { type: 'heading', level: 2, text: 'Month 0-6 · Preparation (this is where it\'s won or lost)' },
      {
        type: 'paragraph',
        text: 'This is the phase that decides 80% of your home-buying success. If your credit and finances aren\'t ready, no real estate agent or loan officer can work magic. I covered this in detail in the credit preparation article, but here\'s the short version:',
      },
      {
        type: 'list',
        items: [
          'Credit score ideally above 680 (640 is the realistic minimum for FHA)',
          'Debt-to-income (DTI) ideally below 36% — including your future mortgage payment',
          '2 years of stable work history (if you switched jobs, wait 6+ months in the new one)',
          'Down payment + closing costs sitting in your bank account, with 60+ days of seasoning',
          'Reserves of 2-6 months of mortgage payments (depending on the loan program)',
        ],
      },

      { type: 'heading', level: 2, text: 'Month 6 · Get the pre-approval (NOT the pre-qualification)' },
      {
        type: 'paragraph',
        text: 'Two things look identical but aren\'t: pre-qualification and pre-approval. Pre-qualification is basically "you told a loan officer your numbers over the phone and they gave you a ballpark." Pre-approval is the real deal: the loan officer pulls your credit, reviews your W-2/1099, verifies your bank account, and issues a letter stating how much the lender can approve under specific conditions, subject to final underwriting.',
      },
      {
        type: 'paragraph',
        text: 'Serious real estate agents — and sellers — only take a real pre-approval seriously. A pre-qualification is a sticker; a pre-approval is the key that gets you into the game. Always ask for a pre-approval.',
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Useful tip',
        text: 'A pre-approval is typically valid for 90 days. After that, you have to renew it (re-pull credit, update pay stubs). Don\'t get it 6 months before buying — pull it when you\'re 1-2 months away from seriously house-hunting.',
      },

      { type: 'heading', level: 2, text: 'Month 7-9 · House-hunting (and surviving the market)' },
      {
        type: 'paragraph',
        text: 'With your pre-approval in hand, you reach out to a real estate agent. Something important: in the US the seller traditionally paid BOTH agents\' commissions (theirs and yours). That changed in 2024 with the NAR settlement — now many buyers have to negotiate and sign a buyer-broker agreement where YOU take on your agent\'s commission. Before you sign anything with an agent, read the whole document and understand exactly what you\'re being charged.',
      },
      {
        type: 'paragraph',
        text: 'Three rules to survive this phase emotionally:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Don\'t fall in love with the first house. 90% of buyers change their mind about what they "need" after seeing 10 properties. Visit several before making an offer.',
          'In competitive markets, escalated offers (with appraisal gap waivers, escalation clauses, etc.) are common. Make sure you understand what you\'re signing — an appraisal gap waiver can cost you $20k if the appraisal comes in low.',
          'Don\'t skip the inspection, not even in a seller\'s market. A $400 inspection can save you $40,000 in hidden structural problems. If the seller demands no inspection, find another house.',
        ],
      },

      { type: 'heading', level: 2, text: 'Month 9-10 · Under contract' },
      {
        type: 'paragraph',
        text: 'Once your offer is accepted and the contract is signed, you enter the "under contract" or "in escrow" phase. This typically lasts 30-45 days. Several things happen in parallel:',
      },
      {
        type: 'list',
        items: [
          'Home inspection (within the first 10-14 days)',
          'Appraisal (the bank hires an independent appraiser)',
          'Title search and title insurance purchase',
          'Final loan processing (final documents, employment verification, verification of funds)',
          'Negotiation of repair requests based on what comes up in the inspection',
          'Selecting and purchasing homeowners insurance (some lenders require it before closing)',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Don\'t do this while under contract',
        text: 'Don\'t open new credit, don\'t make big purchases, don\'t change jobs, don\'t move money between accounts without documenting it, don\'t co-sign anything. Lenders RE-VERIFY everything right before closing. I\'ve seen closings collapse 3 days out because the buyer opened a new furniture credit line "since they were already approved."',
      },

      { type: 'heading', level: 2, text: 'Month 10 · Closing day' },
      {
        type: 'paragraph',
        text: 'On closing day you\'ll sign between 80 and 120 pages of documents. The ones that actually matter to read:',
      },
      {
        type: 'list',
        items: [
          'Closing Disclosure (CD) — the most important document. Your lender must give you a copy 3 days before closing. Compare it against your original Loan Estimate. If there are meaningful differences, ask before signing.',
          'Promissory Note — the legal promise to repay the loan',
          'Deed of Trust or Mortgage — puts your home up as collateral for the loan',
          'Title — who legally owns the property (you, after closing)',
        ],
      },
      {
        type: 'paragraph',
        text: 'Ask before signing anything you don\'t understand. It\'s your right, and you\'re not offending the closing agent. One wrong signature can cost you thousands.',
      },

      { type: 'heading', level: 2, text: 'Real costs nobody breaks down for you' },
      {
        type: 'paragraph',
        text: 'The price of the home is just one piece. For a $300,000 home with FHA at 3.5% down, plan for:',
      },
      {
        type: 'list',
        items: [
          'Down payment: $10,500 (3.5%)',
          'Closing costs: $9,000-$12,000 (3-4%) — includes origination fee, title insurance, appraisal, inspection, etc.',
          'Earnest money deposit: $3,000-$10,000 (paid when you make the offer, applied toward the down payment at closing)',
          'Post-closing reserves: $5,000-$10,000 (the lender wants to see you have runway)',
          'Moving costs and essential furniture: $3,000-$8,000',
          'First-year unexpected maintenance: budget 1% of the home\'s value ($3,000)',
        ],
      },
      {
        type: 'paragraph',
        text: 'A realistic total to start strong: $30,000-$50,000 available, not just the down payment. This is what surprises first-time families the most. If your plan was to show up with exactly the down payment, wait another 6 months and build the cushion. Buying a home "stretched thin" is the recipe for financial stress for the first 2 years.',
      },

      { type: 'heading', level: 2, text: 'After closing: what NOBODY teaches you' },
      {
        type: 'paragraph',
        text: 'Congratulations, you\'re a homeowner. Three things to do in the first 4 weeks:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Change every lock and code (old keys could still be floating around)',
          'Locate the main shut-off valves for water and gas, and the electrical panel (an emergency is not the moment to go looking)',
          'Set up autopay for your mortgage, property taxes, and homeowners insurance — most defaults come from "I forgot to pay," not "I didn\'t have the money"',
        ],
      },
    ],
    faq: [
      {
        question: 'How long does the whole process take, from "I want to buy" to closing?',
        answer:
          'Realistic timeline: 9-12 months if you\'re starting from scratch. 6 months of preparation + 1 month for pre-approval and initial searching + 1-2 months under contract. If your credit and finances are already in shape, it can go as fast as 60-90 days from offer to closing. If you\'re NOT ready, no shortcut will save you time: the whole system is bureaucratic, and any attempt to rush it usually ends in a denied loan or a lost house.',
      },
      {
        question: 'Can I buy a home without being a US citizen?',
        answer:
          'Yes. Permanent residents (green card holders) have access to every loan program. ITIN holders (no SSN) have fewer options, but "ITIN loans" exist in several states, usually with higher rates and larger down payments (15-20%). Some specialized lenders serve this community. It\'s not as smooth as with an SSN, but it\'s 100% possible and legal.',
      },
      {
        question: 'Are down payment assistance programs real or a scam?',
        answer:
          'They\'re real and HUGELY underused in the Hispanic community. Almost every state has down payment assistance programs — 0% loans that are forgiven after X years, non-repayable grants, or second mortgages with low rates. They require meeting income limits and, usually, completing a "homebuyer education" course (free, 6-8 hours online). Ask your loan officer which programs apply in your specific county. I\'ve seen families save $15,000-$30,000 through these programs.',
      },
      {
        question: 'Why do some lenders quote me a lower rate than others?',
        answer:
          'Three reasons: (1) some charge higher origination fees to make up for it, so the "low" rate is actually equal or worse once you add everything (always look at the APR, not just the rate); (2) some have relationships with different servicers and offer different products; (3) some are chasing volume and accept thinner margins. Always ask for 2-3 Loan Estimates and compare them side by side. The difference between a good and a bad loan officer can be $20,000-$50,000 over the life of the loan.',
      },
      {
        question: 'Is it worth buying now or waiting for rates to drop?',
        answer:
          'The honest answer: the "perfect" rate is the rate you can comfortably afford TODAY with your current situation. Waiting 6-12 months for rates to drop almost always costs you more in price appreciation than the rate savings make up for. If you have the down payment, the credit, stable income, and the home fits your budget at 28-32% DTI — buy it. You can always refinance later if rates drop. What you can\'t do is go back in time and buy at 2022 prices.',
      },
    ],
  },
}
