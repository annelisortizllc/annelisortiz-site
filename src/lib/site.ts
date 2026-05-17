export const site = {
  url: 'https://annelisortiz.com',
  name: 'Annelis Ortiz',
  legalName: 'Annelis Ortiz',
  ogImage: '/og.jpg',
  locale: 'es' as const,
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

export const books = [
  {
    slug: 'antes-de-decidir',
    title: 'Antes de Decidir: Cuando Nadie Te Enseñó a Prepararte',
    subtitle: 'Educación financiera, preparación y mentalidad antes de comprar una propiedad.',
    description:
      'Una guía enfocada en educación financiera, preparación y mentalidad antes de comprar una propiedad.',
    cover: '/books/antes-de-decidir.jpg', // TODO: subir portada real
    inLanguage: 'es',
    author: 'Annelis Ortiz',
  },
] as const
