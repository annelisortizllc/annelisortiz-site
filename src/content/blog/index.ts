import 'server-only'
import { post as preparacionCrediticia } from './preparacion-crediticia-antes-de-hipoteca'
import { post as primeraVivienda } from './primera-vivienda-en-estados-unidos'
import { post as fhaVsConvencional } from './fha-vs-convencional-2026'
import type { BlogPost } from './types'

const POSTS: BlogPost[] = [primeraVivienda, preparacionCrediticia, fhaVsConvencional]

export function listBlogPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getBlogPost(slug: string): BlogPost | null {
  return POSTS.find((p) => p.slug === slug) ?? null
}

export function blogSlugs(): string[] {
  return POSTS.map((p) => p.slug)
}
