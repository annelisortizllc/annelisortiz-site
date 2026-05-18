import { site, social, business, books, contact, assets, applicationPortal } from '@/lib/site'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}#person`,
    name: 'Annelis Ortiz',
    givenName: 'Annelis',
    familyName: 'Ortiz',
    gender: 'Female',
    url: site.url,
    mainEntityOfPage: site.url,
    image: `${site.url}${assets.portrait}`,
    email: contact.email,
    telephone: contact.whatsappE164,
    description:
      'Originadora de Préstamos Hipotecarios en NEXA Lending LLC, Agente de Bienes Raíces, Autora de "Antes de Decidir" y Coach en español para Originadores de Préstamos. Ayudo a familias a construir patrimonio a través de la propiedad, y a Originadores hispanos a crecer en su carrera.',
    jobTitle: [
      business.role,
      business.alsoRole,
      'Autora',
      'Coach para Originadores de Préstamos',
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: business.role,
        occupationLocation: { '@type': 'Country', name: 'United States' },
        skills: 'Mortgage origination, credit preparation, financial strategy',
      },
      {
        '@type': 'Occupation',
        name: business.alsoRole,
        occupationLocation: { '@type': 'Country', name: 'United States' },
      },
      {
        '@type': 'Occupation',
        name: 'Author',
        skills: 'Financial education writing',
      },
      {
        '@type': 'Occupation',
        name: 'Coach for Mortgage Loan Originators',
        skills: 'Mentoring, production growth, Spanish-language coaching',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: business.employer,
      url: business.employerUrl,
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Formación universitaria en Contabilidad',
    },
    knowsLanguage: ['es', 'en'],
    knowsAbout: [
      'Financiamiento hipotecario',
      'Bienes raíces residenciales y de inversión',
      'Educación financiera',
      'Preparación crediticia',
      'Construcción de patrimonio familiar',
      'Compra de primera vivienda',
      'Coaching para Originadores de Préstamos',
      'Crecimiento de producción hipotecaria',
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
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'NMLS',
        value: business.nmlsLoanOfficer,
      },
    ],
    // sameAs: enlaces cruzados que IAs y Google usan para resolver identidad.
    // Cuando Annelis tenga Wikidata Q-ID + Amazon Author URL + Goodreads URL,
    // agregarlos aquí (ver pr/phase-4-authority-platforms.md).
    sameAs: [
      social.instagram,
      social.facebook,
      social.tiktok,
      social.linkedin,
      social.youtube,
      applicationPortal.url, // aortizloans.com — portal profesional verificable
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}#website`,
    url: site.url,
    name: 'Annelis Ortiz',
    inLanguage: 'es',
    publisher: { '@id': `${site.url}#person` },
  }
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.answer,
      },
    })),
  }
}

export function bookJsonLd(slug: string) {
  const book = books.find((b) => b.slug === slug)
  if (!book) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${site.url}/libros/${book.slug}`,
    name: book.title,
    inLanguage: book.inLanguage,
    author: { '@id': `${site.url}#person` },
    description: book.description,
    image: `${site.url}${book.cover}`,
    bookFormat: 'https://schema.org/Paperback',
  }
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  }
}
