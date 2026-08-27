// Helpers de idioma compartidos por Header, MobileNav y LocaleToggle.
// Antes estaban duplicados en cada componente; cualquier ajuste a la lógica
// de swap había que hacerlo en dos lugares y era cuestión de tiempo que se
// desincronizaran.

export type Locale = 'es' | 'en'

/** El idioma sale de la URL: "/en/..." → en, cualquier otra cosa → es. */
export function detectLocale(pathname: string | null): Locale {
  return pathname?.startsWith('/en') ? 'en' : 'es'
}

/**
 * Guarda la elección MANUAL del visitante en una cookie.
 *
 * El proxy solo lee esta cookie, nunca la escribe. Y como el default del sitio
 * es español, la existencia de la cookie significa exactamente una cosa: el
 * visitante tocó el selector. Eso es lo que la hace segura de respetar.
 */
export function rememberLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  // 1 año, path raíz, samesite lax — funciona en preview y en producción.
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=lax`
}

/** Devuelve la ruta equivalente en el otro idioma, conservando el resto. */
export function swapLocale(pathname: string | null, target: Locale): string {
  const p = pathname ?? '/'
  if (target === 'en') {
    if (p === '/' || p === '') return '/en'
    if (p.startsWith('/en')) return p
    return `/en${p}`
  }
  // target === 'es' — quitar el prefijo /en
  if (p === '/en' || p === '/en/') return '/'
  if (p.startsWith('/en/')) return p.slice(3)
  return p
}
