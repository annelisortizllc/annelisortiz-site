import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { listBlogPosts, pickContent } from '@/content/blog'

const staticRoutes = ['', '/sobre-mi', '/servicios', '/libros', '/libros/antes-de-decidir', '/conferencias', '/blog'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.flatMap((path) => {
    const isHome = path === ''
    return [
      {
        url: `${site.url}${path}`,
        lastModified: now,
        changeFrequency: isHome ? ('weekly' as const) : ('monthly' as const),
        priority: isHome ? 1 : 0.7,
        alternates: {
          languages: {
            'es-ES': `${site.url}${path}`,
            'en-US': `${site.url}/en${path}`,
          },
        },
      },
      {
        url: `${site.url}/en${path}`,
        lastModified: now,
        changeFrequency: isHome ? ('weekly' as const) : ('monthly' as const),
        priority: isHome ? 1 : 0.7,
        alternates: {
          languages: {
            'es-ES': `${site.url}${path}`,
            'en-US': `${site.url}/en${path}`,
          },
        },
      },
    ]
  })

  // Blog posts — each post can appear in ES (always) and EN (when translated).
  // hreflang alternates point to the partner slug per post.
  const blogEntries = listBlogPosts('es').flatMap((post) => {
    const es = pickContent(post, 'es')
    const enSlug = post.en?.slug
    const lastModified = new Date(post.updatedAt ?? post.publishedAt)
    const esAlternates = enSlug
      ? {
          languages: {
            'es-ES': `${site.url}/blog/${es.slug}`,
            'en-US': `${site.url}/en/blog/${enSlug}`,
          },
        }
      : undefined
    const entries: MetadataRoute.Sitemap = [
      {
        url: `${site.url}/blog/${es.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        ...(esAlternates ? { alternates: esAlternates } : {}),
      },
    ]
    if (enSlug) {
      entries.push({
        url: `${site.url}/en/blog/${enSlug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: {
            'es-ES': `${site.url}/blog/${es.slug}`,
            'en-US': `${site.url}/en/blog/${enSlug}`,
          },
        },
      })
    }
    return entries
  })

  // Lead magnet pairs — ES y EN no comparten path, listadas explícitamente.
  const leadMagnetPairs: { es: string; en: string; priority: number }[] = [
    { es: '/preparate', en: '/en/get-ready', priority: 0.9 },
    {
      es: '/recurso/checklist-preparacion',
      en: '/en/resource/preparation-checklist',
      priority: 0.8,
    },
  ]
  const leadMagnetEntries = leadMagnetPairs.flatMap((p) => [
    {
      url: `${site.url}${p.es}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
      alternates: {
        languages: {
          'es-ES': `${site.url}${p.es}`,
          'en-US': `${site.url}${p.en}`,
        },
      },
    },
    {
      url: `${site.url}${p.en}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
      alternates: {
        languages: {
          'es-ES': `${site.url}${p.es}`,
          'en-US': `${site.url}${p.en}`,
        },
      },
    },
  ])

  // Solo existen en español — sin alternates para no apuntar a un /en/ que da 404.
  const pequenosHeroesEntries = [
    {
      url: `${site.url}/pequenos-heroes`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${site.url}/pequenos-heroes/club`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return [...staticEntries, ...blogEntries, ...leadMagnetEntries, ...pequenosHeroesEntries]
}
