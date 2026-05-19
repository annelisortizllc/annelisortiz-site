import type { BlogPost } from './types'

export const post: BlogPost = {
  slug: 'preparacion-crediticia-antes-de-hipoteca',
  title:
    'Preparación crediticia antes de aplicar para una hipoteca: la guía honesta',
  description:
    'Lo que NADIE te dice sobre preparar tu crédito 6-12 meses antes de comprar tu primera casa en EE.UU. Pasos concretos para familias hispanas, no consejos genéricos.',
  publishedAt: '2026-05-19',
  readingTimeMin: 7,
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
  relatedSlugs: ['primera-vivienda-en-estados-unidos', 'fha-vs-convencional-2026'],
}
