import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { locales } from '@/lib/dictionaries'

const routes = ['', '/sobre-mi', '/libros', '/conferencias', '/prensa', '/blog'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return locales.flatMap((lang) =>
    routes.map((path) => {
      const url = `${site.url}/${lang}${path}`
      const alternates = Object.fromEntries(
        locales.map((l) => [l, `${site.url}/${l}${path}`]),
      )
      return {
        url,
        lastModified: now,
        changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
        priority: path === '' ? 1 : 0.7,
        alternates: { languages: alternates },
      }
    }),
  )
}
