import type { BlogPost } from './types'

export const post: BlogPost = {
  slug: 'subir-credit-score-90-dias',
  title:
    'Cómo subir tu credit score 60 puntos en 90 días (sin trucos ilegales)',
  description:
    'El plan honesto para subir tu credit score lo suficiente para mejorar tu tasa hipotecaria en 90 días. Pasos concretos, no promesas mágicas, basado en cómo realmente funciona FICO.',
  publishedAt: '2026-05-19',
  readingTimeMin: 5,
  category: 'Crédito',
  keywords: [
    'cómo subir credit score 90 días',
    'subir score para hipoteca',
    'subir credit score rápido',
    'mejorar credit score hispanos',
    'FICO score hipoteca',
    'reducir utilización tarjetas',
  ],
  intro:
    '60 puntos en 90 días NO es marketing — es la cifra que veo regularmente en clientes que aplican una estrategia disciplinada. Pero también veo personas que prometen "subir 100 puntos en 30 días" usando técnicas que son ilegales o que dañan tu reporte permanentemente. Esta es la versión honesta y sostenible.',
  sections: [
    {
      type: 'paragraph',
      text: 'Antes de empezar: si tu credit score está bajo 580, este plan funciona pero quizá necesites 4-6 meses en vez de 90 días. Si está entre 620 y 720, 60-80 puntos en 90 días es realista. Si está sobre 720, los rangos son más chicos y subir 30-40 puntos en 90 días ya es muy bueno.',
    },

    { type: 'heading', level: 2, text: 'Día 1 · Diagnóstico (no saltes este paso)' },
    {
      type: 'paragraph',
      text: 'Saca tus 3 reportes de crédito completos en annualcreditreport.com (sitio oficial federal, gratis, sin tarjeta). NO uses Credit Karma — su algoritmo es VantageScore, no FICO, y los prestamistas hipotecarios usan FICO. La diferencia puede ser 30-60 puntos.',
    },
    {
      type: 'paragraph',
      text: 'En los reportes busca específicamente:',
    },
    {
      type: 'list',
      items: [
        'Cualquier dato incorrecto (deudas que no son tuyas, pagos tarde que pagaste a tiempo, cuentas cerradas que aparecen abiertas)',
        'Cuál es tu utilización actual en cada tarjeta (saldo / límite)',
        'Cuántas hard inquiries tienes en los últimos 12 meses',
        'Cualquier colección o derogatory item (charge-offs, bancarrota, etc.)',
        'Tu utilización TOTAL (suma de todos los saldos / suma de todos los límites)',
      ],
    },

    { type: 'heading', level: 2, text: 'Día 2-7 · Reduce utilización agresivamente' },
    {
      type: 'paragraph',
      text: 'Esto es el lever más rápido y más fuerte. La utilización es el 30% del peso de tu FICO score. Si bajas de 50% a 10% utilización, puedes ganar 40-60 puntos en un solo ciclo de statement.',
    },
    {
      type: 'callout',
      tone: 'highlight',
      title: 'Tip crítico que la mayoría no sabe',
      text: 'Tu banco le reporta a la buró el saldo del DÍA DEL STATEMENT, NO el día que pagas. Si pagas en full el día 28 pero tu statement cierra el día 15, en tu reporte aparece la utilización del 15. Solución: paga ANTES del statement closing date (busca esta fecha en tu app).',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'Identifica en cada tarjeta cuál es el statement closing date (NO el due date)',
        'Una semana antes de esa fecha, paga el balance hasta llevarlo bajo 10% del límite',
        'Si no tienes cash para pagar bajo 10%, prioriza: paga primero la tarjeta con utilización más alta (no la de límite más grande)',
        'Después del closing date, normalmente recibes report a la buró 7-10 días después',
        'En 30 días deberías ver el bump en tu score',
      ],
    },

    { type: 'heading', level: 2, text: 'Día 7-30 · Disputa cualquier error real' },
    {
      type: 'paragraph',
      text: 'En cada buró (Equifax, Experian, TransUnion) inicia disputa online de los errores que encontraste el Día 1. Ten en mente:',
    },
    {
      type: 'list',
      items: [
        'Solo disputa información INCORRECTA. No disputes información correcta esperando "que se caiga" — pierdes tiempo si la buró la verifica',
        'Aporta evidencia si la tienes (statements, comprobantes de pago)',
        'Las burós tienen 30 días por ley federal (FCRA) para investigar y responder',
        'Si la buró falla en verificar la info disputada, tienen que removerla — incluso si era cierta originalmente',
        'Disputa en las 3 burós simultáneamente porque a veces solo 1 o 2 tienen el error',
      ],
    },

    { type: 'heading', level: 2, text: 'Día 1-90 · No abras crédito nuevo · no cierres viejo' },
    {
      type: 'paragraph',
      text: 'Cada nueva aplicación de crédito es una hard inquiry: -2 a -5 puntos. Múltiples en pocas semanas se acumulan negativamente. Durante estos 90 días: NO abras ninguna tarjeta, financiamiento de carro, store credit, "buy now pay later" registrado, ni co-firmes para nadie.',
    },
    {
      type: 'paragraph',
      text: 'En la otra dirección: no cierres cuentas viejas. El 15% de FICO es length of credit history. Cerrar una tarjeta de 10 años de antigüedad reduce tu historial promedio significativamente. Aunque no la uses, déjala abierta. Si tiene annual fee, llama y pide cambiarla a la versión sin fee (los bancos casi siempre lo hacen para no perderte).',
    },

    { type: 'heading', level: 2, text: 'Día 30-60 · Optimiza el mix de crédito' },
    {
      type: 'paragraph',
      text: 'El "credit mix" es el 10% del FICO. Si solo tienes tarjetas de crédito, agregar UN tipo distinto puede ayudar. Una opción de bajo riesgo es un "credit builder loan" — un préstamo pequeño ($500-$1,000) que el banco pone en un savings account, tú pagas mensual durante 12 meses, y al final te devuelven el dinero. Cuesta poco en intereses y reporta como installment loan.',
    },
    {
      type: 'paragraph',
      text: 'Pero ojo: NO abras esto en los 60 días antes de aplicar para hipoteca (la hard inquiry y el saldo nuevo cuentan negativo para el lender). Solo es útil si tienes el tiempo de buffer.',
    },

    { type: 'heading', level: 2, text: 'Día 60-90 · Ajuste fino + segunda ronda de pagos' },
    {
      type: 'paragraph',
      text: 'Para esta altura ya deberías ver subir tu score 30-50 puntos solo con la reducción de utilización. Para sacar los últimos 10-20 puntos:',
    },
    {
      type: 'list',
      items: [
        'Verifica que tus pagos estén llegando antes del statement closing date consistentemente',
        'Si tienes alguna deuda en colecciones pagada pero aún reportada como "Paid Collection", intenta el "pay for delete" — algunos collectors aceptan remover el record si pagas la deuda',
        'Si tienes tarjetas autorizadas como user (no titular), evalúa si te ayudan o perjudican. A veces remover tu autorización de una tarjeta con mala utilización del titular sube tu score',
        'Considera un "credit limit increase" en tu tarjeta principal — si te lo aprueban sin hard pull, baja tu utilización porcentual sin que tú hagas nada',
      ],
    },

    { type: 'heading', level: 2, text: 'Lo que NUNCA debes hacer' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Esquemas que dañan tu reporte permanentemente',
      text: 'No uses "credit privacy numbers" (CPN) — son ilegales y fraude federal. No pagues a alguien por "agregar tradelines" comprados — la FICO los detecta y los bancos pueden cerrar tus cuentas. No cierres todas tus tarjetas pensando que ayuda — hace lo opuesto. Y "credit repair companies" que cobran $99/mes raramente hacen algo que tú no puedas hacer gratis.',
    },

    { type: 'heading', level: 2, text: 'Realismo · qué esperar' },
    {
      type: 'paragraph',
      text: 'Si tu score actual es:',
    },
    {
      type: 'list',
      items: [
        'Bajo 580: 60-100 puntos en 90 días posible si tienes errores grandes a disputar + reduces utilización agresivamente',
        '580-620: 40-70 puntos típico',
        '620-680: 30-60 puntos típico (este es el rango donde más se ganan posiciones para hipoteca)',
        '680-740: 20-40 puntos típico',
        '740+: ya estás en territorio óptimo; cada punto es más difícil pero también menos necesario',
      ],
    },
    {
      type: 'paragraph',
      text: 'En 99% de los casos no necesitas llegar a 800 — necesitas llegar al umbral del próximo tier de tasas hipotecarias. Generalmente 660, 680, 700, 720, y 740 son los umbrales clave. Pasar de 698 a 700 puede valer 0.125% de tasa lower, que en 30 años son miles de dólares.',
    },
  ],
  faq: [
    {
      question: '¿Cuándo veré los cambios en mi score?',
      answer:
        'Los bancos típicamente reportan a las burós cada 30 días, generalmente justo después del statement closing date de cada tarjeta. Cambios en utilización aparecen en 30-45 días. Disputas exitosas pueden actualizarse en 30-60 días. El "score completo" después de hacer todos los cambios suele estabilizarse en 60-90 días.',
    },
    {
      question: '¿Vale la pena pagar por servicios premium como myFICO?',
      answer:
        'Si solo quieres tu score, no — annualcreditreport.com te da los reportes gratis y muchos bancos te dan tu FICO score gratis cada mes (Discover, Chase, Bank of America, Capital One). myFICO ($30/mes) es útil si quieres tracking detallado de las 3 burós con FICO scores reales — útil durante un sprint de 90 días si vas a comprar casa. Cancela después.',
    },
    {
      question: '¿Pagar deudas viejas en colección sube mi score?',
      answer:
        'Sí, pero menos de lo que mucha gente cree. Modernos FICO (FICO 9 y 10) y VantageScore 4.0 ignoran colecciones PAGADAS — pero los modelos viejos que muchos lenders aún usan (FICO 2, 4, 5 para hipoteca) NO ignoran. Así que pagar una colección puede ayudar con futuras aplicaciones pero a veces no mueve el score "hipotecario" mucho. La estrategia "pay for delete" es más efectiva: ofreces pagar a cambio de que el collector remueva el record por completo.',
    },
    {
      question: '¿Mi pareja y yo deberíamos aplicar juntos o uno solo?',
      answer:
        'Depende. Si uno tiene mucho mejor score que el otro, considera aplicar solo con el de mejor crédito (más fácil de calificar, mejor tasa) pero el ingreso del otro NO se cuenta. Si ambos tienen ingresos significativos y el de menor score es solo "razonable" (660+), aplicar juntos puede dar mejor monto aprobado. Calcula los dos escenarios con un loan officer antes de decidir.',
    },
    {
      question: '¿Hay alguna manera "súper rápida" para subir antes de un cierre que se aproxima?',
      answer:
        'Sí, una técnica que pocos usan: "rapid rescore". Si vas a comprar en 30-60 días y tu score está justo abajo de un umbral importante (ej. 698 cuando 700 te baja la tasa), tu lender puede pedir un rapid rescore a las burós después de que pagues balance o disputes algo. Las burós actualizan el reporte en 3-7 días en vez de 30-45. Costo: $50-$150 por buró, lo paga el lender o tú. Útil solo en casos puntuales con timing crítico.',
    },
  ],
  relatedSlugs: ['preparacion-crediticia-antes-de-hipoteca', 'down-payment-cuanto-necesitas-2026', 'fha-vs-convencional-2026'],
}
