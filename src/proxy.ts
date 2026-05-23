import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Locale auto-detection proxy (Next.js 16 middleware).
 *
 * Behavior:
 *  - When a visitor lands on a Spanish (root) URL we check the `NEXT_LOCALE`
 *    cookie first. If they previously chose EN, we redirect them to the EN
 *    mirror of the same path. If they explicitly chose ES, we leave them
 *    alone.
 *  - With no cookie set, we fall back to the browser's `Accept-Language`
 *    header. If it prefers English, we redirect to the EN mirror.
 *  - For EN paths we apply the inverse: if the cookie says ES (user later
 *    chose Spanish), we strip the `/en` prefix.
 *  - The matcher excludes API routes, admin, Next internals, and static
 *    assets so this only ever touches public content pages.
 *  - Setting the cookie is the responsibility of the language toggle in the
 *    Header / MobileNav (client components). The proxy itself never writes
 *    the cookie — it only reads it.
 */

const PREFERRED_COOKIE = 'NEXT_LOCALE'

/** Pull the best-matching locale from an Accept-Language header. */
function preferredLocale(acceptLanguage: string | null): 'es' | 'en' {
  if (!acceptLanguage) return 'es'
  // Parse `en-US,en;q=0.9,es;q=0.7` → take the first language tag.
  const first = acceptLanguage.split(',')[0]?.trim().toLowerCase() ?? ''
  if (first.startsWith('en')) return 'en'
  return 'es'
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const cookieLocale = request.cookies.get(PREFERRED_COOKIE)?.value as
    | 'es'
    | 'en'
    | undefined

  const isEnglishPath = pathname === '/en' || pathname.startsWith('/en/')

  // Decide the desired locale: explicit cookie wins; otherwise the browser.
  const desiredLocale: 'es' | 'en' =
    cookieLocale === 'en' || cookieLocale === 'es'
      ? cookieLocale
      : preferredLocale(request.headers.get('accept-language'))

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
