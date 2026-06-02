import type { BlogPost } from './types'

export const post: BlogPost = {
  publishedAt: '2026-05-19',
  readingTimeMin: 8,
  relatedSlugs: ['preparacion-crediticia-antes-de-hipoteca', 'primera-vivienda-en-estados-unidos'],
  es: {
    slug: 'fha-vs-convencional-2026',
    title:
      'FHA vs Convencional en 2026: qué préstamo te conviene (familias hispanas)',
    description:
      'Comparación honesta de FHA vs convencional para primer comprador hispano en 2026. Números reales, no marketing — descubre cuál te ahorra más a largo plazo.',
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
  },
  en: {
    slug: 'fha-vs-conventional-loan-2026-first-time-buyers',
    title:
      'FHA vs Conventional Loan in 2026: Which One Is Right for You (Hispanic First-Time Buyers)',
    description:
      'An honest FHA vs conventional loan comparison for Hispanic first-time homebuyers in 2026. Real numbers, no marketing — see which one saves you more over the long run.',
    category: 'Mortgages',
    keywords: [
      'FHA vs conventional loan',
      'which mortgage is right for me',
      'first-time homebuyer loan options',
      'FHA loan down payment requirements',
      'FHA mortgage insurance premium',
      'conventional loan PMI removal',
    ],
    intro:
      'The most common question I get from first-time buyers is: FHA or conventional? The short answer is "it depends on your profile" — but that "depends" comes down to 4 specific variables that decide everything. This article will help you figure out which one fits you WITHOUT having to call me first.',
    sections: [
      {
        type: 'paragraph',
        text: 'I work at NEXA Lending and I offer both products, so I have no incentive to push you toward one or the other. Let me be straight with you: there are profiles where FHA wins hands down, profiles where conventional wins, and profiles where it is a 50/50 call that depends on your 5-year plan. Let us take it step by step.',
      },

      { type: 'heading', level: 2, text: 'What each one actually is (without the jargon)' },
      {
        type: 'paragraph',
        text: 'FHA loan: a mortgage insured by the federal government (Federal Housing Administration). The bank lends you the money, but the government guarantees the loan if you stop paying. That is why banks accept more flexible terms — lower credit score, smaller down payment. In exchange, you pay a special insurance (mortgage insurance premium, or MIP) for the life of the loan in most cases.',
      },
      {
        type: 'paragraph',
        text: 'Conventional: a loan that is not government-guaranteed, purchased by Fannie Mae or Freddie Mac (quasi-government entities). The bank takes on more risk, so the terms are stricter — higher credit score, lower debt-to-income. But it is also more flexible in other ways: the mortgage insurance (called PMI here) can be removed once your equity hits 20%, while FHA MIP sticks with you for life.',
      },

      { type: 'heading', level: 2, text: 'Side-by-side comparison (2026 numbers)' },
      {
        type: 'list',
        items: [
          'Minimum down payment · FHA: 3.5% (credit 580+) or 10% (credit 500-579) · Conventional: 3% for first-time buyers, typically 5%',
          'Minimum credit score · FHA: 580 (some lenders go to 500) · Conventional: 620 (better at 680+)',
          'Maximum debt-to-income · FHA: up to 56.99% in some cases · Conventional: typically 45-50%',
          'Mortgage insurance · FHA: 0.55-0.75% annually + 1.75% upfront, generally for life · Conventional: 0.5-1.5% annually, removable at 20% equity, no upfront fee',
          'Loan limit 2026 (typical area) · FHA: $524,225 (varies by county) · Conventional: $806,500 (conforming limit)',
          'Upfront funding fee · FHA: 1.75% of the loan (can be financed) · Conventional: $0',
          'Property requirements · FHA: the home must pass an appraisal with strict standards · Conventional: simpler appraisal',
        ],
      },

      { type: 'heading', level: 2, text: 'A real-world example with numbers' },
      {
        type: 'paragraph',
        text: 'A $300,000 home. Let us compare both options assuming solid profiles:',
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Scenario A · FHA with 660 credit and 3.5% down',
        text: 'Down payment: $10,500. Loan: $289,500 + $5,066 upfront MIP = $294,566 total financed. Estimated P&I payment at 6.75%: ~$1,911. Monthly MIP: $135. Total payment with escrow: ~$2,400-$2,600. Total interest over 30 years: ~$398,000.',
      },
      {
        type: 'callout',
        tone: 'highlight',
        title: 'Scenario B · Conventional with 740 credit and 5% down',
        text: 'Down payment: $15,000. Loan: $285,000 (no upfront fee). Estimated P&I payment at 6.25%: ~$1,755. Monthly PMI: $95. Total payment with escrow: ~$2,200-$2,400. Total interest over 30 years: ~$346,000. Once you reach 20% equity (typically year 7-8), you drop PMI and save $95/month.',
      },
      {
        type: 'paragraph',
        text: 'Difference over 30 years: the conventional scenario comes out $50,000+ cheaper. But here is the catch: conventional requires a 740 credit score and $4,500 more cash upfront. If your real profile is a 660 score, FHA is not "worse" — it is "the only one actually available to you".',
      },

      { type: 'heading', level: 2, text: 'When FHA wins (no debate)' },
      {
        type: 'list',
        items: [
          'Your credit score is between 580 and 660. Conventional will not even give you competitive terms.',
          'Your debt-to-income is high (>45%). FHA accepts up to 56.99% with compensating factors.',
          'Your down payment is capped at 3.5-5% and you have no flexibility to go higher.',
          'Your work history is non-traditional (employment gap, recently self-employed without 2 years of history).',
          'You are bringing on a family co-signer — FHA accepts non-occupying co-borrowers more easily.',
        ],
      },

      { type: 'heading', level: 2, text: 'When conventional wins' },
      {
        type: 'list',
        items: [
          'Credit score 740+. The rate difference and removable PMI mean you pay less over the long haul.',
          'Down payment 10%+. Lower PMI that you can remove quickly makes up for the bigger upfront cost.',
          'You plan to live in the home for less than 7 years. PMI comes off when you refinance or sell, while FHA MIP stays forever.',
          'You are buying an investment property or second home. FHA only finances your primary residence.',
          'The home price is above your county FHA loan limit.',
        ],
      },

      { type: 'heading', level: 2, text: 'When it is 50/50 (your plan decides)' },
      {
        type: 'paragraph',
        text: 'If your credit score is between 680 and 720, and your down payment is between 5 and 10%, both will qualify you on reasonable terms. Here is what tips the scale:',
      },
      {
        type: 'list',
        items: [
          'How many years do you plan to live in this home? Less than 5 years → conventional wins (removable PMI matters less). More than 10 years → conventional still wins because removable PMI compounds in your favor. Only the 5-7 year window is a real tie.',
          'Do you have room to wait another 6 months and push your score to 740? If yes, wait it out and go conventional. If not, FHA today beats conventional with a worse rate.',
          'Will the home you want pass an FHA appraisal? FHA has strict standards on things like peeling paint, drainage, and chipped trim. If the home is older and not perfectly maintained, conventional may be your only real option.',
        ],
      },

      { type: 'heading', level: 2, text: 'The play most people miss: FHA now → refinance to conventional later' },
      {
        type: 'paragraph',
        text: 'This is what smart families often do: they start with FHA because their credit score or down payment does not yet qualify them for conventional, and they refinance to conventional 2-4 years down the road once their score has improved, they have built more equity, and/or rates have come down.',
      },
      {
        type: 'paragraph',
        text: 'Cost to refinance: $4,000-$8,000 in closing costs. If it saves you $200/month and gets rid of MIP, you break even in 24-36 months and everything after that is pure savings. This works especially well if you buy in an appreciating market — equity builds faster and you hit that 20% mark sooner to drop PMI.',
      },
      {
        type: 'callout',
        tone: 'info',
        title: 'Important caveat',
        text: 'Do not buy FHA "assuming you will just refinance soon". Rates can climb, your situation can change, and sometimes that refi never happens. Buy FHA because it makes sense for you TODAY with your current profile — a future refi is a bonus, not a plan.',
      },

      { type: 'heading', level: 2, text: 'Common mistakes in this decision' },
      {
        type: 'list',
        items: [
          'Choosing FHA "because the down payment is lower" without running the 30-year cost. Sometimes that upfront savings costs you $50,000+ down the road.',
          'Choosing conventional "because it sounds more prestigious" without the profile to actually get good terms. A conventional loan with a 650 score and high PMI is worse than a well-structured FHA.',
          'Not comparing Loan Estimates from 3+ lenders. For the same product and the same profile, two lenders can quote you a 0.5% difference.',
          'Not considering a VA loan if you qualify. If you or your spouse is a veteran, VA loans almost always beat FHA or conventional (0% down, no PMI, better rates).',
        ],
      },

      { type: 'heading', level: 2, text: 'My honest take for first-time Hispanic families' },
      {
        type: 'paragraph',
        text: 'Pull your real credit score (FICO from all 3 bureaus, not Credit Karma). If it is between 580 and 700, start with the assumption that FHA is your path. If it is between 700 and 740, run both scenarios side by side. If you are at 740+, head straight to conventional. Either way, ask your loan officer to show you BOTH scenarios with real numbers on a Loan Estimate — do not accept "FHA is for you" without seeing conventional next to it. It is your right and your money.',
      },
    ],
    faq: [
      {
        question: 'Can I switch from FHA to conventional without refinancing?',
        answer:
          'Not directly — they are separate products with separate underwriting. To "switch" from one to the other you have to refinance (new loan, new closing, new closing costs). The good news is that if your credit score has gone up and you have built 20% equity, the refinance usually pays for itself in 2-3 years.',
      },
      {
        question: 'When can PMI be removed on a conventional loan?',
        answer:
          'Automatically once you hit 78% loan-to-value (based on your original purchase price). By lender request and approval, at 80% LTV. If you want to get there faster: pay extra toward principal each month, or order a new appraisal if your home has appreciated significantly. The difference is typically $80-$200 less per month — well worth the effort.',
      },
      {
        question: 'Is FHA MIP really for the life of the loan?',
        answer:
          'In most cases, yes — specifically when you put less than 10% down. If you put 10%+ down, MIP drops off after 11 years. This is one of the strongest reasons to refinance to conventional when it makes sense: you get rid of a charge you would otherwise pay for 30 years.',
      },
      {
        question: 'What interest rate can I expect right now?',
        answer:
          'In Q1 2026, 30-year fixed rates are running roughly: FHA 6.0-6.5% (with 660+ credit), conventional 6.25-6.75% (with 740+ credit). Rates move daily; ask your loan officer for LIVE rates when you are within 60 days of buying, not estimates from a website.',
      },
      {
        question: 'Which loan do I use for an investment property?',
        answer:
          'FHA is NOT allowed for investment properties (primary residence only). For investment you use: conventional (15-25% down, 680+ score), DSCR loans (based on rental cash flow instead of your personal income), or hard money loans (fast but expensive, made for fix-and-flips). Each one has its niche — reach out and we can talk through which one fits your case.',
      },
    ],
  },
}
