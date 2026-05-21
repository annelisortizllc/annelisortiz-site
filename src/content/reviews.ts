/**
 * Google Business Profile reviews — Annelis Ortiz.
 * Annelis manages TWO GBP profiles (one per professional role) and the
 * reviews live across both:
 *
 *   - NEXA Lending LLC (kgmid /g/11rxnxcsv2)   — Mortgage Loan Originator
 *   - Keller Williams Advantage III Realty
 *     (kgmid /g/11y8tk0hnb)                   — Real Estate Agent
 *
 * Captured: 2026-05-20. All 13 reviews are 5-star.
 * English originals are translated to Spanish for display (site is ES-only).
 * `displayName` shortens to "First L." per privacy convention; Schema.org
 * uses the same name (it is already public on Google).
 */

export type ReviewSource = 'nexa' | 'kw'

export interface GoogleReview {
  /** Stable id used as React key + Schema.org review.id suffix */
  id: string
  /** Which GBP profile this review was left on */
  source: ReviewSource
  /** Public Google reviewer name (full) */
  fullName: string
  /** Shortened name shown in the UI */
  displayName: string
  /** ISO date (approximate from Google's "X months/years ago" timestamps) */
  datePublished: string
  /** 1-5 rating (all 5-star for Annelis as of 2026-05-20) */
  rating: 5
  /** Spanish text rendered in the UI */
  body: string
  /** ISO 639-1 code of the *original* review language ('es' or 'en') */
  originalLanguage: 'es' | 'en'
}

export interface BusinessProfile {
  /** Internal source key matching ReviewSource */
  source: ReviewSource
  /** Display name in UI badges */
  label: string
  /** Legal/registered organization name (used in Schema.org) */
  legalName: string
  /** Knowledge Graph machine ID */
  kgmid: string
  /** Canonical Google search URL for the entity */
  profileUrl: string
  /** Public share link */
  shareUrl: string
}

export const businessProfiles: Record<ReviewSource, BusinessProfile> = {
  nexa: {
    source: 'nexa',
    label: 'NEXA Lending',
    legalName: 'NEXA Lending LLC',
    kgmid: '/g/11rxnxcsv2',
    profileUrl: 'https://www.google.com/search?kgmid=%2Fg%2F11rxnxcsv2',
    shareUrl: 'https://share.google/X8SyAdXmwMzDwlZ6O',
  },
  kw: {
    source: 'kw',
    label: 'Keller Williams Realty',
    legalName: 'Keller Williams Advantage III Realty',
    kgmid: '/g/11y8tk0hnb',
    profileUrl: 'https://www.google.com/search?kgmid=%2Fg%2F11y8tk0hnb',
    shareUrl: 'https://share.google/pR8a0HhVIgokNTHZU',
  },
}

