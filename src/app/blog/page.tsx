import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos de Annelis Ortiz sobre hipotecas, bienes raíces, preparación financiera y construcción de patrimonio para familias hispanas en Estados Unidos.',
  alternates: { canonical: 'https://annelisortiz.com/blog' },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Blog', path: '/blog' },
]

// TODO: reemplazar con artículos reales (15-20 artículos SEO long-tail por DAB Fase 1).
const upcomingTopics = [
  'FHA vs convencional: cuál te conviene en 2026',
  'Cómo subir tu credit score en 90 días antes de comprar',
  'Down payment: cuánto necesitas realmente',
  'DSCR loans para inversión en propiedades',
  'Primera vivienda en Florida: lo que debes saber',
  'Refinanciamiento: cuándo sí y cuándo no',
  'Inversión en alquileres a corto plazo',
  'Crédito para inmigrantes recién llegados',
  'Comprar casa siendo trabajador 1099',
  'Reservas, PMI y otros costos ocultos',
  'Equity: cómo usar el patrimonio de tu casa',
  'Estrategias de inversión con casas multifamiliares',
  'Errores caros al comprar con un amigo o familiar',
  'Cómo elegir un agente de bienes raíces',
  'Preparación financiera para construir patrimonio generacional',
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Blog"
        title="Educación honesta sobre hipotecas y bienes raíces."
        lead="Artículos para personas que quieren entender el sistema ANTES de firmar. Próximamente: guías paso a paso, casos reales y respuestas a las preguntas que recibo todos los días."
        crumbs={crumbs}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-2xl border border-dashed border-border bg-background-elev-1/40 p-10 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            Próximos artículos
          </p>
          <h2 className="mt-4 font-serif text-2xl leading-tight text-foreground md:text-3xl">
            15+ guías long-form en camino.
          </h2>
          <p className="mt-4 text-sm text-muted">
            El blog se publica como parte de la Fase 1 del Digital Authority Blueprint. Aquí va la
            lista preliminar de temas que estamos preparando.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {upcomingTopics.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-xl border border-border bg-background-elev-1 p-4 text-sm text-muted transition hover:border-accent/60 hover:text-foreground"
            >
              <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <Link
            href="/#contacto"
            className="inline-flex rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Sugerir un tema
          </Link>
        </div>
      </section>
    </>
  )
}
