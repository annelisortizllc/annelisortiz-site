export type BlogSection =
  | { type: 'heading'; level: 2 | 3; text: string; id?: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'callout'; tone?: 'info' | 'warning' | 'highlight'; title?: string; text: string }
  | { type: 'quote'; text: string; cite?: string }

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  readingTimeMin: number
  keywords: string[]
  category: string
  intro: string
  sections: BlogSection[]
  faq: { question: string; answer: string }[]
  relatedSlugs?: string[]
}
