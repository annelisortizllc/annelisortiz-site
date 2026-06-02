// 10-step preparation checklist — content shared by /recurso/checklist-preparacion
// (ES) and /en/resource/preparation-checklist (EN).
//
// Compilado del marco que Annelis usa con cada cliente antes de aplicar a una
// hipoteca y de la tesis del libro "Antes de Decidir".

export type ChecklistStep = {
  num: number
  title: string
  why: string
  action: string[]
  pitfall?: string
}

export const stepsEs: ChecklistStep[] = [
  {
    num: 1,
    title: 'Revisa tu reporte de crédito 90–180 días antes de aplicar',
    why: 'La mayoría de las negativas que veo no son por falta de ingreso, son por movimientos de último minuto: cuentas en colecciones que no sabías que existían, errores en la información, o utilización de tarjetas que de repente sube. Anticípalo.',
    action: [
      'Descarga tu reporte gratis en annualcreditreport.com — los tres burós (Experian, Equifax, TransUnion)',
      'Disputa cualquier error directamente con el buró',
      'Baja la utilización de tarjetas a menos de 30% del límite',
      'NO cierres tarjetas viejas — la antigüedad cuenta',
    ],
    pitfall:
      'Empezar a buscar casa antes de mirar el reporte. Si encuentras la propiedad y luego el crédito te tumba la aplicación, perdiste tiempo y ánimo.',
  },
  {
    num: 2,
    title: 'Conoce tu DTI real antes de enamorarte de una casa',
    why: 'El prestamista no mira tu salario neto — mira tu Debt-to-Income ratio: TODAS tus deudas mensuales (tarjetas, auto, estudiantes) más el pago propuesto de casa, dividido entre tu ingreso bruto. En convencional aceptamos hasta ~45-50%, en FHA podemos llegar más alto.',
    action: [
      'Suma tus pagos mínimos mensuales de toda deuda',
      'Calcula tu ingreso bruto mensual (antes de impuestos)',
      'Tu pago de casa máximo = (Ingreso bruto × 0.45) − deudas actuales',
      'Si el número te asusta, paga la deuda con interés más alto primero',
    ],
    pitfall:
      'Calcular según tu ingreso neto — eso te da un número irreal. El banco usa el bruto.',
  },
  {
    num: 3,
    title: 'Documenta TODO ingreso de forma "prestable"',
    why: 'Para W-2 employees: últimos 30 días de paystubs + 2 años de W-2s. Para self-employed: 2 años de tax returns COMPLETAS con todos los schedules. Si tienes side hustle o ingreso en efectivo sin reportar, ese ingreso NO califica para hipoteca — clave para muchas familias hispanas.',
    action: [
      'Si eres W-2: ten paystubs recientes + 2 años de W-2s organizados',
      'Si eres 1099 o self-employed: 2 años de tax returns completas',
      'Si tienes ingreso por renta: 2 años en Schedule E + leases activos',
      'Considera formalizar el side hustle 24 meses antes de aplicar',
    ],
    pitfall:
      'Pensar que "yo gano $7,000 al mes" cuando solo $4,500 están en tax returns. Para el banco, solo cuenta lo documentado.',
  },
  {
    num: 4,
    title: 'No abras ni cierres nada en los 6 meses previos',
    why: 'Cada cuenta nueva baja tu credit score temporal entre 5-20 puntos. Cada cuenta cerrada altera tu ratio de utilización. Y el banco hace un pull de crédito 24-48h antes del cierre — si hay cambios, puede tumbar la aprobación.',
    action: [
      'NO abras tarjetas nuevas (ni la del Apple Watch, ni la de la tienda)',
      'NO cierres tarjetas viejas que ya no usas',
      'NO compres carro a financiamiento',
      'NO co-firmes nada para nadie',
    ],
    pitfall:
      'Comprar muebles a financiamiento "para cuando llegues a tu casa nueva". Esa deuda mata el DTI justo antes del cierre.',
  },
  {
    num: 5,
    title: 'Pre-aprobación NO es lo mismo que pre-cualificación',
    why: 'La pre-cualificación es una conversación de 10 minutos donde el originador estima cuánto podrías calificar basado en lo que TÚ dices. La pre-aprobación implica que el originador revisó tu crédito, ingreso documentado y deudas. Los vendedores serios solo aceptan la segunda.',
    action: [
      'Pide específicamente una pre-aprobación, no pre-cualificación',
      'Asegúrate de que incluya credit pull (no soft check)',
      'Recibe carta con monto, tasa estimada y términos',
      'La carta vence en 60-90 días — renuévala si la búsqueda se alarga',
    ],
    pitfall:
      'Ir a una open house con pre-cualificación verbal. El agente del vendedor lo nota inmediatamente.',
  },
  {
    num: 6,
    title: 'Compara mínimo 3 prestamistas',
    why: 'Para una misma propiedad, la diferencia en tasa entre dos prestamistas puede ser 0.25-0.5% — eso son miles de dólares en costos de cierre + miles más en intereses durante la vida del préstamo. Y no, comparar lenders NO te baja el crédito si lo haces en una ventana de 14 días.',
    action: [
      'Pide Loan Estimate (documento oficial) a 3 lenders distintos',
      'Compara: tasa, APR, costos de cierre, MIP/PMI',
      'Pregunta por créditos del lender (lender credits) que reducen cierre',
      'No solo el banco grande — los brokers (como yo) acceden a wholesale rates',
    ],
    pitfall:
      'Quedarse con el primer lender por "lealtad" sin comparar. Esa lealtad puede costarte $30K en intereses.',
  },
  {
    num: 7,
    title: 'Calcula tu PITI completo, no solo el precio de la casa',
    why: 'El sticker price es solo una parte. El pago mensual real incluye PITI: Principal, Interés, Taxes (impuestos a la propiedad), Insurance (seguro de vivienda) — y a veces HOA y PMI. Una casa de $300K puede tener PITI de $1,800 o $2,400 según ubicación.',
    action: [
      'Suma: pago de hipoteca + impuestos anuales/12 + seguro/12',
      'Agrega HOA si aplica (puede ser $100-$500/mes)',
      'Agrega PMI si down payment < 20% en convencional',
      'Confirma que tu PITI completo cabe en tu presupuesto sin estrechar la vida',
    ],
    pitfall:
      'Calcular solo el principal + interés y olvidar taxes/seguro. La sorpresa puede ser de $500/mes.',
  },
  {
    num: 8,
    title: 'Conoce el programa correcto para TU perfil',
    why: 'No hay UN programa que sirva a todos. Las opciones cambian la barrera de entrada radicalmente: FHA permite 3.5% con score 580+, Convencional First-Time Buyer permite 3%, VA es 0% para veteranos, y los programas de Down Payment Assistance estatales pueden cubrir gran parte del enganche y costos de cierre.',
    action: [
      'Si crédito 580-700 y poco down payment: explora FHA',
      'Si crédito 700+ y al menos 3% down: convencional First-Time Buyer',
      'Si eres veterano o servicio activo: VA loan (sin down)',
      'Pregunta por programas estatales de DPA — muchos no se anuncian',
    ],
    pitfall:
      'Asumir que necesitas 20% down porque "así fue siempre". Eso no es cierto en 2026.',
  },
  {
    num: 9,
    title: 'No hagas movimientos grandes de dinero sin documentar',
    why: 'El underwriter revisa 60 días de estados de cuenta completos. Cualquier depósito que no sea de tu nómina necesita explicación documentada y "seasoning" (tiempo en cuenta). Recibir $5K de un familiar la semana antes del cierre puede tumbar todo si no está documentado correctamente.',
    action: [
      'Si vas a recibir gift funds: pide al donante una "gift letter" desde el inicio',
      'Si vendes algo: guarda recibo + estado de cuenta del comprador',
      'No transfieras dinero entre cuentas sin trail claro',
      'No deposites efectivo grande — el banco lo marca como "unsourced"',
    ],
    pitfall:
      'Pensar que "es mi dinero, no tienen por qué preguntarme". El banco SÍ pregunta — y si no documentas, no aprueba.',
  },
  {
    num: 10,
    title: 'Ten un colchón post-cierre de 3-6 meses de PITI',
    why: 'El día que recibes las llaves se te van miles entre mudanza, electrodomésticos, depósitos de servicios públicos, ajustes que el inspector encontró pero pudieron esperar. Las familias que cierran sin colchón viven los primeros 6 meses con ansiedad. Las que tienen 3-6 meses de PITI ahorrado en reserva, no.',
    action: [
      'Ahorra 3-6 meses de PITI completo en cuenta líquida',
      'Mantén el fondo de emergencia personal SEPARADO del colchón de casa',
      'No uses el colchón para gastos discrecionales el primer año',
      'Repón cualquier monto que uses dentro de 90 días',
    ],
    pitfall:
      'Gastar todo el ahorro en el down payment + closing y quedarte sin reserva. Un calentador de agua roto el mes 4 te empuja a la tarjeta de crédito.',
  },
]

