import Image from 'next/image'
import Link from 'next/link'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { site } from '@/lib/site'

// ─────────────────────────────────────────────────────────────
// Pequeños Héroes del Dinero — landing page
// Fase 1 con placeholders elegantes para la portada y los 5
// personajes. Cuando lleguen las ilustraciones oficiales del libro,
// reemplazar las cards de personajes y la "BookCover" placeholder.
// ─────────────────────────────────────────────────────────────

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Pequeños Héroes del Dinero', path: '/pequenos-heroes' },
]

const heroes = [
  {
    id: 'coco',
    name: 'Coco',
    role: 'el explorador',
    image: '/kids/personajes/coco.png',
    color: 'var(--kids-yellow)',
    bg: 'rgba(255, 201, 60, 0.15)',
    bio: 'El explorador curioso que descubre que cada moneda puede acercarlo a sus sueños.',
  },
  {
    id: 'lucy',
    name: 'Lucy',
    role: 'la alcancía mágica',
    image: '/kids/personajes/lucy.png',
    color: 'var(--kids-coral)',
    bg: 'rgba(255, 122, 162, 0.15)',
    bio: 'La alcancía mágica que enseña que ahorrar es sembrar el futuro.',
  },
  {
    id: 'centavito',
    name: 'Centavito',
    role: 'el mejor amigo',
    image: '/kids/personajes/centavito.png',
    color: 'var(--kids-mango)',
    bg: 'rgba(255, 154, 77, 0.15)',
    bio: 'El mejor amigo de Coco, siempre listo para ayudar y aprender jugando.',
  },
  {
    id: 'dona-moneda',
    name: 'Doña Moneda',
    role: 'la mentora sabia',
    image: '/kids/personajes/dona-moneda.png',
    color: 'var(--kids-gold)',
    bg: 'rgba(242, 183, 54, 0.15)',
    bio: 'La mentora sabia que demuestra que el dinero es una herramienta para construir oportunidades.',
  },
  {
    id: 'gaston',
    name: 'Gastón el Gastador',
    role: 'el monstruito simpático',
    image: '/kids/personajes/gaston.png',
    color: 'var(--kids-lavender)',
    bg: 'rgba(200, 162, 255, 0.18)',
    bio: 'El monstruito simpático que aprende que comprar todo lo que quiere no siempre es la mejor decisión.',
  },
]

const lessons = [
  { icon: '💰', title: 'Qué es el dinero', body: 'Aprenderá de dónde viene y para qué sirve.', color: 'var(--kids-yellow)' },
  { icon: '🐷', title: 'Ahorrar', body: 'Comprenderá el valor de guardar para cumplir metas.', color: 'var(--kids-coral)' },
  { icon: '❤️', title: 'Necesidades vs deseos', body: 'Tomará mejores decisiones.', color: 'var(--kids-sky)' },
  { icon: '🎯', title: 'Crear metas', body: 'Descubrirá cómo convertir sueños en objetivos.', color: 'var(--kids-mint)' },
  { icon: '🤝', title: 'Compartir', body: 'Aprenderá que el dinero también puede ayudar a otras personas.', color: 'var(--kids-lavender)' },
  { icon: '🌱', title: 'Construir hábitos', body: 'Pequeñas acciones que crean grandes resultados.', color: 'var(--kids-mango)' },
]

const activities = [
  { icon: '🌀', label: 'Laberintos' },
  { icon: '⭐', label: 'Une los puntos' },
  { icon: '🎨', label: 'Colorear' },
  { icon: '🔍', label: 'Encuentra diferencias' },
  { icon: '🧩', label: 'Rompecabezas' },
  { icon: '🪙', label: 'Contar monedas' },
  { icon: '🐷', label: 'Diseña tu alcancía' },
  { icon: '📅', label: 'Calendario de ahorro' },
  { icon: '👨‍👩‍👧', label: 'Reto familiar' },
  { icon: '🎓', label: 'Diploma final' },
]

const parentFeatures = [
  { icon: '❤️', title: 'Conversaciones fáciles', body: 'Guías sencillas para hablar de dinero en familia.' },
  { icon: '🎯', title: 'Actividades familiares', body: 'Retos cortos que conectan padres e hijos.' },
  { icon: '📚', title: 'Recursos mensuales', body: 'Material descargable nuevo cada mes en el Club.' },
  { icon: '🌟', title: 'Educación divertida', body: 'Aprender sin sermones, con personajes que enamoran.' },
]

