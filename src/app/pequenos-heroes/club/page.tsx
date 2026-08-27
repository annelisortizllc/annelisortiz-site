import type { Metadata } from 'next'
import Link from 'next/link'
import { ClubForm } from '@/components/kids/ClubForm'
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript } from '@/lib/jsonld'
import { site } from '@/lib/site'

// ─────────────────────────────────────────────────────────────
// Club Pequeños Héroes del Dinero — registro gratis.
// Estaba enlazado desde la landing, el header y el footer, pero
// la ruta no existía (404 en producción). Esta página cierra el
// hueco y conecta el registro con GoHighLevel.
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Club Pequeños Héroes — actividades de dinero para tus hijos, gratis',
  description:
    'Únete gratis al Club Pequeños Héroes del Dinero: actividades nuevas cada mes, material descargable y retos familiares para enseñarle a tus hijos sobre el dinero, jugando.',
  alternates: {
    canonical: `${site.url}/pequenos-heroes/club`,
  },
  openGraph: {
    type: 'website',
    title: 'Club Pequeños Héroes del Dinero — únete gratis',
    description:
      'Actividades nuevas cada mes, material descargable y retos familiares. Gratis, sin tarjeta.',
    url: `${site.url}/pequenos-heroes/club`,
    locale: 'es_ES',
  },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Pequeños Héroes del Dinero', path: '/pequenos-heroes' },
  { name: 'Club', path: '/pequenos-heroes/club' },
]

const benefits = [
  {
    icon: '🎨',
    title: 'Actividades nuevas cada mes',
    body: 'Hojas para imprimir con laberintos, juegos de monedas y retos de ahorro — listas para la mesa del comedor.',
    color: 'var(--kids-coral)',
  },
  {
    icon: '📥',
    title: 'Material descargable',
    body: 'PDFs que imprimes en casa las veces que quieras. Sin apps, sin pantallas, sin complicaciones.',
    color: 'var(--kids-sky)',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Retos familiares',
    body: 'Actividades cortas para hacer juntos y abrir la conversación del dinero sin que parezca un sermón.',
    color: 'var(--kids-mint)',
  },
  {
    icon: '💬',
    title: 'Guías para papás',
    body: 'Qué decir y cómo decirlo según la edad de tu hijo. Yo te doy las palabras; tú pones el momento.',
    color: 'var(--kids-lavender)',
  },
  {
    icon: '⭐',
    title: 'Recursos exclusivos',
    body: 'Primero en enterarte de nuevos libros, talleres y descargas — antes que en redes sociales.',
    color: 'var(--kids-gold)',
  },
  {
    icon: '🏆',
    title: 'Premios y sorteos',
    body: 'Sorteos de libros firmados y reconocimientos para los pequeños héroes que completan los retos.',
    color: 'var(--kids-mango)',
  },
]

const steps = [
  {
    n: '1',
    title: 'Te registras',
    body: 'Nombre y correo. Toma quince segundos y no pedimos tarjeta.',
  },
  {
    n: '2',
    title: 'Recibes la bienvenida',
    body: 'Un correo con la primera actividad para imprimir hoy mismo.',
  },
  {
    n: '3',
    title: 'Cada mes, algo nuevo',
    body: 'Material fresco en tu correo. Si un mes no puedes, no pasa nada — se queda ahí.',
  },
]

const faqs = [
  {
    question: '¿El Club realmente es gratis?',
    answer:
      'Sí. No pedimos tarjeta ni hay cobro después. Creé el Club para que la educación financiera llegue a la mayor cantidad de familias posible.',
  },
  {
    question: '¿Para qué edades sirve el material?',
    answer:
      'El material está pensado para niños de 5 a 10 años. Al registrarte puedes indicar la edad de tu hijo o hija y te envío las actividades del nivel que le corresponde.',
  },
  {
    question: '¿Necesito haber comprado el libro?',
    answer:
      'No. El Club funciona por su cuenta. Si ya tienes "Pequeños Héroes del Dinero", el material del Club lo complementa con actividades nuevas que no están en el libro.',
  },
  {
    question: '¿Cada cuánto me van a escribir?',
    answer:
      'Una vez al mes con el material nuevo, y de vez en cuando algo extra si lanzo un recurso o un taller. Nada de correos diarios.',
  },
  {
    question: '¿Puedo salirme del Club?',
    answer:
      'Cuando quieras. Cada correo trae un enlace para darte de baja con un solo clic, sin preguntas ni formularios.',
  },
  {
    question: '¿Qué hacen con mi correo?',
    answer:
      'Se usa únicamente para enviarte el material del Club. No vendemos ni compartimos tu información con terceros.',
  },
]