export const stepsEn: ChecklistStep[] = [
  {
    num: 1,
    title: 'Pull your credit report 90–180 days before applying',
    why: "Most denials I see aren't about income — they're about last-minute surprises: forgotten collections, errors on file, or credit card utilization spiking unexpectedly. Get ahead of it.",
    action: [
      'Get your free reports at annualcreditreport.com — all three bureaus',
      'Dispute any errors directly with the bureau',
      'Lower card utilization below 30% of the limit',
      "Do NOT close old cards — account age matters",
    ],
    pitfall:
      'Starting the house hunt before checking the report. If credit kills the application after you find the property, you wasted time and momentum.',
  },
  {
    num: 2,
    title: 'Know your real DTI before falling in love with a house',
    why: 'The lender does not look at take-home pay — they look at Debt-to-Income ratio: ALL your monthly debts (cards, car, student loans) plus the proposed house payment, divided by gross income. Conventional accepts ~45-50%, FHA can go higher.',
    action: [
      'Add up minimum monthly payments on all debt',
      'Calculate gross monthly income (pre-tax)',
      'Max house payment = (Gross income × 0.45) − current debts',
      'If the number scares you, pay highest-interest debt first',
    ],
    pitfall:
      'Calculating off your take-home — that gives an unrealistic number. The bank uses gross.',
  },
  {
    num: 3,
    title: 'Document EVERY dollar of income in a lendable way',
    why: 'W-2 employees: 30 days of paystubs + 2 years of W-2s. Self-employed: 2 years of complete tax returns with all schedules. If you have side hustle or unreported cash income, that income does NOT qualify for the mortgage — critical for many Hispanic families.',
    action: [
      'W-2: have recent paystubs + 2 years of W-2s organized',
      'Self-employed/1099: 2 years of complete tax returns',
      'Rental income: 2 years on Schedule E + active leases',
      'Consider formalizing the side hustle 24 months before applying',
    ],
    pitfall:
      'Thinking "I make $7,000 a month" when only $4,500 shows on tax returns. To the bank, only documented income counts.',
  },
  {
    num: 4,
    title: 'Do not open or close anything in the 6 months before',
    why: 'Every new account temporarily drops your score 5-20 points. Every closed account changes your utilization ratio. And the bank pulls credit 24-48h before closing — any change can kill the approval.',
    action: [
      'Do NOT open new cards (not the Apple Watch one, not the store one)',
      'Do NOT close old cards you no longer use',
      'Do NOT finance a car',
      'Do NOT co-sign anything for anyone',
    ],
    pitfall:
      "Financing furniture 'for when you move into your new house'. That debt kills your DTI right before closing.",
  },
  {
    num: 5,
    title: "Pre-approval is NOT the same as pre-qualification",
    why: "Pre-qualification is a 10-minute conversation where the originator estimates how much you might qualify for based on what YOU say. Pre-approval means the originator pulled credit and reviewed documented income and debts. Serious sellers only accept the second.",
    action: [
      'Ask specifically for pre-approval, not pre-qualification',
      'Make sure it includes a credit pull (not soft check)',
      'Receive a letter with loan amount, estimated rate and terms',
      'The letter expires in 60-90 days — renew if the search drags',
    ],
    pitfall:
      "Showing up at an open house with a verbal pre-qualification. The seller's agent notices immediately.",
  },
  {
    num: 6,
    title: 'Compare at least 3 lenders',
    why: 'For the same property, rate difference between two lenders can be 0.25-0.5% — that means thousands in closing costs plus thousands more in interest over the life of the loan. And no, comparing lenders does NOT tank your credit if done within a 14-day window.',
    action: [
      'Request a Loan Estimate (official document) from 3 different lenders',
      'Compare: rate, APR, closing costs, MIP/PMI',
      'Ask about lender credits that reduce closing costs',
      'Not just big banks — brokers (like me) access wholesale rates',
    ],
    pitfall:
      'Sticking with the first lender out of "loyalty" without comparing. That loyalty can cost you $30K in interest.',
  },
  {
    num: 7,
    title: 'Calculate your full PITI, not just the house price',
    why: 'The sticker price is only part of it. The real monthly payment includes PITI: Principal, Interest, Taxes (property taxes), Insurance (homeowners) — plus HOA and PMI sometimes. A $300K house can have PITI of $1,800 or $2,400 depending on location.',
    action: [
      'Add: mortgage payment + annual taxes/12 + insurance/12',
      'Add HOA if applicable ($100-$500/month)',
      'Add PMI if down payment < 20% on conventional',
      'Confirm your full PITI fits your budget without squeezing daily life',
    ],
    pitfall:
      'Calculating only principal + interest and forgetting taxes/insurance. The surprise can be $500/month.',
  },
  {
    num: 8,
    title: 'Know the right program for YOUR profile',
    why: 'There is no single program that fits everyone. The options change the barrier dramatically: FHA allows 3.5% with score 580+, Conventional First-Time Buyer allows 3%, VA is 0% for veterans, and state Down Payment Assistance programs can cover most of the down + closing.',
    action: [
      'Credit 580-700 with little down: explore FHA',
      'Credit 700+ and at least 3% down: conventional First-Time Buyer',
      'Veteran or active service: VA loan (zero down)',
      'Ask about state DPA programs — many are not advertised',
    ],
    pitfall:
      'Assuming you need 20% down because "that\'s how it always was". That is not true in 2026.',
  },
  {
    num: 9,
    title: 'Do not move large amounts of money without documenting',
    why: 'The underwriter reviews 60 days of complete bank statements. Any deposit that is not from your paycheck needs documented explanation and "seasoning" (time in the account). Receiving $5K from family the week before closing can kill everything without proper documentation.',
    action: [
      'For gift funds: ask the donor for a "gift letter" from day one',
      'For sales: keep receipt + bank statement from the buyer',
      'Do not transfer between accounts without a clear paper trail',
      'Do not deposit large cash — the bank flags it as "unsourced"',
    ],
    pitfall:
      'Thinking "it is my money, they should not ask me". The bank DOES ask — and without documentation, no approval.',
  },
  {
    num: 10,
    title: 'Have a post-close cushion of 3-6 months of PITI',
    why: 'The day you get the keys, thousands go to moving, appliances, utility deposits, inspector fixes you postponed. Families closing without a cushion spend the first 6 months in anxiety. Families with 3-6 months of PITI saved in reserve do not.',
    action: [
      'Save 3-6 months of full PITI in a liquid account',
      'Keep your personal emergency fund SEPARATE from the house cushion',
      'Do not use the cushion for discretionary spending the first year',
      'Replace any amount you use within 90 days',
    ],
    pitfall:
      'Spending all savings on down payment + closing with no reserve left. A broken water heater in month 4 pushes you to credit cards.',
  },
]
