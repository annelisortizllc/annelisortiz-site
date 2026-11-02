import type { Metadata } from 'next'
import { GuiaForm } from '@/components/sections/GuiaForm'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { applicationPortal, business as siteBusiness } from '@/lib/site'

// ============================================================================
// /guia — el destino del enlace #1 de Instagram ("Guía gratis 👇").
//
// ⚖️ Esto es una PIEZA DE HIPOTECA. Por eso lleva el NMLS y NO menciona
// bienes raíces, "Realtor" ni AXEN Realty: si lo hiciera, se convertiría en
// anuncio de bienes raíces y la Fla. Admin. Code 61J2-10.025 obligaría a
// poner el nombre del bróker. Tampoco lleva tasa, plazo, monto ni porcentaje
// de inicial — eso dispararía Reg Z §226.24. Y no promete aprobación.
// ============================================================================

export const metadata: Metadata = {
  title: 'La Guía Definitiva para Comprar Casa en USA · Gratis',
  description:
    'Las 12 páginas que explican el camino completo: desde el crédito hasta las llaves. Gratis, a tu correo. Por Annelis Ortiz, Originadora de Préstamos Hipotecarios, NMLS #2006182.',
  alternates: { canonical: 'https://annelisortiz.com/guia' },
  openGraph: {
    title: 'La Guía Definitiva para Comprar Casa en USA',
    description:
      'Desde el crédito hasta las llaves · 12 páginas · gratis.',
    url: 'https://annelisortiz.com/guia',
    type: 'article',
  },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'La Guía Definitiva', path: '/guia' },
]

// Los 8 capítulos reales del PDF. Ninguno inventado — leídos del archivo.
const capitulos = [
  { n: 1, t: '¿Estás listo para comprar una casa?' },
  { n: 2, t: 'Entendiendo tu Crédito', sub: 'El DTI: tu Relación Deuda-Ingreso' },
  { n: 3, t: '¿Cuánto Dinero Necesitas para Comprar?' },
  { n: 4, t: 'Define tu Presupuesto Real' },
  { n: 5, t: 'El Proceso de Compra Paso a Paso' },
  { n: 6, t: 'Errores que Debes Evitar' },
  { n: 7, t: 'Invertir en Bienes Raíces es Construir Patrimonio' },
  { n: 8, t: 'Mitos y Realidades sobre Comprar Casa en USA' },
]

export default function GuiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <div data-theme="cream" className="bg-background text-foreground">
        {/* ── Bloque 1 · Barra de arriba ───────────────────────────── */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-4 text-xs leading-relaxed text-muted sm:text-[13px]">
            <span className="text-foreground">Annelis Ortiz</span> · Originadora
            de Préstamos Hipotecarios · NMLS #{siteBusiness.nmlsLoanOfficer}
            <span className="mx-2 hidden sm:inline">·</span>
            <br className="sm:hidden" />
            NEXA Lending LLC · NMLS #{siteBusiness.nmlsCompany}
          </div>
        </div>

        <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pt-20">
          <div className="grid gap-12 md:grid-cols-5 md:gap-14">
            <div className="md:col-span-3">
              {/* ── Bloque 2 · El titular ────────────────────────── */}
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                Guía gratis
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl">
                La Guía Definitiva para Comprar Casa en USA
              </h1>
              <p className="mt-5 text-base text-muted sm:text-lg">
                Desde el crédito hasta las llaves · 12 páginas · gratis
              </p>

              {/* ── Bloque 3 · Por qué me la pide a mí ───────────── */}
              <div className="mt-10 border-l-2 border-accent pl-5">
                <p className="text-base leading-relaxed text-foreground sm:text-lg">
                  Comprar casa en este país no es difícil por la casa. Es difícil
                  porque nadie te explica el camino completo, en orden, en tu
                  idioma.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Esto es ese camino, escrito tal como se lo explico a cada
                  familia que se sienta conmigo.
                </p>
              </div>

              {/* ── Bloque 5 · La forma ──────────────────────────── */}
              <div className="mt-10">
                <GuiaForm locale="es" bookingUrl={applicationPortal.url} />
              </div>
            </div>

            {/* ── Bloque 4 · Qué hay dentro ──────────────────────── */}
            <aside className="md:col-span-2">
              <div className="sticky top-24 rounded-2xl border border-border bg-background-elev-1/50 p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  Qué hay adentro
                </p>
                <ol className="mt-6 space-y-4">
                  {capitulos.map((c) => (
                    <li key={c.n} className="flex gap-3">
                      <span
                        className="mt-0.5 w-5 shrink-0 text-xs font-medium text-accent"
                        aria-hidden
                      >
                        {c.n}
                      </span>
                      <span className="text-sm leading-snug text-foreground">
                        {c.t}
                        {c.sub ? (
                          <span className="mt-1 block text-xs text-muted">
                            → {c.sub}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Bloque 7 · El pie ──────────────────────────────────── */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-5xl px-6 py-10 text-xs leading-relaxed text-muted">
            <p className="text-foreground">
              Annelis Ortiz · NMLS #{siteBusiness.nmlsLoanOfficer}
            </p>
            <p className="mt-1">
              NEXA Lending LLC · NMLS #{siteBusiness.nmlsCompany} · Igualdad de
              Oportunidad en la Vivienda
            </p>
            <p className="mt-4 max-w-2xl">
              Esto no es una oferta de crédito ni una garantía de aprobación.
              Toda solicitud está sujeta a calificación. Verifica licencias en{' '}
              <a
                href={siteBusiness.nmlsConsumerAccess}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                NMLS Consumer Access
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
