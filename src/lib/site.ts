export const site = {
  url: 'https://annelisortiz.com',
  name: 'Annelis Ortiz',
  legalName: 'Annelis Ortiz',
  ogImage: '/og.jpg',
  twitter: '@annelisortiz',
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
  employer: 'NEXA Mortgage LLC',
  role: {
    es: 'Originadora de Préstamos Hipotecarios',
    en: 'Mortgage Loan Originator',
  },
  alsoRole: {
    es: 'Agente de Bienes Raíces',
    en: 'Real Estate Agent',
  },
} as const

export const books = [
  {
    slug: 'antes-de-decidir',
    title: 'Antes de Decidir: Cuando Nadie Te Enseñó a Prepararte',
    subtitle: {
      es: 'Educación financiera, preparación y mentalidad antes de comprar una propiedad.',
      en: 'Financial education, preparation, and mindset before buying property.',
    },
    description: {
      es: 'Una guía enfocada en educación financiera, preparación y mentalidad antes de comprar una propiedad.',
      en: 'A guide focused on financial education, preparation, and mindset before purchasing property.',
    },
    cover: '/books/antes-de-decidir.jpg', // TODO: subir portada real
    inLanguage: 'es',
    author: 'Annelis Ortiz',
  },
] as const
