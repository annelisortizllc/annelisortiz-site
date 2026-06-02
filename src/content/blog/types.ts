export type BlogSection =
  | { type: 'heading'; level: 2 | 3; text: string; id?: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'callout'; tone?: 'info' | 'warning' | 'highlight'; title?: string; text: string }
  | { type: 'quote'; text: string; cite?: string }

/**
 * One language-specific version of a post. Each locale has its OWN slug
 * (translated for SEO) plus all the content fields.
 */
export interface LocalizedContent {
  slug: string
  title: string
  description: string
  category: string
  keywords: string[]
  intro: string
  sections: BlogSection[]
  faq: { question: string; answer: string }[]
}

/**
 * A post holds shared metadata (dates, reading time) plus two localized
 * versions. `es` is always present (canonical). `en` is optional and added
 * when a translation lands.
 *
 * Related posts are referenced by ES slug (canonical). The blog index
 * resolves them to the right locale at render time.
 */
export interface BlogPost {
  publishedAt: string
  updatedAt?: string
  readingTimeMin: number
  relatedSlugs?: string[]
  es: LocalizedContent
  en?: LocalizedContent
}
