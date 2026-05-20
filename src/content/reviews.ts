/**
 * Google Business Profile reviews — Annelis Ortiz / NEXA Lending LLC.
 * Source: https://www.google.com/search?kgmid=/g/11rxnxcsv2
 * Captured: 2026-05-20. All 13 reviews are 5-star.
 *
 * English originals are translated to Spanish for display (site is ES-only).
 * The `displayName` shortens to "First L." per privacy convention even though
 * full names are public on Google. Schema.org review markup uses the same name.
 */

export interface GoogleReview {
  /** Stable id used as React key + Schema.org review.id suffix */
  id: string
  /** Public Google reviewer name (full) */
  fullName: string
  /** Shortened name shown in the UI */
  displayName: string
  /** ISO date (approximate from Google's "X months/years ago" timestamps) */
  datePublished: string
  /** 1-5 rating (Google reviews are all 5-star for Annelis as of 2026-05-20) */
  rating: 5
  /** Spanish text rendered in the UI */
  body: string
  /** ISO 639-1 code of the *original* review language ('es' or 'en') */
  originalLanguage: 'es' | 'en'
}

export const googleReviewsMeta = {
  /** Knowledge Graph machine ID of the GBP entity */
  kgmid: '/g/11rxnxcsv2',
  /** Canonical Google URL for the business profile */
  profileUrl: 'https://www.google.com/search?kgmid=%2Fg%2F11rxnxcsv2',
  /** Public share link Annelis provided */
  shareUrl: 'https://share.google/X8SyAdXmwMzDwlZ6O',
} as const

/** Sorted newest first */
export const googleReviews: GoogleReview[] = [
  {
    id: 'elizabeth-n-2025-09',
    fullName: 'Elizabeth Nunez',
    displayName: 'Elizabeth N.',
    datePublished: '2025-09-01',
    rating: 5,
    body: 'La experiencia de comprar mi casa fue maravillosa y rápida. El profesionalismo de Annelis fue increíble. Recomiendo sus servicios 200%.',
    originalLanguage: 'en',
  },
  {
    id: 'eric-g-2025-07',
    fullName: 'Eric Guzman',
    displayName: 'Eric G.',
    datePublished: '2025-07-15',
    rating: 5,
    body: 'Seré breve y directo: sin Annelis, todavía estaríamos pagando renta. Le expreso mi más profunda gratitud por todo. No solo hay dedicación, también profesionalismo en su mejor expresión. Gracias Annelis por llevarnos a nuestra casa.',
    originalLanguage: 'en',
  },
  {
    id: 'jorge-r-2025-05',
    fullName: 'Jorge David Rodríguez Mejil',
    displayName: 'Jorge R.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'La experiencia y la forma en que se manejó el caso fueron espectaculares, especialmente cómo facilitaron todo.',
    originalLanguage: 'en',
  },
  {
    id: 'eldonia-g-2025-05',
    fullName: 'Eldonia Gonzalez',
    displayName: 'Eldonia G.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Annelis Ortiz fue la mejor para trabajar con nosotros, hizo todo súper fácil. ¡Gracias por todo lo que haces!',
    originalLanguage: 'en',
  },
  {
    id: 'abel-r-2025-05',
    fullName: 'Abel Rivas',
    displayName: 'Abel R.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Annelis fue extremadamente útil, trabajó con nosotros durante todo el proceso, respondió todas nuestras preguntas, el seguimiento fue de primera, muy conocedora del proceso. La recomiendo a cualquiera. Gran experiencia. 👍',
    originalLanguage: 'en',
  },
  {
    id: 'melissa-d-2025-05',
    fullName: 'Melissa De la Torre',
    displayName: 'Melissa D.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Excelente experiencia. Trabajar con Annelis Ortiz fue una experiencia agradable. Desde el inicio, demostró un compromiso excepcional con mi caso. Annelis se tomó el tiempo necesario para guiarme y asegurarse de que entendiera todo el proceso. Su rapidez para responder preguntas y su atención al detalle fueron realmente impresionantes. Lo que más puedo resaltar fue su disposición para ir más allá de lo esperado, manteniéndome informada durante todo el proceso. Recomendaría a Annelis Ortiz a cualquiera que busque un financiamiento confiable, transparente y eficiente. ¡Gracias por hacer este proceso tan sencillo y exitoso, y por ser parte de uno de nuestros más grandes sueños!',
    originalLanguage: 'es',
  },
  {
    id: 'sara-m-2025-05',
    fullName: 'Sara Maresma Juviel',
    displayName: 'Sara M.',
    datePublished: '2025-05-01',
    rating: 5,
    body: 'Muy profesional en sus servicios. Nos acompañó en todo el proceso de compra de nuestra primera casita. Siempre pendiente a nuestras dudas y dispuesta a ayudarnos con sus mejores consejos. La recomendamos 100%.',
    originalLanguage: 'es',
  },
  {
    id: 'cliente-verificado-2024-05',
    fullName: 'Cliente verificado',
    displayName: 'Cliente verificado',
    datePublished: '2024-05-01',
    rating: 5,
    body: 'Después de seis meses comparando opciones, por mucho la tasa de interés más competitiva (por más de 2 puntos). Además, Annelis hizo la diferencia. Comunicación súper efectiva (disponible 24/7). Cuando eres comprador por primera vez, eso marca la diferencia. Mil gracias a Annelis y a su equipo: hicieron de una experiencia estresante un placer.',
    originalLanguage: 'en',
  },
  {
    id: 'omar-s-2023-05',
    fullName: 'Omar Santiago',
    displayName: 'Omar S.',
    datePublished: '2023-05-01',
    rating: 5,
    body: '¡¡Simplemente los mejores!! Atentos y profesionales.',
    originalLanguage: 'en',
  },
  {
    id: 'alfredo-g-2023-05',
    fullName: 'Alfredo Gomez',
    displayName: 'Alfredo G.',
    datePublished: '2023-05-01',
    rating: 5,
    body: 'Excelente servicio. Recomendado 💯',
    originalLanguage: 'en',
  },
  {
    id: 'evelin-f-2023-05',
    fullName: 'Evelin Farias',
    displayName: 'Evelin F.',
    datePublished: '2023-05-01',
    rating: 5,
    body: 'Annelis es una excelente persona y profesional. En mi caso ella gestionó el refinanciamiento de mi casa y siempre estuvo atenta a brindarme las mejores opciones. Me sentí completamente en confianza con sus recomendaciones, pues siempre tomó en cuenta mis necesidades y planteamientos. Sin duda la recomiendo ampliamente: con ella están en muy buenas manos.',
    originalLanguage: 'es',
  },
  {
    id: 'luis-m-2023-05',
    fullName: 'Luis Omar Menjivar Guevara',
    displayName: 'Luis M.',
    datePublished: '2023-05-01',
    rating: 5,
    body: 'En mi experiencia, Annelis y su equipo son los mejores: rápidos y eficaces. Agradezco mucho toda la ayuda. Los recomiendo 100%.',
    originalLanguage: 'es',
  },
  {
    id: 'anthony-w-2022-05',
    fullName: 'Anthony Williams',
    displayName: 'Anthony W.',
    datePublished: '2022-05-01',
    rating: 5,
    body: '¡¡¡Excelente servicio!!! Aspectos positivos: capacidad de respuesta, calidad.',
    originalLanguage: 'en',
  },
]

/** Aggregate stats for Schema.org AggregateRating. */
export const googleReviewsAggregate = {
  ratingValue: 5,
  reviewCount: googleReviews.length,
  bestRating: 5,
  worstRating: 1,
} as const
