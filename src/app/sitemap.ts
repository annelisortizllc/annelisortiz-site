import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { listBlogPosts } from '@/content/blog'

const staticRoutes = ['', '/sobre-mi', '/libros', '/libros/antes-de-decidir', '/conferencias', '/prensa', '/blog'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
    priority: path === '' ? 1 : 0.7,
  }))

  const blogEntries = listBlogPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticEntries, ...blogEntries]
}