const testimonials = [
  {
    name: 'Karen R.',
    location: 'Orlando, FL',
    rating: 5,
    text: 'Nunca imaginé que mi hijo de seis años comenzara a ahorrar por iniciativa propia. Las páginas de Lucy fueron las que cambiaron todo.',
  },
  {
    name: 'Marisol G.',
    location: 'San Juan, PR',
    rating: 5,
    text: 'Lo leemos cada noche antes de dormir. Mi niña ya sabe diferenciar necesidades y deseos — algo que muchos adultos no logran.',
  },
  {
    name: 'Daniel P.',
    location: 'Houston, TX',
    rating: 5,
    text: 'Como papá no sabía cómo iniciar la conversación de dinero. El libro hizo el trabajo difícil; yo solo tuve que estar presente.',
  },
]

const bookJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  '@id': `${site.url}/pequenos-heroes#book`,
  name: 'Pequeños Héroes del Dinero',
  inLanguage: 'es',
  bookFormat: 'https://schema.org/Paperback',
  author: { '@id': `${site.url}#person` },
  publisher: { '@id': `${site.url}#person` },
  description:
    'Cuentos, juegos y más de 100 actividades para que tus hijos descubran el valor del dinero, las metas y los hábitos que construyen un futuro con propósito.',
  audience: {
    '@type': 'PeopleAudience',
    suggestedMinAge: 5,
    suggestedMaxAge: 10,
    name: 'Niños y niñas en edad escolar (5-10) y sus familias',
  },
  about: ['educación financiera infantil', 'ahorro', 'hábitos financieros', 'metas familiares'],
}

