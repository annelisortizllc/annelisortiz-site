import 'server-only'
import { post as preparacionCrediticia } from './preparacion-crediticia-antes-de-hipoteca'
import { post as primeraVivienda } from './primera-vivienda-en-estados-unidos'
import { post as fhaVsConvencional } from './fha-vs-convencional-2026'
import { post as downPayment } from './down-payment-cuanto-necesitas'
import { post as creditScore90 } from './subir-credit-score-90-dias'
import type { BlogPost } from './types'

const POSTS: BlogPost[] = [
  primeraVivienda,
  preparacionCrediticia,
  fhaVsConvencional,
  downPayment,
  creditScore90,
]

export function listBlogPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getBlogPost(slug: string): BlogPost | null {
  return POSTS.find((p) => p.slug === slug) ?? null
}

export function blogSlugs(): string[] {
  return POSTS.map((p) => p.slug)
}
