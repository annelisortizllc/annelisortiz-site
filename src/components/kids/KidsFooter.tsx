import Image from 'next/image'
import Link from 'next/link'

// Kids-brand footer — los 5 héroes despidiéndose + tagline final.
const heroes = [
  { name: 'Coco', image: '/kids/personajes/coco.png', bg: 'rgba(255, 201, 60, 0.18)' },
  { name: 'Lucy', image: '/kids/personajes/lucy.png', bg: 'rgba(255, 122, 162, 0.18)' },
  { name: 'Centavito', image: '/kids/personajes/centavito.png', bg: 'rgba(255, 154, 77, 0.18)' },
  { name: 'Doña Moneda', image: '/kids/personajes/dona-moneda.png', bg: 'rgba(242, 183, 54, 0.18)' },
  { name: 'Gastón', image: '/kids/personajes/gaston.png', bg: 'rgba(200, 162, 255, 0.20)' },
]

export function KidsFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--kids-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Heroes despidiéndose */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {heroes.map((h) => (
            <div key={h.name} className="flex flex-col items-center gap-2">
              <div
                className="relative h-24 w-24 overflow-hidden rounded-full shadow-md transition-transform hover:scale-110 hover:-rotate-6"
                style={{ backgroundColor: h.bg }}
              >
                <Image
                  src={h.image}
                  alt={`${h.name} despidiéndose`}
                  fill
                  sizes="96px"
                  className="object-contain p-1"
                />
              </div>
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
