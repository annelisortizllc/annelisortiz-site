import type { BlogPost } from './types'

export const post: BlogPost = {
  slug: 'fha-vs-convencional-2026',
  title:
    'FHA vs Convencional en 2026: qué préstamo te conviene (familias hispanas)',
  description:
    'Comparación honesta de FHA vs convencional para primer comprador hispano en 2026. Números reales, no marketing — descubre cuál te ahorra más a largo plazo.',
  publishedAt: '2026-05-19',
  readingTimeMin: 8,
  category: 'Hipotecas',
  keywords: [
    'FHA vs convencional',
    'qué préstamo hipotecario me conviene',
    'préstamo hipotecario hispanos',
    'down payment FHA',
    'mortgage insurance FHA',
    'PMI conventional',
  ],
  intro:
    'La pregunta más común que recibo de primeros compradores es: ¿FHA o convencional? La respuesta corta es "depende de tu perfil" — pero ese "depende" tiene 4 variables específicas que decidan todo. Este artículo te ayuda a saber cuál te conviene SIN tener que llamarme a mí primero.',
  sections: [
    {
      type: 'paragraph',
      text: 'Trabajo en NEXA Lending y ofrezco ambos productos, así que no tengo incentivo para empujarte uno u otro. Te lo digo así de directo: hay perfiles donde FHA gana de calle, hay perfiles donde convencional gana, y hay perfiles donde es 50/50 y la decisión depende de tu plan a 5 años. Vamos por orden.',
    },

    { type: 'heading', level: 2, text: 'Qué es cada uno (sin los tecnicismos)' },
    {
      type: 'paragraph',
      text: 'FHA loan: préstamo asegurado por el gobierno federal (Federal Housing Administration). El banco te presta, pero el gobierno garantiza el préstamo si tú dejas de pagar. Por eso los bancos aceptan condiciones más flexibles — credit score más bajo, down payment más chico. A cambio, tú pagas un seguro especial (mortgage insurance premium o MIP) durante toda la vida del préstamo en la mayoría de los casos.',
    },
    {
      type: 'paragraph',
      text: 'Convencional: préstamo no garantizado por el gobierno, comprado por Fannie Mae o Freddie Mac (entidades semi-gubernamentales). El banco asume más riesgo, así que las condiciones son más estrictas — credit score más alto, debt-to-income más bajo. Pero también más flexible en otras cosas: el mortgage insurance (llamado PMI aquí) se puede quitar cuando tu equity llega al 20%, mientras que el MIP de FHA es de por vida.',
    },

    { type: 'heading', level: 2, text: 'Comparación lado a lado (números 2026)' },
    {
      type: 'list',
      items: [
        'Down payment mínimo · FHA: 3.5% (credit 580+) o 10% (credit 500-579) · Convencional: 3% para first-time buyers, típicamente 5%',
        'Credit score mínimo · FHA: 580 (algunos lenders 500) · Convencional: 620 (mejor a 680+)',
        'Debt-to-income máximo · FHA: hasta 56.99% en algunos casos · Convencional: típicamente 45-50%',
        'Mortgage insurance · FHA: 0.55-0.75% anual + 1.75% upfront, generalmente de por vida · Convencional: 0.5-1.5% anual, removible al 20% equity, sin upfront',
        'Loan limit 2026 (área típica) · FHA: $524,225 (varía por condado) · Convencional: $806,500 (límite conforming)',
        'Funding fee upfront · FHA: 1.75% del loan (financiable) · Convencional: $0',
        'Property requirements · FHA: la casa debe pasar appraisal con estándares estrictos · Convencional: appraisal más simple',
      ],
    },

    { type: 'heading', level: 2, text: 'Ejemplo numérico real' },
    {
      type: 'paragraph',
      text: 'Casa de $300,000. Comparemos ambas opciones con buenos perfiles:',
    },
    {
      type: 'callout',
      tone: 'highlight',
      title: 'Escenario A · FHA con credit 660 y 3.5% down',
      text: 'Down payment: $10,500. Loan: $289,500 + $5,066 MIP upfront = $294,566 total financiado. Pago P&I estimado a 6.75%: ~$1,911. MIP mensual: $135. Pago total con escrow: ~$2,400-$2,600. Total intereses a 30 años: ~$398,000.',
    },
    {
      type: 'callout',
      tone: 'highlight',
      title: 'Escenario B · Convencional con credit 740 y 5% down',
      text: 'Down payment: $15,000. Loan: $285,000 (sin upfront). Pago P&I estimado a 6.25%: ~$1,755. PMI mensual: $95. Pago total con escrow: ~$2,200-$2,400. Total intereses a 30 años: ~$346,000. Cuando llegas a 20% equity (típicamente año 7-8), eliminas PMI y bajas $95/mes.',
    },
    {
      type: 'paragraph',
      text: 'Diferencia en 30 años: el escenario convencional sale $50,000+ más barato. Pero ojo: el convencional requiere credit 740 y $4,500 más de cash al inicio. Si tu perfil real es 660 de score, FHA no es "peor" — es "el único que tienes disponible".',
    },

    { type: 'heading', level: 2, text: 'Cuándo FHA gana (sin discusión)' },
    {
      type: 'list',
      items: [
        'Tu credit score está entre 580 y 660. Convencional ni te va a aprobar competitivamente.',
        'Tu debt-to-income es alto (>45%). FHA acepta hasta 56.99% con compensating factors.',
        'Tu down payment está limitado a 3.5-5% y no tienes flexibilidad para subir.',
        'Tu historial laboral es no-tradicional (gap, recientemente self-employed sin 2 años).',
        'Vas a hacer co-signer con un familiar — FHA acepta non-occupying co-borrowers más fácilmente.',
      ],
    },

    { type: 'heading', level: 2, text: 'Cuándo convencional gana' },
    {
      type: 'list',
      items: [
        'Credit score 740+. La diferencia de tasa y el PMI removible hacen que pagues menos a largo plazo.',
        'Down payment 10%+. PMI más bajo y removible compensa rápido el ahorro upfront.',
        'Plan de vivir en la casa menos de 7 años. PMI removible al refinanciar o vender, vs MIP forever en FHA.',
        'Vas a comprar una propiedad de inversión o segunda casa. FHA solo financia tu vivienda principal.',
        'El precio de la casa supera el FHA loan limit de tu condado.',
      ],
    },

    { type: 'heading', level: 2, text: 'Cuándo es 50/50 (la decisión depende de tu plan)' },
    {
      type: 'paragraph',
      text: 'Si tu credit score está entre 680 y 720, y tu down payment está entre 5 y 10%, ambos te aprueban con condiciones razonables. Aquí lo que decide es:',
    },
    {
      type: 'list',
      items: [
        '¿Cuántos años piensas vivir en esta casa? Menos de 5 años → convencional gana (PMI removible no importa tanto). Más de 10 años → convencional sigue ganando porque PMI removible se acumula. Solo en 5-7 años hay empate real.',
        '¿Tienes margen para esperar otros 6 meses y subir tu score a 740? Si sí, espera y pasas a convencional. Si no, FHA ahora es mejor que conventional con peor tasa.',
        '¿La casa que quieres pasa appraisal FHA? FHA tiene estándares estrictos en cosas como pintura descascarada, drenaje, riscos. Si la casa es older y no está perfectamente mantenida, conventional puede ser tu única opción de facto.',
      ],
    },

    { type: 'heading', level: 2, text: 'El truco que la mayoría no usa: FHA → refinanciar a convencional' },
    {
      type: 'paragraph',
      text: 'Esto es lo que muchas familias inteligentes hacen: empiezan con FHA porque su credit score o down payment no califica para convencional ahora, y refinancian a convencional 2-4 años después cuando han subido el score, acumulado más equity, y/o las tasas bajan.',
    },
    {
      type: 'paragraph',
      text: 'Costo de refinanciar: $4,000-$8,000 en closing costs. Si te ahorra $200/mes y eliminas el MIP, te recuperas la inversión en 24-36 meses y el resto son ahorros puros. Esto funciona especialmente bien si compras en un mercado en apreciación — el equity crece más rápido y llegas al 20% antes para eliminar PMI.',
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Caveat importante',
      text: 'No compres FHA "asumiendo que vas a refinanciar pronto". Las tasas pueden subir, tu situación puede cambiar, y a veces el refi nunca pasa. Compra FHA porque te conviene HOY con tu perfil actual — el refi futuro es bonus, no plan.',
    },

    { type: 'heading', level: 2, text: 'Errores comunes en esta decisión' },
    {
      type: 'list',
      items: [
        'Elegir FHA "porque el down es más bajo" sin calcular el costo de 30 años. A veces el ahorro upfront cuesta $50,000+ a largo plazo.',
        'Elegir convencional "porque suena más prestigioso" sin tener el perfil para conseguir buenas condiciones. Un convencional con credit 650 y PMI alto es peor que FHA bien estructurado.',
        'No comparar Loan Estimates de 3+ lenders. Para el mismo producto y mismo perfil, dos lenders pueden cotizarte 0.5% diferente.',
        'No considerar VA loan si calificas. Si tú o tu esposo son veteranos, VA loans son casi siempre mejor que FHA o convencional (0% down, no PMI, tasas mejores).',
      ],
    },

    { type: 'heading', level: 2, text: 'Mi sugerencia honesta para familias hispanas primerizas' },
    {
      type: 'paragraph',
      text: 'Saca tu credit score real (FICO de 3 burós, no Credit Karma). Si está entre 580 y 700, empieza con la suposición de que vas FHA. Si está entre 700 y 740, calcula ambos escenarios lado a lado. Si tienes 740+, ve directo a convencional. En cualquier caso, pide a tu originador que te muestre BOTH escenarios con números reales en un Loan Estimate — no aceptes "FHA es para ti" sin que te muestren convencional al lado. Es tu derecho y tu dinero.',
    },
  ],
  faq: [
    {
      question: '¿Puedo pasar de FHA a convencional sin refinanciar?',
      answer:
        'No directamente — son productos distintos con underwriting distinto. Para "pasar" de uno a otro hay que refinanciar (nuevo préstamo, nuevo cierre, nuevos closing costs). Lo bueno es que si subiste tu credit score y acumulaste 20% de equity, el refinanciamiento sale a tu favor y se paga solo en 2-3 años.',
    },
    {
      question: '¿Cuándo se puede quitar el PMI en un préstamo convencional?',
      answer:
        'Automáticamente cuando llegas a 78% loan-to-value (basado en el precio de compra original). Bajo solicitud y aprobación del lender, a 80% LTV. Si quieres acelerarlo: paga extra al principal cada mes, o pide una tasación nueva si tu casa apreció significativamente. La diferencia es típicamente $80-$200 menos al mes — vale la pena el esfuerzo.',
    },
    {
      question: '¿El MIP de FHA realmente es de por vida?',
      answer:
        'En la mayoría de los casos sí — específicamente cuando das menos del 10% de down payment. Si das 10%+ de down, el MIP termina después de 11 años. Esta es una de las razones más fuertes para refinanciar a convencional cuando es viable: eliminas un cargo que de otra forma pagarías por 30 años.',
    },
    {
      question: '¿Qué tasa de interés puedo esperar hoy?',
      answer:
        'En el primer trimestre de 2026, tasas para 30-year fixed están aproximadamente: FHA 6.0-6.5% (con credit 660+), convencional 6.25-6.75% (con credit 740+). Las tasas cambian a diario; pídele a tu originador tasas EN VIVO cuando estés a 60 días de comprar, no estimados de un sitio web.',
    },
    {
      question: '¿Para investment property qué préstamo se usa?',
      answer:
        'FHA NO se permite para investment property (solo vivienda principal). Para investment usas: convencional (15-25% down, score 680+), DSCR loans (basados en el flujo de renta no en tu ingreso personal), o hard money loans (rápidos pero caros, para fix-and-flips). Cada uno tiene su nicho — escríbeme y discutimos cuál aplica a tu caso.',
    },
  ],
  relatedSlugs: ['preparacion-crediticia-antes-de-hipoteca', 'primera-vivienda-en-estados-unidos'],
}
