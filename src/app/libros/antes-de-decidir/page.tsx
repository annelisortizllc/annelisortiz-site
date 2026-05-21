import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, bookJsonLd, faqJsonLd, jsonLdScript } from '@/lib/jsonld'
import { books, assets } from '@/lib/site'

const SLUG = 'antes-de-decidir'

export const metadata: Metadata = {
  title: 'Antes de Decidir — el libro',
  description:
    'Educación financiera, preparación crediticia y mentalidad antes de comprar una propiedad. El libro de Annelis Ortiz para tomar decisiones inteligentes en bienes raíces.',
  alternates: { canonical: `https://annelisortiz.com/libros/${SLUG}` },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Libros', path: '/libros' },
  { name: 'Antes de Decidir', path: `/libros/${SLUG}` },
]

const chapters = [
  'La preparación que NADIE te enseñó',
  'Crédito: tu activo invisible',
  'Antes de mirar casas: el orden financiero',
  'Mentalidad de comprador vs. mentalidad de inversionista',
  'Errores caros que cometen las familias hispanas',
  'Cómo elegir la propiedad correcta para tu etapa',
  'El cierre: lo que firmas en realidad',
  'Después de la compra: construir patrimonio real',
]

const faqs = [
  {
    question: '¿Para quién es este libro?',
    answer:
      'Para personas y familias que están considerando comprar una propiedad en Estados Unidos por primera vez, refinanciar, o entrar al mundo de la inversión en bienes raíces — y quieren entender el proceso ANTES de firmar.',
  },
  {
    question: '¿Necesito tener crédito o ahorros para empezar a leerlo?',
    answer:
      'No. El libro está diseñado para empezar desde cero: cómo organizar tu crédito, cómo preparar tus finanzas, y qué hacer en los meses previos a buscar propiedad — incluso si hoy no calificas.',
  },
  {
    question: '¿Está en español?',
    answer:
      'Sí. El libro está escrito en español, enfocado en la realidad de la comunidad hispana en Estados Unidos y Latinoamérica.',
  },
  {
    question: '¿Dónde lo puedo conseguir?',
    answer:
      'Disponibilidad próximamente. Si quieres ser notificado cuando esté disponible, escríbeme desde la sección de contacto.',
  },
]

export default function BookPage() {
  const book = books.find((b) => b.slug === SLUG)
  if (!book) notFound()

  const bookSchema = bookJsonLd(SLUG)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      {bookSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(bookSchema)}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faqs))}
      />

      <PageHeader
        eyebrow="El libro"
        title="Antes de Decidir."
        lead='"Cuando Nadie Te Enseñó a Prepararte" — la guía honesta sobre educación financiera, preparación crediticia y mentalidad antes de comprar una propiedad.'
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">

      {/* Cover + pitch */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-accent/20 blur-2xl"
            />
            <div className="aspect-[2/3] overflow-hidden rounded-2xl border border-border bg-background-elev-2 shadow-2xl">
              <Image
                src={assets.bookCover}
                alt='Portada del libro "Antes de Decidir: Cuando Nadie Te Enseñó a Prepararte" por Annelis Ortiz'
                width={640}
                height={960}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">
              El libro que te hubiera ahorrado años de errores.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Hay un momento incómodo que casi todos enfrentamos: firmar algo importante sin
              entender del todo lo que significa. Cuando se trata de una hipoteca o de una
              propiedad, ese momento puede costar décadas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Este libro nace de las conversaciones que tengo todos los días con familias que
              llegan demasiado tarde — y de las que llegan a tiempo y lo cambian todo. Si nadie
              te enseñó a prepararte, esto es lo que necesitabas leer primero.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={(books.find((b) => b.slug === SLUG) as { amazonUrl?: string }).amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
              >
                Comprar en Amazon
                <span aria-hidden>↗</span>
              </a>
              <Link
                href="/sobre-mi"
                className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                Sobre la autora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capítulos */}
      <section className="border-y border-border bg-background-elev-1/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Contenido</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Lo que vas a aprender.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Una guía paso a paso para llegar al cierre con claridad — y construir patrimonio desde
            la primera firma.
          </p>
          <ol className="mt-10 space-y-2">
            {chapters.map((ch, i) => (
              <li
                key={ch}
                className="flex items-baseline gap-4 rounded-lg border border-transparent px-4 py-3 transition hover:border-border hover:bg-background-elev-2/40"
              >
                <span className="font-serif text-lg text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base text-foreground">{ch}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-muted">
            * Los títulos de capítulos son representativos. Actualizar con el índice final del
            libro cuando esté listo.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Preguntas frecuentes</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
          Lo que más nos preguntan.
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-background-elev-1 px-6 py-5 transition hover:border-accent/60"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-foreground">
                <span>{faq.question}</span>
                <span
                  aria-hidden
                  className="text-accent transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      </div>
    </>
  )
}
