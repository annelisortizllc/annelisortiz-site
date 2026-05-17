import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

const routes = ['', '/sobre-mi', '/libros', '/libros/antes-de-decidir', '/conferencias', '/prensa', '/blog'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '' ? 1 : 0.7,
  }))
}
