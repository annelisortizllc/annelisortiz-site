import { site, social, business, books, contact, assets, applicationPortal } from '@/lib/site'
import { businessProfiles } from '@/content/reviews'

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
    nationality: { '@type': 'Country', name: 'United States' },
    birthPlace: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Juan',
        addressRegion: 'PR',
        addressCountry: 'PR',
      },
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universidad de Puerto Rico, Recinto de Río Piedras',
      sameAs: 'https://www.uprrp.edu/',
    },
    memberOf: [
      {
        '@type': 'Organization',
        name: 'National Association of Realtors',
        url: 'https://www.nar.realtor/',
      },
      {
        '@type': 'Organization',
        name: 'Florida Realtors',
        url: 'https://www.floridarealtors.org/',
      },
    ],
    founder: {
      '@type': 'Organization',
      name: 'Annelis Ortiz LLC',
      foundingDate: '2024',
    },
    award: [
      '2024 Rookie of the Year — Keller Williams Advantage III Realty',
      '2024 Rising Star — Keller Williams Advantage III Realty',
    ],
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
    // Goal: 10+ verifiable entries (DAB v2.0 Fase 6 checklist).
    // Faltan: Wikidata (re-crear post Fase 5 con press tier-1), Goodreads (when listed).
    sameAs: [
      'https://www.amazon.com/author/annelisortiz', // Amazon Author Central — perfil verificado
      businessProfiles.nexa.profileUrl, // GBP NEXA Lending (Mortgage Loan Originator)
      businessProfiles.kw.profileUrl, // GBP Keller Williams Advantage III (Real Estate Agent)
      social.instagram,
      social.facebook,
      social.tiktok,
      social.linkedin,
      social.youtube,
      'https://www.amazon.com/dp/B0GD97JM53', // libro "Antes de Decidir"
      applicationPortal.url, // aortizloans.com — portal profesional regulado
    ],
    // NOTE: aggregateRating + review[] previously lived here but Google
    // Search Console flagged them with "Invalid object type for field
    // '<parent_node>'" — Person is not in Google's eligible parent types for
    // Review snippets (LocalBusiness, Product, Book, Recipe, etc. are). The
    // visual testimonials section on the homepage continues to render from
    // src/content/reviews.ts directly, so this only removes the structured
    // data, not the user-facing UI. If we ever want rich review snippets in
    // search results, we'll need to create a separate ProfessionalService
    // schema with the reviews attached there.
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

export function articleJsonLd(article: {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  keywords: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${site.url}/blog/${article.slug}`,
    headline: article.title,
    description: article.description,
    inLanguage: 'es',
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: { '@id': `${site.url}#person` },
    publisher: { '@id': `${site.url}#person` },
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
    image: `${site.url}/opengraph-image`,
    keywords: article.keywords,
  }
}

export function bookJsonLd(slug: string) {
  const book = books.find((b) => b.slug === slug)
  if (!book) return null
  // ASIN/amazonUrl are optional on the type but present for "antes-de-decidir";
  // include them only when defined so future books without an Amazon listing
  // still produce valid Schema.org Book entries.
  const b = book as typeof book & { asin?: string; amazonUrl?: string }
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
    ...(b.amazonUrl ? { url: b.amazonUrl, sameAs: [b.amazonUrl] } : {}),
    ...(b.asin
      ? {
          identifier: [
            { '@type': 'PropertyValue', propertyID: 'ASIN', value: b.asin },
          ],
        }
      : {}),
  }
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  }
}
