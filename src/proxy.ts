import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Locale proxy (Next.js 16 middleware).
 *
 * ESPAÑOL ES EL DEFAULT. Punto. Un visitante sin cookie ve el sitio en
 * español, sin importar cómo tenga configurado el navegador.
 *
 * Antes esto miraba el header `Accept-Language`, y el resultado era que un
 * cliente hispanohablante con la computadora en inglés — que en Estados
 * Unidos es la mayoría — aterrizaba en el sitio en inglés. Justo al revés
 * de la audiencia de Annelis.
 *
 * Comportamiento:
 *  - Sin cookie → no redirigimos nunca. Cada URL sirve su propio idioma:
 *    `/sobre-mi` en español, `/en/about` en inglés. Un enlace compartido
 *    siempre abre en el idioma en que se compartió.
 *  - Con cookie (o sea, el visitante tocó el selector) → respetamos su
 *    elección y lo llevamos al espejo del idioma que escogió.
 *  - El matcher excluye API, admin, internos de Next y estáticos.
 *  - Escribir la cookie es responsabilidad de <LocaleToggle>. El proxy
 *    solo la lee.
 */

const PREFERRED_COOKIE = 'NEXT_LOCALE'

/**
 * Match search engine and AI crawlers so we never auto-redirect them based on
 * Accept-Language. Bots typically send `Accept-Language: en`, which previously
 * caused Googlebot crawling `/sobre-mi` to be 30x'd to `/en/sobre-mi` — the
 * ES versions then surfaced in Google Search Console as "Page with redirect"
 * and never got indexed. Letting bots see each URL as-is means Google indexes
 * both languages independently and uses our hreflang tags to relate them.
 *
 * Patterns are lowercased and matched against the UA's lowercase form.
 */
const BOT_UA_PATTERNS = [
  'googlebot',        // Google Search
  'bingbot',          // Bing
  'duckduckbot',      // DuckDuckGo
  'yandexbot',        // Yandex
  'baiduspider',      // Baidu
  'applebot',         // Apple/Siri
  'gptbot',           // OpenAI training crawler
  'chatgpt-user',     // ChatGPT browsing
  'oai-searchbot',    // OpenAI SearchGPT
  'claudebot',        // Anthropic training crawler
  'claude-user',      // Claude tool-using crawler
  'claude-searchbot', // Claude search
  'anthropic-ai',     // Anthropic generic
  'perplexitybot',    // Perplexity training
  'perplexity-user',  // Perplexity browsing
  'cohere-ai',        // Cohere
  'ccbot',            // Common Crawl
  'bytespider',       // ByteDance / TikTok
  'meta-externalagent', // Meta
] as const

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false
  const ua = userAgent.toLowerCase()
  for (const pattern of BOT_UA_PATTERNS) {
    if (ua.includes(pattern)) return true
  }
  // Generic fallback for anything self-identifying as a bot/crawler/spider.
  return /\b(bot|crawler|spider)\b/.test(ua)
}

/** El sitio abre en español mientras el visitante no diga lo contrario. */
const DEFAULT_LOCALE = 'es' as const

export function proxy(request: NextRequest) {
  // Bots: never auto-redirect. They get whatever URL they asked for and we
  // rely on hreflang tags in the page metadata to relate ES ↔ EN versions.
  // This is critical for SEO — Googlebot's default Accept-Language is `en`,
  // so without this check Google sees every Spanish URL as a 30x redirect.
  if (isBot(request.headers.get('user-agent'))) {
    return NextResponse.next()
  }

  const { pathname, search } = request.nextUrl

  // The /pequenos-heroes section is a Spanish-only brand (Pequeños Héroes
  // del Dinero — children's book). There is no /en/ mirror by design.
  // Skip locale auto-detection so English-preferring browsers don't get
  // redirected to /en/pequenos-heroes (which 404s).
  if (pathname.startsWith('/pequenos-heroes')) {
    return NextResponse.next()
  }
  const cookieLocale = request.cookies.get(PREFERRED_COOKIE)?.value as
    | 'es'
    | 'en'
    | undefined

  const isEnglishPath = pathname === '/en' || pathname.startsWith('/en/')

  // La cookie solo existe si el visitante tocó el selector. Sin cookie,
  // español — nunca adivinamos a partir del navegador.
  const desiredLocale: 'es' | 'en' =
    cookieLocale === 'en' || cookieLocale === 'es'
      ? cookieLocale
      : DEFAULT_LOCALE

  // If the visitor is on a Spanish path but wants English, send them to /en.
  if (!isEnglishPath && desiredLocale === 'en') {
    const target = new URL(
      `/en${pathname === '/' ? '' : pathname}${search}`,
      request.url,
    )
    return NextResponse.redirect(target)
  }

  // If they're on an English path but the cookie says Spanish, strip `/en`.
  // (We trust the cookie over the URL here; deep-link sharers can still
  // override by clicking the toggle.)
  if (isEnglishPath && cookieLocale === 'es') {
    const stripped = pathname === '/en' ? '/' : pathname.slice(3) || '/'
    const target = new URL(`${stripped}${search}`, request.url)
    return NextResponse.redirect(target)
  }

  return NextResponse.next()
}

export const config = {
  // Run on everything EXCEPT api routes, admin, Next internals, and static
  // assets. The double-negation matcher pattern is the canonical Next.js
  // way to express "all pages but not these system paths".
  matcher: [
    '/((?!api|admin|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?)$).*)',
  ],
}
