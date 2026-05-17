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
  employer: 'NEXA Lending',
  employerUrl: 'https://nexalending.com',
  role: 'Originadora de Préstamos Hipotecarios',
  alsoRole: 'Agente de Bienes Raíces',
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
