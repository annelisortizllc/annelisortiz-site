import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Prensa',
  description:
    'Annelis Ortiz en medios: entrevistas, columnas y apariciones sobre educación financiera, hipotecas y bienes raíces para la comunidad hispana.',
  alternates: { canonical: 'https://annelisortiz.com/prensa' },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Prensa', path: '/prensa' },
]

// TODO: reemplazar con artículos/entrevistas reales conforme se publiquen.
const placeholderMentions = [
  {
    outlet: 'Próximo medio',
    headline: 'Apariciones próximas en medios — espacio reservado',
    date: 'Pendiente',
    url: '#',
  },
]

export default function PrensaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Prensa"
        title="Apariciones, entrevistas y columnas."
        lead="Mi trabajo en educación financiera, hipotecas y bienes raíces ha sido reconocido en medios para la comunidad hispana. Esta sección crece conforme se publican nuevas menciones."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Menciones recientes</p>
        <div className="mt-10 space-y-4">
          {placeholderMentions.map((m) => (
            <article
              key={m.headline}
              className="rounded-2xl border border-dashed border-border bg-background-elev-1/40 p-6"
            >
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-wider text-muted">
                <span>{m.outlet}</span>
                <span>{m.date}</span>
              </div>
              <h2 className="mt-3 font-serif text-xl text-foreground">{m.headline}</h2>
              <p className="mt-4 text-sm text-muted">
                TODO: poblar esta sección con artículos reales conforme se publiquen (Fase 5 del
                DAB — PR Auto-Pilot generará menciones automáticamente).
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-background-elev-1 p-8">
          <h2 className="font-serif text-xl text-foreground">¿Eres periodista o productor?</h2>
          <p className="mt-3 text-sm text-muted">
            Estoy disponible para entrevistas en español sobre educación financiera, primera
            vivienda, refinanciamiento, inversión en propiedades y patrimonio para familias
            hispanas. Respondo en menos de 24 horas.
          </p>
          <Link
            href="/#contacto"
            className="mt-6 inline-flex rounded-full border border-border-strong px-5 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Solicitar entrevista
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}
