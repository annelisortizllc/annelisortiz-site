import { site, social } from '@/lib/site'

export function personJsonLd(locale: 'es' | 'en') {
  const description =
    locale === 'es'
      ? 'Mortgage Loan Officer, Agente de Bienes Raíces, Autora y Coach. Ayudo a familias a aumentar su patrimonio a través del financiamiento y compra de propiedades principales y de inversión.'
      : 'Mortgage Loan Officer, Real Estate Agent, Author and Coach. I help families grow generational wealth through financing and the purchase of primary and investment properties.'

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
        ? ['Mortgage Loan Officer', 'Agente de Bienes Raíces', 'Autora', 'Coach']
        : ['Mortgage Loan Officer', 'Real Estate Agent', 'Author', 'Coach'],
    knowsLanguage: ['es', 'en'],
    knowsAbout:
      locale === 'es'
        ? [
            'Financiamiento hipotecario',
            'Bienes raíces',
            'Inversión en propiedades',
            'Construcción de patrimonio',
            'Educación financiera',
          ]
        : [
            'Mortgage financing',
            'Real estate',
            'Property investment',
            'Wealth building',
            'Financial education',
          ],
    sameAs: [
      social.instagram,
      social.linkedin,
      social.youtube,
      social.tiktok,
      social.facebook,
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

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  }
}
