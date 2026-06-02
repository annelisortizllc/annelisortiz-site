import 'server-only'
import { post as preparacionCrediticia } from './preparacion-crediticia-antes-de-hipoteca'
import { post as primeraVivienda } from './primera-vivienda-en-estados-unidos'
import { post as fhaVsConvencional } from './fha-vs-convencional-2026'
import { post as downPayment } from './down-payment-cuanto-necesitas'
import { post as creditScore90 } from './subir-credit-score-90-dias'
import type { BlogPost, LocalizedContent } from './types'

export type Locale = 'es' | 'en'

const POSTS: BlogPost[] = [
  primeraVivienda,
  preparacionCrediticia,
  fhaVsConvencional,
  downPayment,
  creditScore90,
]

// Returns the localized half of a post for a given locale, falling back
// to Spanish if the English translation hasn't landed yet.
export function pickContent(post: BlogPost, locale: Locale): LocalizedContent {
  return locale === 'en' && post.en ? post.en : post.es
}

// Lists posts that have content for the locale, sorted by publish date desc.
// In Spanish every post is available; in English only those with an `en` block.
export function listBlogPosts(locale: Locale = 'es'): BlogPost[] {
  return POSTS.filter((p) => locale === 'es' || p.en).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  )
}

// Resolves a post by its locale-specific slug.
export function getBlogPost(slug: string, locale: Locale = 'es'): BlogPost | null {
  return (
    POSTS.find((p) =>
      locale === 'es' ? p.es.slug === slug : p.en?.slug === slug,
    ) ?? null
  )
}

export function blogSlugs(locale: Locale = 'es'): string[] {
  return POSTS.filter((p) => locale === 'es' || p.en).map((p) =>
    locale === 'es' ? p.es.slug : p.en!.slug,
  )
}

// Looks up a post by its ES (canonical) slug — used to resolve
// `relatedSlugs` entries regardless of which locale we're rendering.
export function getBlogPostByEsSlug(esSlug: string): BlogPost | null {
  return POSTS.find((p) => p.es.slug === esSlug) ?? null
}

// Returns the alternate-locale slug for hreflang links, or null if the
// post hasn't been translated yet.
export function getAlternateSlug(
  post: BlogPost,
  toLocale: Locale,
): string | null {
  if (toLocale === 'es') return post.es.slug
  return post.en?.slug ?? null
}
