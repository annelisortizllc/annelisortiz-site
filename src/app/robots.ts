import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  // Allow all AI crawlers explicitly (DAB Fase 1 + Fase 6 checklist).
  const aiBots = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-User',
    'Claude-SearchBot',
    'Anthropic-AI',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Cohere-AI',
    'CCBot',
    'Bytespider',
    'Meta-ExternalAgent',
    'Applebot-Extended',
  ]

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
