import Link from 'next/link'

// Kids-brand footer — characters waving goodbye + closing tagline.
// Placeholder character icons (emoji) will be replaced when illustrations
// are ready. See PR description for the asset checklist.
const heroes = [
  { name: 'Coco', icon: '🌟', color: 'var(--kids-yellow)' },
  { name: 'Lucy', icon: '🐷', color: 'var(--kids-coral)' },
  { name: 'Centavito', icon: '🐶', color: 'var(--kids-mango)' },
  { name: 'Doña Moneda', icon: '🪙', color: 'var(--kids-gold)' },
  { name: 'Gastón', icon: '💜', color: 'var(--kids-lavender)' },
]

export function KidsFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--kids-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Heroes despidiéndose */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {heroes.map((h) => (
            <div key={h.name} className="flex flex-col items-center gap-2">
              <span
                aria-hidden
                className="inline-flex h-16 w-16 items-center justify-center rounded-full text-3xl shadow-md transition-transform hover:scale-110"
                style={{ backgroundColor: h.color }}
              >
                {h.icon}
              </span>
              <span
                className="text-xs font-semibold text-foreground"
                style={{ fontFamily: 'var(--font-kids-title)' }}
              >
                {h.name}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline final */}
        <p
          className="mx-auto mt-12 max-w-2xl text-center text-lg italic leading-relaxed text-foreground/80"
          style={{ fontFamily: 'var(--font-kids-body)' }}
        >
          &ldquo;La educación financiera no comienza con el primer salario. Comienza con
          la primera conversación en casa.&rdquo;
        </p>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] md:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/pequenos-heroes" className="transition hover:text-[var(--kids-coral)]">
              Inicio
            </Link>
            <Link href="/pequenos-heroes/club" className="transition hover:text-[var(--kids-coral)]">
              Club
            </Link>
            <Link
              href="/pequenos-heroes/regalo"
              className="transition hover:text-[var(--kids-coral)]"
            >
              Regalo gratis
            </Link>
            <Link href="/" className="transition hover:text-[var(--kids-coral)]">
              Sobre la autora
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} Annelis Ortiz · Pequeños Héroes del Dinero
          </p>
        </div>
      </div>
    </footer>
  )
}