export default function ClubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))}
      />

      {/* ───── HERO + FORMULARIO ───── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(107, 203, 255, 0.20) 0%, rgba(155, 231, 196, 0.20) 55%, rgba(255, 201, 60, 0.20) 100%)',
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-kids-coral/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-kids-lavender/25 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:py-24">
          <div>
            <p
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              <span aria-hidden>⭐</span>
              Gratis · sin tarjeta
            </p>

            <h1
              className="mt-6 text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl"
              style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
            >
              Club Pequeños <br />
              <span className="text-[var(--kids-coral)]">Héroes del Dinero</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              Cada mes te mando actividades, material para imprimir y retos
              familiares para que tus hijos aprendan del dinero{' '}
              <strong className="text-foreground">jugando</strong> — no con
              sermones.
            </p>

            <ul className="mt-8 space-y-2.5 text-base text-foreground/75">
              {[
                'Nada que instalar: llega a tu correo y lo imprimes',
                'Hecho para niños de 5 a 10 años',
                'Escrito en español, por una mamá',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span aria-hidden className="mt-0.5 text-[var(--kids-mint)]">
                    ✔
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="registro" className="scroll-mt-24">
            <ClubForm locale="es" />
          </div>
        </div>
      </section>

      {/* ───── QUÉ RECIBES ───── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-coral)]"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Qué recibes
          </p>
          <h2
            className="mx-auto mt-3 max-w-2xl text-4xl leading-tight text-foreground md:text-5xl"
            style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
          >
            Todo lo que llega a tu correo
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-[24px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span
                aria-hidden
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                style={{ backgroundColor: `color-mix(in srgb, ${b.color} 20%, transparent)` }}
              >
                {b.icon}
              </span>
              <h3
                className="mt-5 text-lg text-foreground"
                style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 600 }}
              >
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── CÓMO FUNCIONA ───── */}
      <section className="bg-kids-cream/60 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-sky)]"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              Cómo funciona
            </p>
            <h2
              className="mt-3 text-4xl leading-tight text-foreground md:text-5xl"
              style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
            >
              Tres pasos y ya
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <span
                  aria-hidden
                  className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--kids-yellow)] text-2xl text-foreground shadow-md"
                  style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
                >
                  {s.n}
                </span>
                <h3
                  className="mt-5 text-xl text-foreground"
                  style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 600 }}
                >
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-foreground/75">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PREGUNTAS ───── */}
      <section className="mx-auto max-w-3xl px-6 py-24" data-speakable="faq">
        <h2
          className="text-center text-4xl leading-tight text-foreground md:text-5xl"
          style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
        >
          Preguntas de papás
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-3xl border-2 border-black/[0.06] bg-white p-6 shadow-sm"
            >
              <summary
                className="cursor-pointer list-none text-lg text-foreground marker:hidden"
                style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 600 }}
              >
                <span className="flex items-center justify-between gap-4">
                  {f.question}
                  <span
                    aria-hidden
                    className="shrink-0 text-[var(--kids-coral)] transition group-open:rotate-45"
                  >
                    ✚
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                {f.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ───── CIERRE ───── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-[32px] p-10 text-center text-white shadow-2xl md:p-14"
          style={{
            background:
              'linear-gradient(135deg, var(--kids-coral) 0%, var(--kids-lavender) 100%)',
          }}
        >
          <span aria-hidden className="text-6xl">
            🦸
          </span>
          <h2
            className="mx-auto mt-4 max-w-2xl text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
          >
            Tu hijo puede ser el próximo pequeño héroe
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/90 md:text-lg">
            Los hábitos que aprenda a los siete años lo van a acompañar a los
            treinta. Empieza hoy, gratis.
          </p>
          <Link
            href="#registro"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-foreground shadow-xl transition hover:scale-105 hover:bg-kids-yellow"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Registrarme gratis →
          </Link>
          <p className="mt-6 text-sm text-white/80">
            ¿Prefieres empezar por el libro?{' '}
            <Link
              href="/pequenos-heroes"
              className="font-semibold text-white underline underline-offset-4"
            >
              Ver Pequeños Héroes del Dinero
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
