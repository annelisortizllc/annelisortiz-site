import { site, social, business, books } from '@/lib/site'

export function personJsonLd(locale: 'es' | 'en') {
  const description =
    locale === 'es'
      ? 'Originadora de Préstamos Hipotecarios en NEXA Mortgage LLC y Agente de Bienes Raíces. Ayudo a familias a aumentar su patrimonio a través del financiamiento y compra de propiedades principales y de inversión. Autora de "Antes de Decidir".'
      : 'Mortgage Loan Originator at NEXA Mortgage LLC and Real Estate Agent. I help families grow generational wealth through financing and the purchase of primary and investment properties. Author of "Antes de Decidir".'

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}#person`,
    name: 'Annelis Ortiz',
    url: site.url,
    image: `${site.url}/og.jpg`,
    description,
    jobTitle:
      locale === 'es'
        ? [
            business.role.es,
            business.alsoRole.es,
            'Autora',
            'Coach financiera',
          ]
        : [business.role.en, business.alsoRole.en, 'Author', 'Financial Coach'],
    worksFor: {
      '@type': 'Organization',
      name: business.employer,
      url: 'https://nexamortgage.com',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: locale === 'es' ? 'Formación universitaria en Contabilidad' : 'University degree in Accounting',
    },
    knowsLanguage: ['es', 'en'],
    knowsAbout:
      locale === 'es'
        ? [
            'Financiamiento hipotecario',
            'Bienes raíces residenciales y de inversión',
            'Educación financiera',
            'Preparación crediticia',
            'Construcción de patrimonio familiar',
            'Compra de primera vivienda',
          ]
        : [
            'Mortgage financing',
            'Residential and investment real estate',
            'Financial education',
            'Credit preparation',
            'Family wealth building',
            'First-time home buying',
          ],
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Puerto Rico' },
      { '@type': 'Place', name: 'Latin America' },
    ],
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'FollowAction' },
        userInteractionCount: 30000,
      },
    ],
    sameAs: [
      social.instagram,
      social.facebook,
      social.tiktok,
      social.linkedin,
      social.youtube,
    ],
  }
}

export function websiteJsonLd(locale: 'es' | 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}#website`,
    url: site.url,
    name: 'Annelis Ortiz',
    inLanguage: locale,
    publisher: { '@id': `${site.url}#person` },
  }
}

export function bookJsonLd(locale: 'es' | 'en', slug: string) {
  const book = books.find((b) => b.slug === slug)
  if (!book) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${site.url}/${locale}/libros/${book.slug}`,
    name: book.title,
    inLanguage: book.inLanguage,
    author: { '@id': `${site.url}#person` },
    description: book.description[locale],
    image: `${site.url}${book.cover}`,
    bookFormat: 'https://schema.org/Paperback',
  }
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  }
}
