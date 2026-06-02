import type { BlogPost } from './types'

export const post: BlogPost = {
  publishedAt: '2026-05-19',
  readingTimeMin: 5,
  relatedSlugs: [
    'preparacion-crediticia-antes-de-hipoteca',
    'down-payment-cuanto-necesitas-2026',
    'fha-vs-convencional-2026',
  ],
  es: {
    slug: 'subir-credit-score-90-dias',
    title:
      'Cómo subir tu credit score 60 puntos en 90 días (sin trucos ilegales)',
    description:
      'El plan honesto para subir tu credit score lo suficiente para mejorar tu tasa hipotecaria en 90 días. Pasos concretos, no promesas mágicas, basado en cómo realmente funciona FICO.',
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
  },
  en: {
    slug: 'raise-credit-score-90-days-mortgage',
    title:
      'How to Raise Your Credit Score 60 Points in 90 Days (No Shady Shortcuts)',
    description:
      'The honest 90-day plan to raise your credit score enough to improve your mortgage rate. Concrete steps, no magic promises — based on how FICO actually works.',
    category: 'Credit',
    keywords: [
      'how to raise credit score 90 days',
      'raise credit score for mortgage',
      'increase credit score fast',
      'credit score tips first time homebuyer',
      'FICO score mortgage qualification',
      'lower credit card utilization',
    ],
    intro:
      '60 points in 90 days is NOT marketing — it is the number I regularly see in clients who follow a disciplined strategy. But I also see people promising "100 points in 30 days" using techniques that are illegal or that damage your credit report permanently. This is the honest, sustainable version.',
    sections: [
      {
        type: 'paragraph',
        text: 'Before we start: if your credit score is below 580, this plan works but you may need 4-6 months instead of 90 days. If you are between 620 and 720, 60-80 points in 90 days is realistic. If you are above 720, the ranges are tighter and gaining 30-40 points in 90 days is already very strong.',
      },

      { type: 'heading', level: 2, text: 'Day 1 · Diagnosis (do not skip this step)' },
      {
        type: 'paragraph',
        text: 'Pull your 3 full credit reports at annualcreditreport.com (the official federal site, free, no credit card required). Do NOT use Credit Karma — its algorithm is VantageScore, not FICO, and mortgage lenders use FICO. The gap can easily be 30-60 points.',
      },
      {
        type: 'paragraph',
        text: 'In the reports, look specifically for:',
      },
      {
        type: 'list',
        items: [
          'Any incorrect data (debts that are not yours, late payments you actually paid on time, closed accounts showing as open)',
          'Your current utilization on each card (balance / limit)',
          'How many hard inquiries you have in the last 12 months',
          'Any collections or derogatory items (charge-offs, bankruptcy, etc.)',
          'Your TOTAL utilization (sum of all balances / sum of all limits)',
        ],
      },

      { type: 'heading', level: 2, text: 'Day 2-7 · Drop your utilization aggressively' },
      {
        type: 'paragraph',
        text: 'This is the fastest and most powerful lever you have. Utilization accounts for 30% of your FICO score. If you drop from 50% to 10% utilization, you can gain 40-60 points in a single statement cycle.',
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Critical tip most people miss',
        text: 'Your bank reports to the credit bureaus the balance from the STATEMENT DATE, NOT the day you pay. If you pay in full on the 28th but your statement closes on the 15th, your report shows the utilization from the 15th. Fix: pay BEFORE the statement closing date (find this date in your bank app).',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'For each card, find the statement closing date (NOT the due date)',
          'About a week before that date, pay the balance down to below 10% of the limit',
          'If you do not have the cash to get under 10%, prioritize: pay down the card with the highest utilization first (not the one with the biggest limit)',
          'After the closing date, the report usually hits the bureaus 7-10 days later',
          'Within 30 days you should see the bump in your score',
        ],
      },

      { type: 'heading', level: 2, text: 'Day 7-30 · Dispute any real errors' },
      {
        type: 'paragraph',
        text: 'At each bureau (Equifax, Experian, TransUnion) file an online dispute for the errors you found on Day 1. Keep in mind:',
      },
      {
        type: 'list',
        items: [
          'Only dispute INCORRECT information. Do not dispute accurate information hoping "it will fall off" — you waste time if the bureau verifies it',
          'Provide evidence if you have it (statements, payment confirmations)',
          'Bureaus have 30 days under federal law (FCRA) to investigate and respond',
          'If the bureau fails to verify the disputed information, they have to remove it — even if it was originally accurate',
          'Dispute at all 3 bureaus at the same time, because sometimes only 1 or 2 carry the error',
        ],
      },

      { type: 'heading', level: 2, text: 'Day 1-90 · Do not open new credit · do not close old credit' },
      {
        type: 'paragraph',
        text: 'Every new credit application is a hard inquiry: -2 to -5 points. Several within a few weeks stack up against you. During these 90 days: do NOT open any credit cards, car loans, store credit, registered "buy now pay later" accounts, and do not co-sign for anyone.',
      },
      {
        type: 'paragraph',
        text: 'On the flip side: do not close old accounts. 15% of your FICO score is length of credit history. Closing a 10-year-old card drops your average history significantly. Even if you do not use it, leave it open. If it has an annual fee, call and ask to product-change it to a no-fee version (banks almost always agree because they do not want to lose you).',
      },

      { type: 'heading', level: 2, text: 'Day 30-60 · Optimize your credit mix' },
      {
        type: 'paragraph',
        text: 'Credit mix makes up 10% of your FICO score. If you only have credit cards, adding ONE different type can help. A low-risk option is a "credit builder loan" — a small loan ($500-$1,000) the bank puts into a savings account, you pay monthly for 12 months, and at the end they release the money to you. Low interest cost and it reports as an installment loan.',
      },
      {
        type: 'paragraph',
        text: 'Heads up though: do NOT open this within the 60 days before applying for a mortgage (the hard inquiry and the new balance count against you with the lender). It only helps if you have buffer time.',
      },

      { type: 'heading', level: 2, text: 'Day 60-90 · Fine-tune + second round of paydowns' },
      {
        type: 'paragraph',
        text: 'By now you should already see your score climb 30-50 points just from the utilization drop. To squeeze out the last 10-20 points:',
      },
      {
        type: 'list',
        items: [
          'Confirm your payments are consistently posting before each statement closing date',
          'If you have a paid collection still reporting as "Paid Collection", try a "pay for delete" — some collectors will remove the record if you pay the debt',
          'If you are an authorized user (not the primary) on any cards, evaluate whether they help or hurt you. Sometimes removing yourself from a card with bad utilization on the primary actually raises your score',
          'Ask for a credit limit increase on your main card — if they approve it without a hard pull, your utilization ratio drops without you doing anything',
        ],
      },

      { type: 'heading', level: 2, text: 'What you must NEVER do' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Schemes that damage your report permanently',
        text: 'Do not use "credit privacy numbers" (CPNs) — they are illegal and constitute federal fraud. Do not pay anyone to "add purchased tradelines" — FICO catches it and banks can close your accounts. Do not close all your cards thinking it helps — it does the opposite. And "credit repair companies" charging $99/month rarely do anything you cannot do for free yourself.',
      },

      { type: 'heading', level: 2, text: 'Reality check · what to expect' },
      {
        type: 'paragraph',
        text: 'If your current score is:',
      },
      {
        type: 'list',
        items: [
          'Below 580: 60-100 points in 90 days is possible if you have big errors to dispute + you slash utilization aggressively',
          '580-620: 40-70 points typical',
          '620-680: 30-60 points typical (this is the range where you gain the most ground for a mortgage)',
          '680-740: 20-40 points typical',
          '740+: you are already in optimal territory; each point gets harder but also less necessary',
        ],
      },
      {
        type: 'paragraph',
        text: 'In 99% of cases you do not need to hit 800 — you need to cross the threshold of the next mortgage rate tier. Generally 660, 680, 700, 720, and 740 are the key thresholds. Going from 698 to 700 can be worth 0.125% lower on your rate, which over 30 years is thousands of dollars.',
      },
    ],
    faq: [
      {
        question: 'When will I see the changes in my score?',
        answer:
          'Banks typically report to the bureaus every 30 days, usually right after each card\'s statement closing date. Utilization changes show up in 30-45 days. Successful disputes can update in 30-60 days. The "full picture" score after all your changes usually settles in 60-90 days.',
      },
      {
        question: 'Is it worth paying for premium services like myFICO?',
        answer:
          'If you just want your score, no — annualcreditreport.com gives you the reports for free, and many banks give you your FICO score for free each month (Discover, Chase, Bank of America, Capital One). myFICO ($30/month) is useful if you want detailed tracking across all 3 bureaus with real FICO scores — handy during a 90-day sprint if you are about to buy a home. Cancel afterward.',
      },
      {
        question: 'Does paying off old collections raise my score?',
        answer:
          'Yes, but less than most people think. Modern FICO (FICO 9 and 10) and VantageScore 4.0 ignore PAID collections — but the older models many mortgage lenders still use (FICO 2, 4, 5) do NOT ignore them. So paying off a collection can help with future applications but sometimes does not move the "mortgage" score much. The "pay for delete" strategy is more effective: you offer to pay in exchange for the collector removing the record entirely.',
      },
      {
        question: 'Should my partner and I apply together or just one of us?',
        answer:
          'It depends. If one of you has a much better score than the other, consider applying with the stronger-credit spouse only (easier to qualify, better rate subject to qualification) — but the other person\'s income will NOT count. If both of you have significant income and the lower score is only "reasonable" (660+), applying together can result in a larger approved amount. Run both scenarios with a loan officer before deciding.',
      },
      {
        question: 'Is there a "super fast" way to raise it before a closing that is around the corner?',
        answer:
          'Yes, a technique few people use: "rapid rescore". If you are buying in 30-60 days and your score is just under an important threshold (e.g. 698 when 700 would lower your rate), your lender can request a rapid rescore from the bureaus after you pay down a balance or dispute something. The bureaus update the report in 3-7 days instead of 30-45. Cost: $50-$150 per bureau, paid by either the lender or you. Only worth it in specific cases with critical timing.',
      },
    ],
  },
}
