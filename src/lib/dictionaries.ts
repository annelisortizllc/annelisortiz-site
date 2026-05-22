import 'server-only'

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export function isLocale(value: string | undefined | null): value is Locale {
  return value != null && (locales as readonly string[]).includes(value)
}

const dictionaries = {
  es: () => import('@/content/dictionaries/es.json').then((m) => m.default),
  en: () => import('@/content/dictionaries/en.json').then((m) => m.default),
}

export const getDictionary = async (locale: Locale = defaultLocale) => dictionaries[locale]()

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
