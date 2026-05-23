import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { listBlogPosts } from '@/content/blog'

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

  // Blog posts are Spanish-only for now; /en/blog index links back to /blog.
  const blogEntries = listBlogPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...blogEntries]
}
