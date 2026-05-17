import 'server-only'
import type { Locale } from '@/lib/locales'

const dictionaries = {
  es: () => import('@/content/dictionaries/es.json').then((m) => m.default),
  en: () => import('@/content/dictionaries/en.json').then((m) => m.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

// Re-export for ergonomics; safe because this whole module is server-only.
export { locales, defaultLocale, hasLocale, type Locale } from '@/lib/locales'
