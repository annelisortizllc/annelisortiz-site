import type { BlogPost } from './types'

export const post: BlogPost = {
  publishedAt: '2026-06-10',
  readingTimeMin: 8,
  relatedSlugs: [
    'primera-vivienda-en-estados-unidos',
    'preparacion-crediticia-antes-de-hipoteca',
  ],
  es: {
    slug: 'dscr-prestamos-inversion-inmobiliaria',
    title:
      'Préstamos DSCR: cómo califican propiedades de inversión sin tax returns',
    description:
      'Guía completa del DSCR loan para inversionistas hispanos: cómo se calcula el ratio, requisitos reales, down payment típico, tasas, y los errores que más veo en mi práctica como originadora hipotecaria.',
    category: 'Inversión',
    keywords: [
      'DSCR loan en español',
      'préstamo DSCR inversión',
      'hipoteca propiedad de inversión',
      'DSCR ratio cálculo',
      'préstamo sin tax returns',
      'cómo invertir en bienes raíces sin W-2',
      'DSCR loan requisitos',
      'down payment DSCR',
    ],
    intro:
      'Si tu plan es construir un portafolio de propiedades de inversión y tu mayor frustración con los préstamos tradicionales es la cantidad de documentación de income que te piden, el DSCR loan probablemente es el producto que estás buscando. En este artículo te explico cómo funciona realmente — no la versión simplificada de los videos de YouTube.',
    sections: [
      {
        type: 'paragraph',
        text: 'Como Originadora de Préstamos Hipotecarios y Agente de Bienes Raíces, he visto el DSCR loan crecer de producto de nicho a una de las herramientas más usadas por inversionistas que están construyendo portafolio. Para muchos de mis clientes hispanos — especialmente los que tienen income complejo, son autoempleados, o ya tienen 4+ propiedades — el DSCR resolvió el problema que les tenía detenidos: cómo seguir comprando sin documentar más W-2s o tax returns.',
      },

      { type: 'heading', level: 2, text: '¿Qué es exactamente un DSCR loan?' },
      {
        type: 'paragraph',
        text: 'DSCR son las siglas de Debt Service Coverage Ratio — la relación entre el ingreso por renta de la propiedad y el pago hipotecario completo. Es un préstamo donde el prestamista califica la PROPIEDAD, no al borrower.',
      },
      {
        type: 'paragraph',
        text: 'En un préstamo tradicional, el banco mira tus W-2s, tu DTI (debt-to-income ratio), tus tax returns. En un DSCR, el banco mira si la renta que la propiedad genera (o puede generar) cubre el pago hipotecario. Si el ratio es 1.0 o mejor, calificas. No piden W-2s ni tax returns personales.',
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Cómo se calcula',
        text: 'DSCR = Renta mensual / Pago mensual completo (PITIA — principal, interés, impuestos, seguro, HOA). Si una propiedad genera $2,500 de renta y el pago completo es $2,000, el DSCR es 1.25. Eso significa que la renta cubre el pago con 25% de margen.',
      },

      { type: 'heading', level: 2, text: '¿Cuál es el DSCR mínimo que piden?' },
      {
        type: 'paragraph',
        text: 'Depende del lender pero los rangos típicos son:',
      },
      {
        type: 'list',
        items: [
          'DSCR 1.25 o más: el deal pasa fácil, tasa estándar del producto',
          'DSCR 1.00 a 1.24: pasa con tasa o down payment ajustados',
          'DSCR 0.75 a 0.99: hay programas "No-Ratio DSCR" donde la renta no cubre completo pero compensas con más down payment (típicamente 25-30%)',
          'DSCR por debajo de 0.75: difícil de cerrar, mejor buscar otra estructura',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lo que casi nadie te explica: muchos lenders aceptan el DSCR basado en RENTA PROYECTADA del market rent (no de la renta actual). O sea, si compras una propiedad que está rentada por debajo del mercado, puedes calificar al market rent que un appraiser certifique. Esto abre muchas oportunidades en propiedades sub-rentadas.',
      },

      { type: 'heading', level: 2, text: '¿Quién califica para un DSCR loan?' },
      {
        type: 'paragraph',
        text: 'A diferencia del préstamo convencional, el DSCR no se enfoca tanto en tu income personal. Pero sí pide ciertos requisitos básicos:',
      },
      {
        type: 'list',
        items: [
          'Credit score mínimo 660-680 (algunos lenders aceptan 620 con más down payment)',
          'Down payment del 20-25% para propiedades residenciales 1-4 unidades',
          'Reservas líquidas de 3-6 meses del pago hipotecario',
          'La propiedad NO puede ser tu residencia principal (es para investment)',
          'Experiencia previa como inversionista NO es requisito en la mayoría de lenders',
          'NO hay límite de cuántas propiedades de inversión puedes tener (a diferencia del convencional que te capa a 10)',
        ],
      },

      { type: 'heading', level: 2, text: 'Down payment y closing costs reales' },
      {
        type: 'paragraph',
        text: 'El down payment estándar es 20-25%. Para propiedades 2-4 unidades suele subir a 25%. Para Airbnb o short-term rentals (cuando el lender los acepta), el down payment puede ser 30%.',
      },
      {
        type: 'paragraph',
        text: 'Los closing costs en un DSCR son típicamente más altos que un convencional — entre 3-5% del monto del préstamo. Esto incluye origination fee del lender (los DSCR suelen tener fee de 1-2 puntos), appraisal específico que incluye rent analysis, title, escrows, y costos legales del LLC si vas a comprar a través de uno.',
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Tip estratégico',
        text: 'Comprar a través de un LLC es MUY común con DSCR loans (y de hecho muchos lenders lo prefieren). Si tu plan es escalar a múltiples propiedades, estructurar cada una en su propio LLC desde el principio te da protección legal y simplificación tributaria. Habla con un CPA y un abogado de bienes raíces antes de tu primera compra.',
      },

      { type: 'heading', level: 2, text: 'Tasas: cómo se comparan con convencional' },
      {
        type: 'paragraph',
        text: 'Las tasas DSCR son típicamente entre 0.5% y 1.5% más altas que un préstamo convencional de investment property. ¿Por qué? Porque el lender asume más riesgo (no califica al borrower con W-2s) y porque muchos DSCR loans son producto Non-QM que no se venden a Fannie/Freddie.',
      },
      {
        type: 'paragraph',
        text: 'Pero esa prima de tasa tiene sentido cuando comparas con lo que ganas: 1) puedes comprar más propiedades porque no hay límite, 2) no necesitas documentar más income personal, 3) las propiedades se autofinancían si el ratio es bueno, 4) tu DTI personal no se afecta porque el préstamo califica a la propiedad. En cash-on-cash return real, los números suelen funcionar.',
      },

      { type: 'heading', level: 2, text: 'Tipos de propiedades que califican' },
      {
        type: 'list',
        items: [
          'Casas unifamiliares para renta long-term — el caso más común y el más fácil de cerrar',
          'Duplex, triplex, fourplex (2-4 unidades) — DSCR es ideal para multifamily pequeño',
          'Condos para renta — califican pero el HOA cuenta en el cálculo del DSCR',
          'Airbnb / short-term rentals — algunos lenders sí, otros no; necesitas comprobar el ingreso esperado con AirDNA o data similar',
          'Casas estabilizadas (rentadas) — el más fácil, califican con la renta actual',
          'Propiedades vacantes o por estabilizar — califican con market rent del appraiser',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lo que típicamente NO califica para DSCR: propiedades de 5+ unidades (eso es commercial, requiere otro tipo de préstamo), terrenos, casas que necesitan rehab importante (esos van por bridge loans o fix-and-flip), y propiedades de uso mixto en zonas comerciales.',
      },

      { type: 'heading', level: 2, text: 'Errores comunes en DSCR loans' },
      {
        type: 'heading',
        level: 3,
        text: 'Error #1 — Sobre-estimar la renta esperada',
      },
      {
        type: 'paragraph',
        text: 'Los inversionistas primerizos meten números optimistas en el cálculo del DSCR. "Esta casa va a rentar $2,800 porque vi una similar en Zillow." Pero el appraiser usa comparables reales del mercado. Si tu cálculo se basa en un número alto y el appraiser certifica más bajo, el DSCR no pasa. Antes de hacer oferta, valida la renta con un property manager local o data real de la zona.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Error #2 — Olvidar HOA en el cálculo',
      },
      {
        type: 'paragraph',
        text: 'El DSCR usa PITIA — incluye HOA. Una propiedad con $400 mensual de HOA puede tirar el ratio. Muchos clientes me dicen "el cash-flow se ve bueno" porque calculan principal + interés + impuestos + seguro pero olvidan HOA. Siempre incluye HOA en tus números.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Error #3 — Comprar en mercados con cap rates bajos',
      },
      {
        type: 'paragraph',
        text: 'En ciertos mercados premium (zonas de Miami, NYC, parte de California), las rentas son altas pero los precios de compra son MÁS altos. El DSCR queda por debajo de 1.0 porque la propiedad no se autofinancía. Para DSCR loans, busca mercados con cap rates de 6-8% — típicamente ciudades secundarias en FL, TX, GA, NC, OH. Ahí los números cuadran.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Error #4 — No tener reservas suficientes',
      },
      {
        type: 'paragraph',
        text: 'Los DSCR lenders piden reservas de 3-6 meses POR PROPIEDAD. Si vas a comprar 3 propiedades en un año, necesitas mantener reservas para las 3. Inversionistas que se gastan todo el cash en down payments se quedan sin la capacidad de comprar la siguiente o de manejar vacancies.',
      },

      { type: 'heading', level: 2, text: 'Estrategia de escalamiento que funciona' },
      {
        type: 'paragraph',
        text: 'Para inversionistas que están armando portafolio con DSCR, esta es la estrategia que veo funcionar mejor:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Empieza con 1-2 propiedades en mercados secundarios con cap rate alto. Construye historial operacional.',
          'Refinancia la primera propiedad después de 12-18 meses si las tasas bajan o el valor sube significativamente. Recupera capital para la siguiente.',
          'Usa BRRRR (Buy, Rehab, Rent, Refinance, Repeat) cuando el mercado lo permite — comprar bajo, rehabilitar, rentar, refinanciar a valor nuevo, repetir.',
          'Mantén reservas equivalentes a 6 meses de pago de cada propiedad — no más bajo de eso.',
          'Diversifica geográfica y por tipo de propiedad: no concentrarse en un solo mercado.',
        ],
      },

      { type: 'heading', level: 2, text: '¿Es DSCR para ti?' },
      {
        type: 'paragraph',
        text: 'DSCR loan es excelente si:',
      },
      {
        type: 'list',
        items: [
          'Eres autoempleado y tu income es complejo de documentar para préstamos tradicionales',
          'Ya tienes 4+ propiedades de inversión y estás cerca o pasaste el límite de 10 financiamientos del convencional',
          'Quieres comprar rápido y no quieres pasar por la verificación pesada de income',
          'Tienes capital para 20-25% down payment + reservas',
          'Estás comprando para renta (long-term o STR) y no como residencia principal',
        ],
      },
      {
        type: 'paragraph',
        text: 'DSCR loan probablemente NO es la mejor opción si:',
      },
      {
        type: 'list',
        items: [
          'Es tu primera propiedad y no es de inversión (mejor un préstamo convencional para residencia principal)',
          'Tienes income W-2 muy estable y alto — un convencional te dará mejor tasa',
          'No tienes 20-25% de down payment ahorrado',
          'Tu plan es comprar en mercado con cap rate por debajo de 5% (los números no van a cuadrar)',
        ],
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Mi recomendación',
        text: 'Antes de aplicar a un DSCR loan, corre tus números con calculadora real: renta esperada (validada), pago PITIA completo incluyendo HOA, vacancy del 10%, mantenimiento del 5%, property management del 8% si no la manejas tú. Si el cash-flow neto es positivo después de TODO eso, sigue adelante. Si solo cuadra "en papel" sin esos costos, busca otra propiedad.',
      },

      { type: 'heading', level: 2, text: '¿Cómo empezar?' },
      {
        type: 'paragraph',
        text: 'Si estás considerando armar un portafolio de propiedades de inversión con DSCR loans, agenda una conversación inicial. Yo trabajo en español, evalúo tu perfil y la propiedad que tienes en mira, y te ayudo a estructurar el primer deal correctamente. La diferencia entre un DSCR bien estructurado y uno mal estructurado puede ser tener cash-flow positivo desde el día 1 o estar pagando de tu bolsillo durante años.',
      },
    ],
    faq: [
      {
        question: '¿Cuál es el ratio DSCR mínimo que aceptan los lenders?',
        answer:
          'Depende del lender. Los rangos típicos: 1.25 o más pasa fácil con tasa estándar. 1.00 a 1.24 pasa con ajustes en tasa o down payment. 0.75 a 0.99 entra en programas "No-Ratio DSCR" donde compensas con 25-30% de down payment. Por debajo de 0.75 es muy difícil de cerrar y mejor buscar otra estructura de financiamiento.',
      },
      {
        question: '¿Cuál es el down payment mínimo para un DSCR loan?',
        answer:
          'Para propiedades 1-4 unidades el mínimo es típicamente 20%, aunque 25% es lo más común. Para 2-4 unidades suele ser 25%. Para Airbnb o short-term rentals (cuando el lender los acepta) el down payment sube a 30%. Si tu credit score está en el rango bajo (620-660), espera que te pidan más down payment también.',
      },
      {
        question: '¿Necesito mostrar tax returns para un DSCR loan?',
        answer:
          'No. Esa es precisamente la ventaja principal del DSCR. No pide W-2s, no pide tax returns personales, no calcula tu DTI. El préstamo califica a la propiedad — si la renta cubre el pago hipotecario completo (PITIA) según el ratio DSCR que el lender exige, calificas. Lo que sí pide es prueba de credit score, reservas líquidas, y down payment.',
      },
      {
        question: '¿Puedo comprar a través de un LLC con DSCR loan?',
        answer:
          'Sí, y de hecho muchos lenders DSCR lo prefieren. Comprar a través de un LLC te da protección legal (separación del patrimonio personal) y simplifica la estructura tributaria si vas a construir portafolio. Cada propiedad puede estar en su propio LLC. Habla con un CPA y abogado de bienes raíces antes de la primera compra para estructurar bien.',
      },
      {
        question: '¿Hay límite de cuántas propiedades puedo tener con DSCR loans?',
        answer:
          'No. A diferencia del préstamo convencional que te capa a 10 financiamientos, los DSCR loans no tienen límite. Puedes tener 5, 10, 50 propiedades — cada una con su propio DSCR loan. Esta es una de las razones principales por las que inversionistas serios usan DSCR para escalar portafolio rápido.',
      },
      {
        question: '¿Qué pasa si la propiedad se queda vacía algunos meses?',
        answer:
          'Por eso los lenders DSCR exigen reservas de 3-6 meses por propiedad. Esas reservas existen exactamente para cubrir vacancies, mantenimiento mayor, o cualquier problema. Si te quedas sin reservas y la propiedad se vacía, vas a tener que cubrir el pago de tu bolsillo. Por eso siempre incluye 8-10% de vacancy en tu cálculo de cash-flow proyectado — no asumas 100% ocupación todo el año.',
      },
    ],
  },
}
