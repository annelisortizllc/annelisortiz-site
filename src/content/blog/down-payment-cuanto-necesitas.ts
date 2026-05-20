import type { BlogPost } from './types'

export const post: BlogPost = {
  slug: 'down-payment-cuanto-necesitas-2026',
  title:
    'Down payment para tu primera casa: cuánto necesitas en realidad (spoiler: no es 20%)',
  description:
    'El mito del 20% de down payment cuesta años a muchas familias hispanas. Esta guía rompe los números reales: FHA 3.5%, conventional 3%, programas de asistencia y cuándo conviene cada opción.',
  publishedAt: '2026-05-19',
  readingTimeMin: 6,
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
  relatedSlugs: ['preparacion-crediticia-antes-de-hipoteca', 'fha-vs-convencional-2026', 'primera-vivienda-en-estados-unidos'],
}
