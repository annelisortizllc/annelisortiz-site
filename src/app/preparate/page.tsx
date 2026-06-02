import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { LeadMagnetForm } from '@/components/sections/LeadMagnetForm'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { assets } from '@/lib/site'
import { stepsEs } from '@/content/checklist'

export const metadata: Metadata = {
  title: 'Checklist gratis · Antes de Decidir',
  description:
    'El checklist de 10 pasos que reviso con cada familia antes de aplicar para una hipoteca. Gratis, en tu inbox en 60 segundos.',
  alternates: {
    canonical: 'https://annelisortiz.com/preparate',
    languages: {
      'es-ES': 'https://annelisortiz.com/preparate',
      'en-US': 'https://annelisortiz.com/en/get-ready',
    },
  },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Checklist gratis', path: '/preparate' },
]

const valueBullets = [
  'Los 10 pasos exactos que reviso con cada familia antes de aplicar',
  'Errores que tumban aprobaciones — y cómo evitarlos',
  'FHA, convencional, VA: cuál te conviene según tu perfil',
  'Cómo documentar ingreso si eres self-employed o tienes side hustle',
  'PITI completo: el número real al que apuntar',
]

export default function PreparatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Recurso gratis"
        title="El checklist de 10 pasos antes de aplicar a una hipoteca."
        lead="Lo mismo que reviso con cada cliente antes de que llene una sola aplicación. Déjame tu nombre y email — te llega al inbox en 60 segundos."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                Qué vas a recibir
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
                No es teoría — es el mismo marco del libro <em>Antes de Decidir</em>.
              </h2>

              <ul className="mt-8 space-y-4 text-base text-muted">
                {valueBullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 text-accent" aria-hidden>
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-border bg-background-elev-1/60 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  Quiero mi checklist
                </p>
                <p className="mt-2 mb-6 text-sm text-muted">
                  Sin spam. Te lo mando una sola vez, directo al inbox.
                </p>
                <LeadMagnetForm
                  locale="es"
                  copy={{
                    nameLabel: 'Nombre',
                    emailLabel: 'Email',
                    submit: 'Quiero mi checklist',
                    submitting: 'Enviando…',
                  }}
                />
              </div>
            </div>

            <aside className="md:col-span-2">
              <div className="sticky top-24">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-background-elev-1">
                  <Image
                    src={assets.bookCover}
                    alt="Portada del libro Antes de Decidir"
                    width={800}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted">
                  De la autora de <em>Antes de Decidir</em>
                </p>
                <p className="mt-2 text-sm text-muted">
                  Annelis Ortiz · NMLS #2006182<br />
                  Originadora de Préstamos en NEXA Lending<br />
                  Agente de Bienes Raíces
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Primeros 3 pasos (preview)
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground md:text-3xl">
              Vista previa del contenido.
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {stepsEs.slice(0, 3).map((s) => (
                <article
                  key={s.num}
                  className="rounded-2xl border border-border bg-background-elev-1/40 p-6"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-accent">
                    Paso {s.num}
                  </div>
                  <h4 className="mt-3 font-serif text-xl leading-snug text-foreground">
                    {s.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.why.slice(0, 160)}…
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-10 text-sm text-muted">
              Los 7 pasos restantes te llegan por email. ¿Prefieres hablar primero?{' '}
              <Link href="/#contact" className="text-accent hover:underline">
                Escríbeme directo
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
