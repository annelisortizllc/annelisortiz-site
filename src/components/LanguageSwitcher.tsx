'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, type Locale } from '@/lib/locales'

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || `/${current}`

  const swap = (target: Locale) => {
    // Replace the first segment if it's a locale; otherwise prepend.
    const parts = pathname.split('/').filter(Boolean)
    if (parts.length === 0) return `/${target}`
    if ((locales as readonly string[]).includes(parts[0])) parts[0] = target
    else parts.unshift(target)
    return `/${parts.join('/')}`
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-background-elev-1/60 p-1 text-xs">
      {locales.map((loc) => {
        const active = loc === current
        return (
          <Link
            key={loc}
            href={swap(loc)}
            aria-current={active ? 'true' : undefined}
            className={`rounded-full px-2.5 py-1 font-medium uppercase tracking-wider transition ${
              active
                ? 'bg-accent text-on-accent'
                : 'text-muted hover:text-foreground'
            }`}
          >
            {loc}
          </Link>
        )
      })}
    </div>
  )
}