export default function PequenosHeroesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(bookJsonLd)}
      />

      {/* ───── HERO ───── */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(255, 201, 60, 0.18) 0%, rgba(155, 231, 196, 0.18) 50%, rgba(107, 203, 255, 0.18) 100%)',
        }}
      >
        {/* Soft floating shapes */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-10 top-20 h-40 w-40 rounded-full bg-kids-coral/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-kids-sky/30 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          {/* Copy */}
          <div>
            <p
              className="inline-flex items-center gap-2 rounded-full bg-kids-yellow/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              <span aria-hidden>✨</span>
              Educación financiera para niños
            </p>
            <h1
              className="mt-6 text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
            >
              Pequeños Héroes <br />
              <span className="text-[var(--kids-coral)]">del Dinero</span>
            </h1>
            <p
              className="mt-6 max-w-xl text-xl font-semibold text-foreground/85 md:text-2xl"
              style={{ fontFamily: 'var(--font-kids-body)' }}
            >
              Aprende jugando y construye un gran futuro.
            </p>
            <p
              className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
              style={{ fontFamily: 'var(--font-kids-body)' }}
            >
              Los hábitos financieros que tus hijos aprendan hoy pueden acompañarlos toda la
              vida. A través de cuentos, juegos, actividades y personajes inolvidables,
              aprenderán a ahorrar, tomar decisiones inteligentes y construir un futuro
              con propósito.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#comprar"
                className="inline-flex items-center gap-2 rounded-full bg-kids-yellow px-7 py-4 text-base font-semibold text-foreground shadow-lg shadow-kids-yellow/40 transition hover:scale-105 hover:bg-kids-mango hover:text-white"
                style={{ fontFamily: 'var(--font-kids-title)' }}
              >
                🛒 Comprar el libro
              </Link>
              <Link
                href="#muestra"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-white px-7 py-4 text-base font-semibold text-foreground transition hover:border-[var(--kids-coral)] hover:text-[var(--kids-coral)]"
                style={{ fontFamily: 'var(--font-kids-title)' }}
              >
                📖 Ver muestra
              </Link>
            </div>
          </div>

          {/* Portada oficial del libro */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-6 translate-y-8 rounded-[36px] bg-kids-coral/30 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[36px] bg-kids-yellow/20 blur-3xl"
            />
            <Image
              src="/kids/portada-libro.png"
              alt='Portada del libro "Pequeños Héroes del Dinero" — Lucy la alcancía con corona dorada presenta el título'
              width={800}
              height={1000}
              priority
              className="relative h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ───── CONOCE A LOS HÉROES ───── */}
      <section id="heroes" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-coral)]"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Conoce a los héroes
          </p>
          <h2
            className="mt-4 text-4xl text-foreground md:text-5xl"
            style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
          >
            Cinco amigos que enseñan jugando
          </h2>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {heroes.map((h) => (
            <div
              key={h.id}
              className="group relative overflow-hidden rounded-[28px] border border-white bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-40 transition-all group-hover:h-48"
                style={{ background: h.bg }}
              />
              <div className="relative flex flex-col items-center">
                <div className="relative h-36 w-36 transition-transform group-hover:scale-110">
                  <Image
                    src={h.image}
                    alt={`${h.name} — ${h.role}`}
                    fill
                    sizes="144px"
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <h3
                  className="mt-5 text-xl text-foreground"
                  style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 600 }}
                >
                  {h.name}
                </h3>
                <p
                  className="text-xs uppercase tracking-[0.14em] text-foreground/60"
                  style={{ fontFamily: 'var(--font-kids-title)' }}
                >
                  {h.role}
                </p>
                <p
                  className="mt-4 text-center text-sm leading-relaxed text-foreground/80"
                  style={{ fontFamily: 'var(--font-kids-body)' }}
                >
                  {h.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── ¿QUÉ APRENDERÁ TU HIJO? ───── */}
      <section
        id="aprendera"
        style={{ background: 'rgba(255, 248, 231, 0.5)' }}
        className="border-y border-[var(--border)]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-sky)]"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              ¿Qué aprenderá tu hijo?
            </p>
            <h2
              className="mt-4 text-4xl text-foreground md:text-5xl"
              style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
            >
              Seis grandes lecciones para toda la vida
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((l) => (
              <div
                key={l.title}
                className="group rounded-[24px] border border-white bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <span
                  aria-hidden
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-4xl shadow-md transition-transform group-hover:scale-110 group-hover:-rotate-6"
                  style={{ backgroundColor: l.color }}
                >
                  {l.icon}
                </span>
                <h3
                  className="mt-5 text-2xl text-foreground"
                  style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 600 }}
                >
                  {l.title}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed text-foreground/75"
                  style={{ fontFamily: 'var(--font-kids-body)' }}
                >
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ACTIVIDADES ───── */}
      <section id="actividades" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-mint)]"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Actividades
          </p>
          <h2
            className="mt-4 text-4xl text-foreground md:text-5xl"
            style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
          >
            Más de 100 actividades para aprender jugando
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base text-foreground/70"
            style={{ fontFamily: 'var(--font-kids-body)' }}
          >
            Desafíos creativos que convierten el dinero en una aventura.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {activities.map((a) => (
            <div
              key={a.label}
              className="group flex flex-col items-center gap-3 rounded-[20px] border border-white bg-white px-4 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span
                aria-hidden
                className="text-4xl transition-transform group-hover:scale-125"
              >
                {a.icon}
              </span>
              <p
                className="text-sm text-foreground"
                style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 500 }}
              >
                {a.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── PARA LOS PADRES ───── */}
      <section id="padres" className="bg-[var(--kids-cream)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-mango)]"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              Para mamá y papá
            </p>
            <h2
              className="mt-4 text-4xl text-foreground md:text-5xl"
              style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
            >
              No necesitas ser un experto en finanzas
            </h2>
            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg"
              style={{ fontFamily: 'var(--font-kids-body)' }}
            >
              Este libro fue creado para que aprendan juntos mientras crean recuerdos
              inolvidables.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {parentFeatures.map((p) => (
              <div
                key={p.title}
                className="rounded-[24px] bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--kids-sky)]/20 text-3xl"
                >
                  {p.icon}
                </span>
                <h3
                  className="mt-5 text-lg text-foreground"
                  style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 600 }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-foreground/75"
                  style={{ fontFamily: 'var(--font-kids-body)' }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CLUB PREMIUM ───── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div
          className="relative overflow-hidden rounded-[32px] p-10 text-white shadow-2xl md:p-14"
          style={{
            background: 'linear-gradient(135deg, var(--kids-sky) 0%, var(--kids-mint) 100%)',
          }}
        >
          {/* Soft star pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-kids-gold/40 blur-3xl"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <span
                aria-hidden
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-kids-gold text-3xl shadow-md"
              >
                ⭐
              </span>
              <h2
                className="mt-6 text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
              >
                Únete al Club Pequeños Héroes
              </h2>
              <ul
                className="mt-7 space-y-3 text-base md:text-lg"
                style={{ fontFamily: 'var(--font-kids-body)' }}
              >
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-1">✔</span>
                  <span>Actividades nuevas cada mes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-1">✔</span>
                  <span>Material descargable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-1">✔</span>
                  <span>Retos familiares</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-1">✔</span>
                  <span>Recursos exclusivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-1">✔</span>
                  <span>Premios</span>
                </li>
              </ul>
            </div>

            <Link
              href="/pequenos-heroes/club"
              className="self-end justify-self-start rounded-full bg-white px-8 py-4 text-base font-semibold text-foreground shadow-xl transition hover:scale-105 hover:bg-kids-yellow md:justify-self-end"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              Entrar al Club →
            </Link>
          </div>
        </div>
      </section>

      {/* ───── REGALO GRATUITO ───── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div
          className="relative overflow-hidden rounded-[28px] border-4 bg-white p-10 text-center shadow-lg"
          style={{ borderColor: 'var(--kids-gold)' }}
        >
          <span aria-hidden className="text-6xl">🎁</span>
          <p
            className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-gold)]"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Descarga GRATIS
          </p>
          <h2
            className="mx-auto mt-3 max-w-2xl text-3xl leading-tight text-foreground md:text-4xl"
            style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
          >
            5 conversaciones de dinero que todo padre debe tener con sus hijos
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-base text-foreground/70"
            style={{ fontFamily: 'var(--font-kids-body)' }}
          >
            Una guía práctica para comenzar la educación financiera desde casa.
          </p>
          <Link
            href="/pequenos-heroes/regalo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-kids-gold px-8 py-4 text-base font-semibold text-foreground shadow-md transition hover:scale-105 hover:bg-kids-yellow"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Descargar Gratis ↓
          </Link>
        </div>
      </section>

      {/* ───── TESTIMONIOS ───── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--kids-coral)]"
            style={{ fontFamily: 'var(--font-kids-title)' }}
          >
            Lo que dicen las familias
          </p>
          <h2
            className="mt-4 text-4xl text-foreground md:text-5xl"
            style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
          >
            Historias que ya están pasando
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-[24px] border border-white bg-white p-7 shadow-sm"
            >
              <p aria-hidden className="text-2xl text-[var(--kids-gold)]">
                {'⭐'.repeat(t.rating)}
              </p>
              <p
                className="mt-4 text-base leading-relaxed text-foreground/85"
                style={{ fontFamily: 'var(--font-kids-body)' }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <p
                className="mt-5 text-sm font-semibold text-foreground"
                style={{ fontFamily: 'var(--font-kids-title)' }}
              >
                {t.name}
              </p>
              <p
                className="text-xs text-foreground/60"
                style={{ fontFamily: 'var(--font-kids-body)' }}
              >
                {t.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── CTA FINAL ───── */}
      <section
        id="comprar"
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(107, 203, 255, 0.18) 0%, rgba(255, 201, 60, 0.30) 100%)',
        }}
      >
        {/* Coins floating */}
        <div aria-hidden className="pointer-events-none absolute left-10 top-12 text-3xl opacity-50">🪙</div>
        <div aria-hidden className="pointer-events-none absolute right-16 top-32 text-2xl opacity-40">⭐</div>
        <div aria-hidden className="pointer-events-none absolute left-1/3 bottom-16 text-3xl opacity-50">🪙</div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <h2
            className="text-4xl leading-tight text-foreground md:text-6xl"
            style={{ fontFamily: 'var(--font-kids-title)', fontWeight: 700 }}
          >
            Los pequeños hábitos de hoy <br className="hidden md:block" />
            construyen los <span className="text-[var(--kids-coral)]">grandes futuros</span> de mañana.
          </h2>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80"
            style={{ fontFamily: 'var(--font-kids-body)' }}
          >
            Regálale a tu hijo el superpoder de entender el dinero desde pequeño.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#muestra"
              className="rounded-full bg-foreground px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[var(--kids-coral)]"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              Comprar Ahora
            </a>
            <Link
              href="#heroes"
              className="rounded-full border-2 border-foreground/20 bg-white px-8 py-4 text-base font-semibold text-foreground transition hover:border-[var(--kids-coral)] hover:text-[var(--kids-coral)]"
              style={{ fontFamily: 'var(--font-kids-title)' }}
            >
              Ver la colección
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
