export const site = {
  url: 'https://annelisortiz.com',
  name: 'Annelis Ortiz',
  legalName: 'Annelis Ortiz',
  ogImage: '/og.jpg',
  locale: 'es' as const,
} as const

// Contacto público directo (sin asistente — Annelis maneja directamente).
export const contact = {
  email: 'info@annelisortiz.com',
  whatsappE164: '+14073076493',
  whatsappPretty: '+1 (407) 307-6493',
  whatsappUrl: 'https://wa.me/14073076493',
  mailto: 'mailto:info@annelisortiz.com',
  // Booking widget para consultas iniciales de hipoteca / bienes raíces.
  // Vive en el portal profesional (aortizloans.com) donde Annelis ya tiene su
  // calendar set up. Abre en nueva pestaña; no se embebe en iframe en el sitio.
  bookingUrl: 'https://app.aortizloans.com/widget/bookings/calendario-consulta-inicial',
} as const

// Redes sociales verificadas. OJO: TikTok handle es @annelis.7 (no @annelisortiz).
export const social = {
  instagram: 'https://www.instagram.com/annelisortiz/',
  facebook: 'https://www.facebook.com/annelisortiz',
  tiktok: 'https://www.tiktok.com/@annelis.7',
  linkedin: 'https://www.linkedin.com/in/annelisortiz/',
  youtube: 'https://www.youtube.com/@AnnelisOrtiz',
} as const

export const business = {
  employer: 'NEXA Lending LLC',
  employerUrl: 'https://nexalending.com',
  role: 'Originadora de Préstamos Hipotecarios',
  alsoRole: 'Agente de Bienes Raíces',
  // NMLS disclosures — legally required on any LO-facing communication.
  // Confirmado por Annelis 2026-05-17.
  nmlsLoanOfficer: '2006182', // Annelis
  nmlsCompany: '1660690', // NEXA Lending LLC
  nmlsConsumerAccess: 'https://www.nmlsconsumeraccess.org/',
  equalHousing: true,
} as const

// Portal profesional donde Annelis recibe aplicaciones formales como Originadora.
// El sitio annelisortiz.com es marca/autoridad; aortizloans.com es transacción.
export const applicationPortal = {
  url: 'https://aortizloans.com',
  label: 'aortizloans.com',
} as const

// Activos visuales centralizados — cambiar el path aquí si se renombran los archivos.
export const assets = {
  portrait: '/annelis-portrait.jpg', // beige fondo, blusa negra — /sobre-mi
  portraitHero: '/annelis-hero.jpg', // gris estudio, knit blanco — home Hero
  bookCover: '/books/antes-de-decidir.jpg',
} as const

export const books = [
  {
    slug: 'antes-de-decidir',
    title: 'Antes de Decidir: Cuando Nadie Te Enseñó a Prepararte',
    subtitle: 'Educación financiera, preparación y mentalidad antes de comprar una propiedad.',
    description:
      'Una guía enfocada en educación financiera, preparación y mentalidad antes de comprar una propiedad.',
    cover: '/books/antes-de-decidir.jpg',
    inLanguage: 'es',
    author: 'Annelis Ortiz',
    asin: 'B0GD97JM53',
    amazonUrl: 'https://www.amazon.com/dp/B0GD97JM53',
  },
] as const