/** Sorted newest first */
export const googleReviews: GoogleReview[] = [
  {
    id: 'elizabeth-n-2025-09',
    source: 'nexa',
    fullName: 'Elizabeth Nunez',
    displayName: 'Elizabeth N.',
    datePublished: '2025-09-01',
    rating: 5,
    body: 'La experiencia de comprar mi casa fue maravillosa y rápida. El profesionalismo de Annelis fue increíble. Recomiendo sus servicios 200%.',
    originalLanguage: 'en',
  },
  {
    id: 'eric-g-2025-07',
    source: 'kw',
    fullName: 'Eric Guzman',
    displayName: 'Eric G.',
    datePublished: '2025-07-15',
    rating: 5,
    body: 'Seré breve y directo: sin Annelis, todavía estaríamos pagando renta. Le expreso mi más profunda gratitud por todo. No solo hay dedicación, también profesionalismo en su mejor expresión. Gracias Annelis por llevarnos a nuestra casa.',
    originalLanguage: 'en',
  },
  {
    id: 'jorge-r-2025-05',
    source: 'nexa',
    fullName: 'Jorge David Rodríguez Mejil',
    displayName: 'Jorge R.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'La experiencia y la forma en que se manejó el caso fueron espectaculares, especialmente cómo facilitaron todo.',
    originalLanguage: 'en',
  },
  {
    id: 'eldonia-g-2025-05',
    source: 'kw',
    fullName: 'Eldonia Gonzalez',
    displayName: 'Eldonia G.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Annelis Ortiz fue la mejor para trabajar con nosotros, hizo todo súper fácil. ¡Gracias por todo lo que haces!',
    originalLanguage: 'en',
  },
  {
    id: 'abel-r-2025-05',
    source: 'kw',
    fullName: 'Abel Rivas',
    displayName: 'Abel R.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Annelis fue extremadamente útil, trabajó con nosotros durante todo el proceso, respondió todas nuestras preguntas, el seguimiento fue de primera, muy conocedora del proceso. La recomiendo a cualquiera. Gran experiencia. 👍',
    originalLanguage: 'en',
  },
  {
    id: 'melissa-d-2025-05',
    source: 'kw',
    fullName: 'Melissa De la Torre',
    displayName: 'Melissa D.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Excelente experiencia. Trabajar con Annelis Ortiz fue una experiencia agradable. Desde el inicio, demostró un compromiso excepcional con mi caso. Annelis se tomó el tiempo necesario para guiarme y asegurarse de que entendiera todo el proceso. Su rapidez para responder preguntas y su atención al detalle fueron realmente impresionantes. Lo que más puedo resaltar fue su disposición para ir más allá de lo esperado, manteniéndome informada durante todo el proceso. Recomendaría a Annelis Ortiz a cualquiera que busque un financiamiento confiable, transparente y eficiente. ¡Gracias por hacer este proceso tan sencillo y exitoso, y por ser parte de uno de nuestros más grandes sueños!',
    originalLanguage: 'es',
  },
  {
    id: 'sara-m-2025-05',
    source: 'kw',
    fullName: 'Sara Maresma Juviel',
    displayName: 'Sara M.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Muy profesional en sus servicios. Nos acompañó en todo el proceso de compra de nuestra primera casita. Siempre pendiente a nuestras dudas y dispuesta a ayudarnos con sus mejores consejos. La recomendamos 100%.',
    originalLanguage: 'es',
  },
  {
    id: 'cliente-verificado-2024-05',
    source: 'nexa',
    fullName: 'Cliente verificado',
    displayName: 'Cliente verificado',
    datePublished: '2024-05-01',
    rating: 5,
    body: 'Después de seis meses comparando opciones, por mucho la tasa de interés más competitiva (por más de 2 puntos). Además, Annelis hizo la diferencia. Comunicación súper efectiva (disponible 24/7). Cuando eres comprador por primera vez, eso marca la diferencia. Mil gracias a Annelis y a su equipo: hicieron de una experiencia estresante un placer.',
    originalLanguage: 'en',
  },
  {
    id: 'omar-s-2023-05',
    source: 'nexa',
    fullName: 'Omar Santiago',
    displayName: 'Omar S.',
    datePublished: '2023-05-01',
    rating: 5,
    body: '¡¡Simplemente los mejores!! Atentos y profesionales.',
    originalLanguage: 'en',
  },
  {
    id: 'alfredo-g-2023-05',
    source: 'nexa',
    fullName: 'Alfredo Gomez',
    displayName: 'Alfredo G.',
    datePublished: '2023-05-01',
    rating: 5,
    body: 'Excelente servicio. Recomendado 💯',
    originalLanguage: 'en',
  },
  {
    id: 'evelin-f-2023-05',
    source: 'nexa',
    fullName: 'Evelin Farias',
    displayName: 'Evelin F.',
    datePublished: '2023-05-01',
    rating: 5,
    body: 'Annelis es una excelente persona y profesional. En mi caso ella gestionó el refinanciamiento de mi casa y siempre estuvo atenta a brindarme las mejores opciones. Me sentí completamente en confianza con sus recomendaciones, pues siempre tomó en cuenta mis necesidades y planteamientos. Sin duda la recomiendo ampliamente: con ella están en muy buenas manos.',
    originalLanguage: 'es',
  },
  {
    id: 'luis-m-2023-05',
    source: 'nexa',
    fullName: 'Luis Omar Menjivar Guevara',
    displayName: 'Luis M.',
    datePublished: '2023-05-01',
    rating: 5,
    body: 'En mi experiencia, Annelis y su equipo son los mejores: rápidos y eficaces. Agradezco mucho toda la ayuda. Los recomiendo 100%.',
    originalLanguage: 'es',
  },
  {
    id: 'anthony-w-2022-05',
    source: 'nexa',
    fullName: 'Anthony Williams',
    displayName: 'Anthony W.',
    datePublished: '2022-05-01',
    rating: 5,
    body: '¡¡¡Excelente servicio!!! Aspectos positivos: capacidad de respuesta, calidad.',
    originalLanguage: 'en',
  },
]

/** Aggregate stats for Schema.org AggregateRating (across BOTH profiles). */
export const googleReviewsAggregate = {
  ratingValue: 5,
  reviewCount: googleReviews.length,
  bestRating: 5,
  worstRating: 1,
} as const

/** Per-source counts (useful for UI labels + per-org Schema.org if we add it). */
export const reviewCountsBySource: Record<ReviewSource, number> = googleReviews.reduce(
  (acc, r) => ({ ...acc, [r.source]: (acc[r.source] || 0) + 1 }),
  { nexa: 0, kw: 0 } as Record<ReviewSource, number>,
)
