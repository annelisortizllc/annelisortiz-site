import type { BlogPost } from './types'

export const post: BlogPost = {
  publishedAt: '2026-05-19',
  readingTimeMin: 7,
  relatedSlugs: ['primera-vivienda-en-estados-unidos', 'fha-vs-convencional-2026'],
  es: {
    slug: 'preparacion-crediticia-antes-de-hipoteca',
    title:
      'Preparación crediticia antes de aplicar para una hipoteca: la guía honesta',
    description:
      'Lo que NADIE te dice sobre preparar tu crédito 6-12 meses antes de comprar tu primera casa en EE.UU. Pasos concretos para familias hispanas, no consejos genéricos.',
    category: 'Crédito',
    keywords: [
      'preparación crediticia para hipoteca',
      'cómo subir credit score para comprar casa',
      'credit score hipoteca FHA',
      'primer comprador hispano',
      'crédito hipotecario en español',
      'reporte de crédito gratuito',
    ],
    intro:
      'La mayoría de las familias que conozco llegan a hablar de hipoteca demasiado tarde. Cuando descubren que su credit score les está costando 0.5–1.5% de interés extra, ya no hay tiempo de arreglarlo. Este artículo es lo que les hubiera dicho doce meses antes — sin marketing, sin promesas exageradas, sin trucos de TikTok que no funcionan.',
    sections: [
      {
        type: 'paragraph',
        text: 'Soy Originadora de Préstamos Hipotecarios y agente de bienes raíces. He acompañado a más de 197 familias en su proceso de compra, y he visto el mismo patrón repetirse: la preparación financiera empieza 30 días antes de buscar casa, cuando debería empezar 6 a 12 meses antes. Esta guía es para que tú no caigas en ese hueco.',
      },

      { type: 'heading', level: 2, text: 'Cuánto tiempo necesitas en realidad' },
      {
        type: 'paragraph',
        text: 'La respuesta corta: empieza 12 meses antes si tu credit score está por debajo de 640, 6 meses si estás entre 640 y 720, y 3 meses si ya tienes 720+. Esto no significa que no puedas comprar antes — significa que tu tasa va a ser peor de lo que podría ser. En un préstamo de $300,000, un punto de interés extra son aproximadamente $200 más al mes y $72,000 más en intereses durante 30 años. Vale la pena esperar.',
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Regla práctica',
        text: 'Cada 20 puntos de subida en tu credit score (en los rangos relevantes) reduce tu tasa hipotecaria entre 0.125% y 0.25%. Trabajar tu crédito 6 meses puede ahorrarte más dinero que cualquier negociación de precio.',
      },

      { type: 'heading', level: 2, text: 'Paso 1 · Saca tus 3 reportes de crédito completos' },
      {
        type: 'paragraph',
        text: 'No te quedes con el score que te muestra Credit Karma o tu app del banco. Esos modelos son "VantageScore" y los prestamistas hipotecarios usan FICO — son distintos. Para hipoteca lo que importa es FICO de las 3 burós: Equifax, Experian y TransUnion. Tu hipotecario va a sacar los 3 y usar el del medio.',
      },
      {
        type: 'paragraph',
        text: 'Para revisarlos tú primero, sin afectar tu score, ve a annualcreditreport.com — es el sitio oficial autorizado por el gobierno federal de EE.UU. Te da los reportes completos de las 3 burós, gratis, una vez por semana. No es myFICO, no es Credit Sesame, no es el reporte que te ofrece tu tarjeta. Es annualcreditreport.com.',
      },
      {
        type: 'list',
        items: [
          'Errores en cuentas que no son tuyas (más común de lo que crees, especialmente en familias con nombres parecidos)',
          'Colecciones "viejas" que ya pagaste pero siguen apareciendo como deuda activa',
          'Pagos tarde reportados que en realidad pagaste a tiempo (sucede más con celulares y utilities)',
          'Cuentas cerradas reportadas como abiertas (o al revés)',
          'Direcciones o trabajos antiguos que ya no son tuyos — limpia esto, ayuda a la verificación de identidad después',
        ],
      },

      { type: 'heading', level: 2, text: 'Paso 2 · Disputa lo que esté mal (y solo lo que esté mal)' },
      {
        type: 'paragraph',
        text: 'Para cada error, disputa con la buró que lo está reportando. Las 3 burós tienen formulario de disputa en línea — Experian, Equifax y TransUnion. Tienen 30 días por ley federal (FCRA) para investigar y responder. Si el acreedor original no puede verificar la información, tienen que borrarla.',
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'No hagas esto',
        text: 'No disputes información correcta esperando que "se caiga". Si la buró confirma que es legítima, queda en tu reporte exactamente como estaba, y vuelves a perder tiempo. Lo peor: las "credit repair companies" que prometen borrar deudas reales por $99/mes. Casi todas son humo. Lo que tú puedes hacer gratis en 30 minutos, ellas cobran $1,200 al año por hacer.',
      },

      { type: 'heading', level: 2, text: 'Paso 3 · Maneja tu utilización inteligentemente' },
      {
        type: 'paragraph',
        text: 'La utilización es el porcentaje de tu límite de crédito que estás usando en tarjetas. Es el segundo factor más importante de tu score FICO (30% del peso). La regla que todos repiten es "mantén debajo del 30%", pero para hipoteca quieres más agresivo: debajo del 10% en la tarjeta que va a ser reportada el mes que aplicas.',
      },
      {
        type: 'paragraph',
        text: 'Detalle clave que la gente no sabe: tu banco le reporta a las burós el saldo del día del statement, NO el día que pagas. Aunque pagues completo todos los meses, si tu statement cierra con $2,000 de saldo en una tarjeta de $5,000 de límite, en tu reporte aparece 40% utilización. Solución: paga ANTES del statement closing date, no antes del due date.',
      },

      { type: 'heading', level: 2, text: 'Paso 4 · No cierres cuentas viejas, no abras nuevas' },
      {
        type: 'paragraph',
        text: 'El 15% de tu FICO score es "length of credit history". Cerrar una tarjeta que tienes hace 8 años acorta tu historial promedio y baja tu score. Aunque no la uses, déjala abierta. Si te cobra annual fee y no te conviene pagarlo, llama y pide que te la cambien a una versión sin fee — casi siempre el banco lo hace para no perderte como cliente.',
      },
      {
        type: 'paragraph',
        text: 'Por la otra dirección, los 6 a 12 meses antes de aplicar para hipoteca son los peores para abrir crédito nuevo. Cada nueva aplicación es una "hard inquiry" que baja tu score 2-5 puntos. Si abres una tarjeta nueva 3 meses antes de aplicar, ya empiezas con -5 puntos y la tarjeta nueva acorta el historial promedio. Espera para abrir cualquier crédito nuevo hasta DESPUÉS del cierre de tu casa.',
      },

      { type: 'heading', level: 2, text: 'Paso 5 · Documenta tus ingresos como si te fueran a auditar' },
      {
        type: 'paragraph',
        text: 'Aquí es donde muchas familias hispanas pierden el préstamo aunque su crédito esté perfecto: la documentación de ingresos. Si trabajas con W-2 y nómina directa al banco, es relativamente fácil — 2 años de taxes + 2 meses de pay stubs. Pero si eres 1099, dueña de tu negocio, recibes pagos en cash, o tienes ingresos mixtos, prepara estos 12 meses con disciplina.',
      },
      {
        type: 'list',
        items: [
          'Depositar TODO el cash en el banco dentro de las 48 horas — el underwriter no puede contar dinero que no está documentado',
          'No mezclar cuentas personales con cuentas del negocio si eres self-employed; abre una cuenta de business si no la tienes',
          'Pagar taxes (estatales y federales) reportando ingresos reales — sé que la tentación es reportar bajo para pagar menos taxes, pero te va a costar el préstamo. Los hipotecarios usan tus tax returns como prueba de ingreso',
          'Si tienes side income consistente, declararlo formalmente; underwriting puede contarlo si tiene 2 años de historial documentado',
        ],
      },

      { type: 'heading', level: 2, text: 'Paso 6 · Reserva fondos en cuentas a tu nombre' },
      {
        type: 'paragraph',
        text: 'Para cerrar una compra necesitas reservas: el down payment, los closing costs (~3-4% del precio), y "reserves" (2-6 meses de pagos de hipoteca que tienes que mostrar después del cierre). Si parte de tu down payment viene de un gift de la familia — muy común en nuestra cultura — necesitas un "gift letter" firmado por quien te lo dio, y el dinero debe llegar a tu cuenta al menos 60 días antes de aplicar (idealmente más). Esto se llama "seasoning" y el underwriter va a pedir cuentas que rastreen de dónde salió el dinero.',
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Tip de seasoning',
        text: 'Si tu familia te va a regalar parte del down payment, pídeles que te lo den 60+ días antes de empezar el proceso, no la semana del cierre. Eso convierte ese dinero en "tuyo" para fines de underwriting y simplifica todo.',
      },

      { type: 'heading', level: 2, text: 'Qué NO hacer en los 12 meses previos' },
      {
        type: 'list',
        items: [
          'NO cambies de trabajo al menos 60 días antes de aplicar (los lenders quieren ver continuidad)',
          'NO hagas grandes depósitos sin documentar de dónde vienen (cualquier depósito > 50% de tu ingreso mensual va a ser cuestionado)',
          'NO financies un carro, electrodomésticos, ni muebles — tu debt-to-income (DTI) es lo que más mira el underwriter',
          'NO co-firmes ningún préstamo para nadie, ni familia (esa deuda cuenta como tuya en tu DTI)',
          'NO uses la tarjeta de crédito para pagar el down payment ni los closing costs — el underwriter ve eso y rechaza',
        ],
      },

      { type: 'heading', level: 2, text: 'Cuándo hablar con un originador de préstamos' },
      {
        type: 'paragraph',
        text: 'No esperes a estar lista para comprar. Habla con un loan officer de confianza 6 meses antes. Una buena originadora te va a hacer un análisis honesto de tu perfil, identificar exactamente qué arreglar, y darte un timeline real — no te va a presionar para aplicar ahora si no estás lista. Si te encuentras con un originador que te empuja a aplicar inmediatamente sin revisar tu preparación, busca a otra persona.',
      },
      {
        type: 'paragraph',
        text: 'En mi caso, las consultas iniciales son sin compromiso y sin que afecten tu crédito (uso "soft pull" para análisis inicial). No tengo prisa en cerrarte un préstamo — tengo prisa en que TÚ cierres tu casa al mejor costo posible, porque cuando lo haces bien me refieres a tu familia y comunidad. Es un negocio de largo plazo, no de transacciones rápidas.',
      },
    ],
    faq: [
      {
        question: '¿Cuál es el credit score mínimo para una hipoteca?',
        answer:
          'Para FHA, técnicamente 580 con 3.5% de down payment (algunos lenders aceptan 500-579 con 10% down). Para conventional, generalmente 620 mínimo. Pero "mínimo" no es lo mismo que "óptimo": para tasas competitivas, FHA conviene en 660+ y conventional en 720+. Mientras más alto, menos pagas en intereses durante 30 años.',
      },
      {
        question: '¿Cuánto puedo subir mi credit score en 6 meses?',
        answer:
          'Realista: 30-80 puntos si haces todos los pasos descritos arriba con disciplina (utilización baja, disputas exitosas, no abrir crédito nuevo). Subir más de 100 puntos en 6 meses es posible pero raro — generalmente requiere borrar una colección grande o salir de una bancarrota. No creas a nadie que te promete +200 puntos en 90 días: o es mentira o están haciendo algo ilegal.',
      },
      {
        question: '¿Puedo usar dinero en efectivo guardado en casa para el down payment?',
        answer:
          'Sí, pero tienes que depositarlo en el banco al menos 60 días antes de aplicar — idealmente 90. Cualquier depósito grande de cash sin trazar va a generar un "letter of explanation" requerido por el underwriter, y si no puedes documentar de dónde salió, lo descuentan de tus fondos elegibles. Mi recomendación: empieza a depositar cash mensualmente DESDE YA, en cantidades consistentes con tu ingreso, no esperes a último momento.',
      },
      {
        question: '¿Una credit repair company me puede ayudar más rápido?',
        answer:
          'En 99% de los casos, no. Lo que ellas hacen tú puedes hacer gratis: solicitar tu reporte, disputar errores reales con la buró, esperar 30 días. Cobrar $79-$199/mes por enviarles cartas de disputa por ti es legal pero ineficiente. Lo que SÍ funciona es trabajar con un credit counselor certificado por NFCC (National Foundation for Credit Counseling) — son agencias sin fines de lucro y muchas atienden en español. Su servicio es gratis o muy bajo costo.',
      },
      {
        question: '¿Cuándo empiezo este proceso si quiero comprar el próximo año?',
        answer:
          'Hoy. La mejor versión de tu crédito en 12 meses depende de las decisiones que tomes esta semana. Saca tus 3 reportes en annualcreditreport.com, revisa cada uno, anota lo que tienes que arreglar, y empieza con la utilización más alta primero (esa es la palanca más rápida).',
      },
    ],
  },
  en: {
    slug: 'how-to-prepare-credit-before-mortgage-application',
    title:
      'How to Prepare Your Credit Before Applying for a Mortgage: The Honest Guide',
    description:
      'What NO ONE tells you about getting your credit ready 6-12 months before buying your first home in the U.S. Concrete steps for Hispanic families — not generic advice.',
    category: 'Credit',
    keywords: [
      'how to prepare credit for a mortgage',
      'raise credit score to buy a house',
      'minimum credit score FHA loan',
      'first-time Hispanic homebuyer',
      'mortgage credit guide',
      'free annual credit report',
    ],
    intro:
      'Most of the families I meet come to the mortgage conversation too late. By the time they realize their credit score is costing them an extra 0.5–1.5% in interest, there is no time to fix it. This article is what I wish I could have told them twelve months earlier — no marketing, no inflated promises, no TikTok hacks that do not work.',
    sections: [
      {
        type: 'paragraph',
        text: 'I am a Mortgage Loan Originator and licensed real estate agent. I have walked more than 197 families through the buying process, and I keep seeing the same pattern: financial prep starts 30 days before they go house-hunting, when it should start 6 to 12 months earlier. This guide exists so you do not fall into that gap.',
      },

      { type: 'heading', level: 2, text: 'How much lead time you actually need' },
      {
        type: 'paragraph',
        text: 'Short answer: start 12 months ahead if your credit score is under 640, 6 months if you are between 640 and 720, and 3 months if you are already at 720+. This does not mean you cannot buy sooner — it means your rate will be worse than it could have been. On a $300,000 loan, one extra point of interest is roughly $200 more per month and about $72,000 more in interest over 30 years. Waiting is worth it.',
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Rule of thumb',
        text: 'Every 20-point bump in your credit score (within the relevant ranges) typically lowers your mortgage rate by 0.125% to 0.25%. Six months of credit work can save you more money than any price negotiation on the house itself.',
      },

      { type: 'heading', level: 2, text: 'Step 1 · Pull all 3 full credit reports' },
      {
        type: 'paragraph',
        text: 'Do not rely on the score Credit Karma or your bank app shows you. Those models are "VantageScore" and mortgage lenders use FICO — they are different. For a mortgage, what matters is your FICO score from all 3 bureaus: Equifax, Experian, and TransUnion. Your loan officer will pull all three and use the middle score.',
      },
      {
        type: 'paragraph',
        text: 'To check them yourself first, without affecting your score, go to annualcreditreport.com — it is the official site authorized by the U.S. federal government. It gives you full reports from all 3 bureaus, free, once a week. It is not myFICO, not Credit Sesame, not the report your credit card offers. It is annualcreditreport.com.',
      },
      {
        type: 'list',
        items: [
          'Accounts that are not yours (more common than you think, especially in families where several relatives share similar names)',
          'Old collections you already paid that still show as active debt',
          'Late payments reported on accounts you actually paid on time (this happens most with cell phone and utility bills)',
          'Closed accounts reported as open (or the other way around)',
          'Old addresses or employers that are no longer yours — clean these up, it helps with identity verification later',
        ],
      },

      { type: 'heading', level: 2, text: 'Step 2 · Dispute what is wrong (and only what is wrong)' },
      {
        type: 'paragraph',
        text: 'For each error, file a dispute with the bureau reporting it. All 3 bureaus have online dispute forms — Experian, Equifax, and TransUnion. By federal law (the FCRA), they have 30 days to investigate and respond. If the original creditor cannot verify the information, they have to remove it.',
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Do not do this',
        text: 'Do not dispute information that is actually correct hoping it will "fall off." If the bureau confirms it is legitimate, it stays on your report exactly as it was and you have burned more time. The worst offenders are "credit repair companies" that promise to erase real debt for $99/month. Almost all of them are smoke. What you can do for free in 30 minutes, they charge you $1,200 a year to do.',
      },

      { type: 'heading', level: 2, text: 'Step 3 · Manage your utilization strategically' },
      {
        type: 'paragraph',
        text: 'Utilization is the percentage of your credit limit you are using on cards. It is the second most important factor in your FICO score (30% of the weight). The rule everyone repeats is "stay under 30%," but for a mortgage you want to be more aggressive: under 10% on the card that gets reported the month you apply.',
      },
      {
        type: 'paragraph',
        text: 'Key detail most people miss: your bank reports the balance from your statement date to the bureaus, NOT the balance on the day you pay. Even if you pay in full every month, if your statement closes with a $2,000 balance on a card with a $5,000 limit, your report shows 40% utilization. The fix: pay BEFORE the statement closing date, not just before the due date.',
      },

      { type: 'heading', level: 2, text: 'Step 4 · Do not close old accounts, do not open new ones' },
      {
        type: 'paragraph',
        text: '15% of your FICO score is "length of credit history." Closing a card you have had for 8 years shortens your average history and drops your score. Even if you do not use it, leave it open. If it charges an annual fee you do not want to pay, call and ask them to switch you to a no-fee version — banks almost always do this rather than lose you as a customer.',
      },
      {
        type: 'paragraph',
        text: 'On the other side, the 6 to 12 months before you apply for a mortgage are the worst possible time to open new credit. Each new application is a "hard inquiry" that drops your score 2-5 points. If you open a new card 3 months before applying, you start with -5 points AND the new card shortens your average history. Hold off on opening any new credit until AFTER your home closes.',
      },

      { type: 'heading', level: 2, text: 'Step 5 · Document your income like you are about to be audited' },
      {
        type: 'paragraph',
        text: 'This is where many Hispanic families lose the loan even when their credit is perfect: income documentation. If you work W-2 with direct deposit, it is relatively easy — 2 years of tax returns plus 2 months of pay stubs. But if you are 1099, a business owner, get paid in cash, or have mixed income streams, spend these 12 months building a disciplined paper trail.',
      },
      {
        type: 'list',
        items: [
          'Deposit ALL cash into your bank within 48 hours — the underwriter cannot count money that is not documented',
          'Do not mix personal and business accounts if you are self-employed; open a business account if you do not have one',
          'Pay your taxes (federal and state) reporting your real income — I know the temptation is to report low to pay less tax, but it will cost you the loan. Lenders use your tax returns as proof of income',
          'If you have consistent side income, report it formally; underwriting can count it once you have 2 years of documented history',
        ],
      },

      { type: 'heading', level: 2, text: 'Step 6 · Park your funds in accounts in your name' },
      {
        type: 'paragraph',
        text: 'To close on a home you need cash for: the down payment, closing costs (~3-4% of the price), and "reserves" (2-6 months of mortgage payments you have to show after closing). If part of your down payment comes from a family gift — very common in our culture — you need a signed "gift letter" from whoever gave it to you, and the money has to land in your account at least 60 days before you apply (ideally more). This is called "seasoning," and the underwriter will trace the funds back to their source.',
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Seasoning tip',
        text: 'If your family is going to gift part of your down payment, ask them to send it 60+ days before you start the process, not the week of closing. That makes the money count as "yours" for underwriting purposes and keeps everything clean.',
      },

      { type: 'heading', level: 2, text: 'What NOT to do in the 12 months before applying' },
      {
        type: 'list',
        items: [
          'DO NOT change jobs in the 60 days before you apply (lenders want to see continuity)',
          'DO NOT make large deposits without documenting the source (any deposit over 50% of your monthly income will get flagged)',
          'DO NOT finance a car, appliances, or furniture — your debt-to-income (DTI) is what the underwriter watches most',
          'DO NOT co-sign any loan for anyone, even family (that debt counts as yours on your DTI)',
          'DO NOT use a credit card to pay the down payment or closing costs — the underwriter sees that and denies the file',
        ],
      },

      { type: 'heading', level: 2, text: 'When to talk to a loan officer' },
      {
        type: 'paragraph',
        text: 'Do not wait until you are ready to buy. Talk to a trusted loan officer 6 months ahead. A good mortgage loan originator will give you an honest read on your profile, point out exactly what to fix, and lay out a realistic timeline — and will not pressure you to apply now if you are not ready. If you run into a loan officer pushing you to apply immediately without reviewing your prep, find someone else.',
      },
      {
        type: 'paragraph',
        text: 'In my case, initial consultations are no-commitment and do not affect your credit (I use a "soft pull" for the initial review). I am not in a rush to close a loan with you — I am in a rush for YOU to close on your home at the best possible cost, because when that goes well you refer me to your family and your community. This is a long-game business, not a transactional one.',
      },
    ],
    faq: [
      {
        question: 'What is the minimum credit score for a mortgage?',
        answer:
          'For FHA, technically 580 with 3.5% down (some lenders accept 500-579 with 10% down). For conventional, generally 620 minimum. But "minimum" is not the same as "optimal": for competitive rates, FHA really shines at 660+ and conventional at 720+. The higher your score, the less you pay in interest over 30 years — subject to qualification and overall profile.',
      },
      {
        question: 'How much can I raise my credit score in 6 months?',
        answer:
          'Realistically: 30-80 points if you do all the steps above with discipline (low utilization, successful disputes, no new credit). Gaining more than 100 points in 6 months is possible but rare — it usually requires removing a large collection or coming out of a bankruptcy. Do not trust anyone promising +200 points in 90 days: they are either lying or doing something illegal.',
      },
      {
        question: 'Can I use cash saved at home for the down payment?',
        answer:
          'Yes, but you have to deposit it into the bank at least 60 days before you apply — ideally 90. Any large untraced cash deposit will trigger a "letter of explanation" required by the underwriter, and if you cannot document where it came from, it gets subtracted from your eligible funds. My recommendation: start depositing cash monthly STARTING NOW, in amounts consistent with your income, do not wait until the last minute.',
      },
      {
        question: 'Can a credit repair company help me faster?',
        answer:
          'In 99% of cases, no. What they do you can do for free: pull your report, dispute real errors with the bureau, wait 30 days. Charging $79-$199/month to send dispute letters on your behalf is legal but inefficient. What DOES work is partnering with a credit counselor certified by the NFCC (National Foundation for Credit Counseling) — they are nonprofit agencies and many serve Spanish-speaking clients. Their service is free or very low cost.',
      },
      {
        question: 'When should I start this process if I want to buy next year?',
        answer:
          'Today. The best version of your credit 12 months from now depends on the decisions you make this week. Pull your 3 reports at annualcreditreport.com, review each one, write down what needs to be fixed, and start with the highest utilization first (that is the fastest lever you have).',
      },
    ],
  },
}
