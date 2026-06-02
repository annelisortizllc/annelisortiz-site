import type { BlogPost } from './types'

export const post: BlogPost = {
  publishedAt: '2026-05-19',
  readingTimeMin: 6,
  relatedSlugs: [
    'preparacion-crediticia-antes-de-hipoteca',
    'fha-vs-convencional-2026',
    'primera-vivienda-en-estados-unidos',
  ],
  es: {
    slug: 'down-payment-cuanto-necesitas-2026',
    title:
      'Down payment para tu primera casa: cuánto necesitas en realidad (spoiler: no es 20%)',
    description:
      'El mito del 20% de down payment cuesta años a muchas familias hispanas. Esta guía rompe los números reales: FHA 3.5%, conventional 3%, programas de asistencia y cuándo conviene cada opción.',
    category: 'Hipotecas',
    keywords: [
      'cuánto down payment para casa',
      'down payment FHA 3.5',
      'conventional 3 down payment',
      'down payment assistance hispanos',
      'primer comprador down payment',
      'cuánto ahorro casa estados unidos',
    ],
    intro:
      'Casi todas las familias que conozco creen que necesitan 20% de down payment para comprar casa en Estados Unidos. Es el mito más caro de la industria — y la principal razón por la que muchas familias hispanas posponen 5-10 años una compra que podrían hacer ya. Aquí están los números reales.',
    sections: [
      {
        type: 'paragraph',
        text: 'La regla del "20% de down" viene de los años 80, cuando ese era el estándar para evitar pagar mortgage insurance. Ese estándar SIGUE existiendo si quieres saltar el PMI desde el día uno, pero hace décadas hay muchas otras opciones competitivas. Vamos por las que te aplican.',
      },

      { type: 'heading', level: 2, text: 'Las opciones reales en 2026' },
      {
        type: 'list',
        items: [
          'FHA con 3.5% down (credit 580+) — la puerta de entrada más común para primeros compradores hispanos',
          'Convencional con 3% down (first-time buyer, credit 620+) — programas como HomeReady de Fannie Mae y Home Possible de Freddie Mac',
          'Convencional con 5% down — más flexibilidad de propiedad y mejor PMI',
          'VA con 0% down (si tú o tu cónyuge son veteranos militares) — la mejor opción si calificas',
          'USDA con 0% down (si la propiedad está en área rural elegible) — sí, hay áreas USDA elegibles incluso cerca de ciudades medianas',
          'ITIN loans (sin SSN) — generalmente 15-20% down, tasas más altas, pero existen',
        ],
      },

      { type: 'heading', level: 2, text: 'Ejemplo numérico real · casa $300,000' },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Down payment necesario por opción',
        text: 'FHA 3.5%: $10,500 · Convencional 3%: $9,000 · Convencional 5%: $15,000 · Convencional 10%: $30,000 · 20% para evitar PMI: $60,000. Diferencia entre comprar ahora (FHA 3.5%) y "esperar al 20%": $49,500 de ahorro adicional + 3-7 años más de renta.',
      },
      {
        type: 'paragraph',
        text: 'En esos 3-7 años de esperar al 20%, el precio de la casa probablemente subió 15-30%. Lo que ahora cuesta $300,000 puede costar $360,000 en 4 años. Para llegar al 20% de un precio más alto, necesitas ahorrar más rápido. Es matemática contra ti.',
      },

      { type: 'heading', level: 2, text: 'El costo "oculto" del down payment chico: PMI' },
      {
        type: 'paragraph',
        text: 'Cuando das menos del 20%, pagas Mortgage Insurance. Eso es lo que TÚ pagas para proteger AL BANCO si tú dejas de pagar. Suena unfair pero es la regla.',
      },
      {
        type: 'list',
        items: [
          'FHA MIP: ~0.55% anual del balance del préstamo + 1.75% upfront. En casa de $300k con FHA 3.5%: aprox $135/mes durante toda la vida del préstamo en la mayoría de los casos.',
          'Convencional PMI: 0.5%-1.5% anual del balance, varía por credit score. En casa de $300k con 3% down: aprox $130-$200/mes. CRÍTICO: se REMUEVE cuando llegas a 20% de equity (típicamente año 7-10). Esa es la gran ventaja sobre FHA.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Math importante',
        text: 'PMI de $150/mes durante 7 años (cuando lo eliminas en convencional) = $12,600 total. Comparado con esperar 7 años para juntar $50k extra de down payment mientras pagas $2,500/mes de renta = $210,000 perdidos en renta. La matemática casi nunca apoya esperar.',
      },

      { type: 'heading', level: 2, text: 'Down Payment Assistance · el secreto más subutilizado' },
      {
        type: 'paragraph',
        text: 'Cada estado, condado y muchas ciudades tienen programas de Down Payment Assistance (DPA). Son fondos públicos que ayudan a primeros compradores con parte del down payment. Pueden ser:',
      },
      {
        type: 'list',
        items: [
          'Grants (regalos no reembolsables) — comunes de $5,000 a $15,000',
          'Préstamos sin interés a perdonar después de X años viviendo en la casa (5-10 años típico)',
          'Segundas hipotecas con tasa baja diferida — no pagas mientras vives ahí',
          'Combinación de las anteriores',
        ],
      },
      {
        type: 'paragraph',
        text: 'Requisitos típicos: ser first-time buyer (no haber sido dueño en 3 años), estar dentro del límite de ingreso del programa (varía pero suele ser hasta 80-120% del income medio del área), tomar un curso de homebuyer education (6-8 horas online, gratis), y comprar dentro del área cubierta. Familias hispanas son una de las audiencias menos informadas sobre estos programas — los he visto reducir el cash necesario al cierre de $30k a $5k.',
      },

      { type: 'heading', level: 2, text: 'Gift funds de la familia — cómo se manejan' },
      {
        type: 'paragraph',
        text: 'Muy común en nuestra cultura: papá, tía o abuela contribuyen al down payment. La buena noticia: todos los programas hipotecarios aceptan gift funds. La mala: tienen que estar documentados de forma específica.',
      },
      {
        type: 'list',
        items: [
          'Gift letter firmada por quien te lo regala, especificando monto, fecha, relación contigo, y que NO se espera repago',
          'Evidencia de la fuente: el banco verifica el statement del donante mostrando de dónde salieron los fondos',
          'Transferencia bancaria trazable (no cash crudo)',
          'Idealmente, los fondos en TU cuenta al menos 60 días antes de aplicar (seasoning) — si vienen días antes del cierre, se trata como "gift current", lo cual también funciona pero requiere más documentación',
        ],
      },

      { type: 'heading', level: 2, text: 'Estrategia: cuándo conviene dar MÁS del mínimo' },
      {
        type: 'paragraph',
        text: 'Hay un caso donde sí vale la pena ahorrar más antes de comprar: cuando puedes saltar de FHA a convencional. Por ejemplo, si tienes 6% disponible pero tu credit score está justo en 660-680, considera:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Esperar 6 meses, subir credit score a 700+',
          'Llegar con 5% down + un poco de cushion',
          'Calificar para convencional 5% en vez de FHA 3.5%',
          'Ahorrar el upfront MIP de FHA (1.75% del loan = $5,250 en casa de $300k) Y eliminar PMI antes',
        ],
      },
      {
        type: 'paragraph',
        text: 'Pero NO esperes solo para "tener más down payment" si tu crédito y DTI ya califican. El tiempo cuesta más que el dinero en estos casos.',
      },

      { type: 'heading', level: 2, text: 'Lo que NO cuenta como "down payment" disponible' },
      {
        type: 'list',
        items: [
          '401(k) o IRA — sí, podrías retirar, pero penalty + impuestos + pérdida de retirement growth lo hacen poco recomendable. Préstamos contra 401(k) son mejores si es necesario.',
          'Plata prestada de tarjetas de crédito o líneas personales — los lenders detectan esto y rechazan el préstamo',
          'Cash sin documentar en casa — necesita 60-90 días en cuenta bancaria mínimo',
          'Equity de otra propiedad que aún no has vendido (al menos no antes de cerrar la venta)',
          'Salario futuro o bonos que esperas pero aún no recibes',
        ],
      },
    ],
    faq: [
      {
        question: '¿Cuánto debo ahorrar antes de empezar a buscar casa?',
        answer:
          'Para una casa de $300k con FHA 3.5%: down payment ($10,500) + closing costs ($9,000-12,000) + reserves post-cierre (2-6 meses de pagos = $5,000-12,000) + mudanza/muebles ($3,000-5,000) = $30,000-$40,000 disponibles. No solo el down payment.',
      },
      {
        question: '¿Si pago menos del 20%, siempre voy a pagar PMI?',
        answer:
          'No siempre. En convencional, el PMI se REMUEVE automáticamente al llegar a 78% loan-to-value (usualmente año 7-10), o antes si pides una tasación nueva mostrando 20% equity. En FHA, el MIP es de por vida en la mayoría de casos — por eso muchas familias refinancian de FHA a convencional cuando llegan a 20% equity.',
      },
      {
        question: '¿Existen programas down payment assistance para ITIN holders?',
        answer:
          'Algunos. Varía por estado. California, Texas, Florida y New York tienen programas que aceptan ITIN. Pregunta a tu originadora qué aplica en tu estado específico. He visto familias con ITIN cerrar casas con $3,000-$8,000 cash de bolsillo gracias a estos programas, en vez de $30,000+ que pensaban que necesitaban.',
      },
      {
        question: '¿Puedo usar dinero de mi país de origen como down payment?',
        answer:
          'Sí, pero con condiciones. Tiene que transferirse a una cuenta bancaria de EE.UU. al menos 60 días antes de aplicar (idealmente 90+), reportarse correctamente si supera los $10,000 (FBAR / formularios FinCEN), y poder documentarse la fuente. Muchas familias hacen transferencias graduadas durante 6-12 meses para evitar levantar flags.',
      },
      {
        question: '¿Vale la pena pedir un préstamo personal para completar el down payment?',
        answer:
          'No. Los lenders hipotecarios detectan préstamos personales nuevos (aparecen en credit report) y los suman a tu debt-to-income, lo cual usualmente te descalifica. Además los pagos del préstamo personal son mucho más altos que el ahorro del PMI que evitarías. Mejor calificar con menos down y eliminar PMI naturalmente al ganar equity.',
      },
    ],
  },
  en: {
    slug: 'how-much-down-payment-first-home-2026',
    title:
      'Down Payment for Your First Home: How Much You Actually Need (Spoiler: Not 20%)',
    description:
      'The 20% down payment myth costs Hispanic families years of waiting. This guide breaks down the real numbers: FHA 3.5%, conventional 3%, down payment assistance programs, and when each option makes sense.',
    category: 'Mortgages',
    keywords: [
      'how much down payment for a house',
      'FHA 3.5 down payment first time buyer',
      'conventional loan 3 percent down',
      'down payment assistance programs',
      'first time home buyer minimum down payment',
      'how much to save to buy a house in the US',
    ],
    intro:
      'Almost every family I work with believes they need 20% down to buy a home in the United States. It is the most expensive myth in the industry — and the main reason so many Hispanic families put off a purchase by 5 to 10 years when they could already be buying today. Here are the real numbers.',
    sections: [
      {
        type: 'paragraph',
        text: 'The "20% down" rule comes from the 1980s, when that was the standard for avoiding mortgage insurance. That standard STILL exists if you want to skip PMI from day one, but plenty of competitive alternatives have been around for decades. Let me walk you through the ones that actually apply to you.',
      },

      { type: 'heading', level: 2, text: 'Your real options in 2026' },
      {
        type: 'list',
        items: [
          'FHA with 3.5% down (credit score 580+) — the most common entry point for first-time Hispanic homebuyers',
          'Conventional with 3% down (first-time buyer, credit 620+) — programs like Fannie Mae HomeReady and Freddie Mac Home Possible',
          'Conventional with 5% down — more property flexibility and better PMI pricing',
          'VA with 0% down (if you or your spouse are military veterans) — the best option by far if you qualify',
          'USDA with 0% down (if the property is in an eligible rural area) — and yes, USDA-eligible zones often sit closer to mid-sized cities than people think',
          'ITIN loans (no SSN required) — typically 15-20% down with higher rates, but they exist',
        ],
      },

      { type: 'heading', level: 2, text: 'Real numbers · $300,000 home' },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Down payment required by option',
        text: 'FHA 3.5%: $10,500 · Conventional 3%: $9,000 · Conventional 5%: $15,000 · Conventional 10%: $30,000 · 20% to avoid PMI: $60,000. The gap between buying now (FHA 3.5%) and "waiting for 20%": $49,500 more cash to save plus 3-7 extra years of paying rent.',
      },
      {
        type: 'paragraph',
        text: 'During those 3-7 years of waiting for 20%, the home price has very likely gone up 15-30%. A house that costs $300,000 today could cost $360,000 in four years. To hit 20% on a higher price, you have to save even faster. The math is working against you.',
      },

      { type: 'heading', level: 2, text: 'The "hidden" cost of a small down payment: PMI' },
      {
        type: 'paragraph',
        text: 'When you put down less than 20%, you pay Mortgage Insurance. That is what YOU pay to protect THE BANK if you ever stop making payments. It sounds unfair, but it is the rule.',
      },
      {
        type: 'list',
        items: [
          'FHA MIP: ~0.55% of the loan balance per year plus 1.75% upfront. On a $300k home with FHA 3.5%: roughly $135/month for the life of the loan in most cases.',
          'Conventional PMI: 0.5%-1.5% of the balance per year, varies by credit score. On a $300k home with 3% down: roughly $130-$200/month. KEY DIFFERENCE: it is REMOVED once you hit 20% equity (typically year 7-10). That is the big advantage over FHA.',
        ],
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'The math that matters',
        text: 'PMI at $150/month for 7 years (until you drop it on a conventional loan) = $12,600 total. Compare that to waiting 7 years to save an extra $50k for down payment while paying $2,500/month in rent = $210,000 thrown away on rent. The math almost never supports waiting.',
      },

      { type: 'heading', level: 2, text: 'Down Payment Assistance · the most underused secret' },
      {
        type: 'paragraph',
        text: 'Every state, every county, and many cities run Down Payment Assistance (DPA) programs. These are public funds that help first-time buyers cover part of the down payment. They come in a few flavors:',
      },
      {
        type: 'list',
        items: [
          'Grants (non-repayable gifts) — commonly $5,000 to $15,000',
          'Interest-free loans that are forgiven after you live in the home for X years (5-10 years is typical)',
          'Deferred second mortgages with a low rate — you do not pay while you live there',
          'A combination of the above',
        ],
      },
      {
        type: 'paragraph',
        text: 'Typical requirements: be a first-time buyer (no ownership in the last 3 years), fall within the program income limit (usually up to 80-120% of the area median income), complete a homebuyer education course (6-8 hours online, free), and buy inside the program area. Hispanic families are one of the most underserved audiences for these programs — I have seen them drop cash-to-close from $30k down to $5k.',
      },

      { type: 'heading', level: 2, text: 'Family gift funds — how they work' },
      {
        type: 'paragraph',
        text: 'Very common in our culture: dad, tía, or abuela chip in toward the down payment. Good news: every mortgage program accepts gift funds. Bad news: they have to be documented a very specific way.',
      },
      {
        type: 'list',
        items: [
          'A gift letter signed by the person giving the funds, listing the amount, date, relationship to you, and confirming NO repayment is expected',
          'Source evidence: the lender will review the donor’s bank statement showing where the funds came from',
          'A traceable bank transfer (no cash handed over in person)',
          'Ideally, the funds sit in YOUR account at least 60 days before you apply (seasoning) — if they arrive a few days before closing, it gets treated as a "current gift," which still works but requires more paperwork',
        ],
      },

      { type: 'heading', level: 2, text: 'Strategy: when it actually makes sense to put MORE down' },
      {
        type: 'paragraph',
        text: 'There is one case where saving more before buying is worth it: when it lets you jump from FHA to conventional. For example, if you have 6% available but your credit score is right at 660-680, consider:',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Wait 6 months and push your credit score over 700',
          'Show up with 5% down plus a small cushion',
          'Qualify for conventional 5% instead of FHA 3.5%',
          'Skip the FHA upfront MIP (1.75% of the loan = $5,250 on a $300k home) AND drop PMI sooner',
        ],
      },
      {
        type: 'paragraph',
        text: 'But do NOT wait just to "have more down payment" if your credit and DTI already qualify. In those cases, time costs you more than money does.',
      },

      { type: 'heading', level: 2, text: 'What does NOT count as "available" down payment' },
      {
        type: 'list',
        items: [
          '401(k) or IRA — yes, you could withdraw, but the penalty plus taxes plus lost retirement growth make it a poor move. A 401(k) loan is a better path if you truly need to tap retirement funds.',
          'Money borrowed from credit cards or personal lines — lenders catch this and decline the loan',
          'Undocumented cash kept at home — needs to sit in a bank account 60-90 days minimum',
          'Equity from another property you have not sold yet (at least not until that sale closes)',
          'A future salary or bonus you are expecting but have not received',
        ],
      },
    ],
    faq: [
      {
        question: 'How much should I save before I start house hunting?',
        answer:
          'For a $300k home with FHA 3.5%: down payment ($10,500) + closing costs ($9,000-12,000) + post-closing reserves (2-6 months of payments = $5,000-12,000) + moving and furniture ($3,000-5,000) = $30,000-$40,000 available. Not just the down payment.',
      },
      {
        question: 'If I put less than 20% down, will I always pay PMI?',
        answer:
          'Not always. On a conventional loan, PMI is REMOVED automatically once you reach 78% loan-to-value (usually year 7-10), or sooner if you order a new appraisal showing 20% equity. On FHA, MIP stays for the life of the loan in most cases — which is why many families refinance from FHA to conventional once they hit 20% equity.',
      },
      {
        question: 'Are there down payment assistance programs for ITIN holders?',
        answer:
          'Some, and it varies by state. California, Texas, Florida, and New York all have programs that accept ITIN. Ask your loan officer what applies in your specific state. I have seen ITIN families close on a home with $3,000-$8,000 out of pocket thanks to these programs, instead of the $30,000+ they thought they needed.',
      },
      {
        question: 'Can I use money from my home country as a down payment?',
        answer:
          'Yes, with conditions. The funds have to be transferred into a U.S. bank account at least 60 days before you apply (ideally 90+), reported correctly if the amount exceeds $10,000 (FBAR / FinCEN forms), and the source has to be documentable. Many families move the money in gradual transfers over 6-12 months to avoid raising flags.',
      },
      {
        question: 'Is it worth taking a personal loan to cover the down payment?',
        answer:
          'No. Mortgage lenders see new personal loans show up on your credit report and add them to your debt-to-income ratio, which usually disqualifies you. On top of that, the personal loan payment is much higher than the PMI you would have avoided. You are better off qualifying with a smaller down payment and letting PMI come off naturally as you build equity.',
      },
    ],
  },
}
