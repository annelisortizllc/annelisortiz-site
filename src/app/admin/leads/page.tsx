import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/pr/auth'
import { logoutAction } from '@/lib/pr/actions/approve'
import { loadLeads } from '@/lib/crm/leads'
import { BUSINESS_LINES, LINE_LABELS, type BusinessLine } from '@/lib/crm/pipeline'
import { LeadCard } from './LeadCard'

export const metadata: Metadata = {
  title: 'Contactos · Admin',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

// El Club es la puerta de entrada al negocio hipotecario, así que abre en 'kids'.
const DEFAULT_LINE: BusinessLine = 'kids'

function parseLine(raw: string | string[] | undefined): BusinessLine | 'all' {
  if (raw === 'all') return 'all'
  if (typeof raw === 'string' && (BUSINESS_LINES as readonly string[]).includes(raw)) {
    return raw as BusinessLine
  }
  return DEFAULT_LINE
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const line = parseLine((await searchParams).linea)
  const { leads, countsByLine, crossoverEmails } = await loadLeads(line)

  const crossoverCount = leads.filter((l) => crossoverEmails.has(l.email.toLowerCase())).length

  const tabs: { key: BusinessLine | 'all'; label: string }[] = [
    { key: 'kids', label: LINE_LABELS.kids.es },
    { key: 'mortgage', label: LINE_LABELS.mortgage.es },
    { key: 'real_estate', label: LINE_LABELS.real_estate.es },
    { key: 'other', label: LINE_LABELS.other.es },
    { key: 'all', label: 'Todos' },
  ]

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">Contactos</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Tus contactos
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted">
            Todo el que se registra en el sitio llega aquí. Marca en qué etapa va y deja tus
            notas privadas.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/pr-autopilot"
            className="rounded-full border border-border-strong px-5 py-2 text-xs text-muted transition hover:border-accent hover:text-accent"
          >
            PR Auto-Pilot
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-border-strong px-5 py-2 text-xs text-muted transition hover:border-accent hover:text-accent"
            >
              Salir
            </button>
          </form>
        </div>
      </div>

      {crossoverCount > 0 ? (
        <div className="mb-10 rounded-2xl border border-accent bg-accent/10 px-6 py-5">
          <p className="font-serif text-lg text-foreground">
            {crossoverCount} {crossoverCount === 1 ? 'persona del Club' : 'personas del Club'} ya
            {crossoverCount === 1 ? ' preguntó' : ' preguntaron'} por hipoteca o bienes raíces
          </p>
          <p className="mt-2 text-sm text-muted">
            Están marcadas abajo con la etiqueta <strong>Club → hipoteca</strong>. Es el cruce que
            buscas: el papá o la mamá entró por Pequeños Héroes y llegó a tu negocio.
          </p>
        </div>
      ) : null}

      <nav className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const active = t.key === line
          const count = countsByLine[t.key] ?? 0
          return (
            <Link
              key={t.key}
              href={`/admin/leads?linea=${t.key}`}
              className={
                active
                  ? 'rounded-full bg-accent px-5 py-2 text-sm font-medium text-on-accent'
                  : 'rounded-full border border-border-strong px-5 py-2 text-sm text-muted transition hover:border-accent hover:text-accent'
              }
            >
              {t.label} <span className="opacity-60">{count}</span>
            </Link>
          )
        })}
      </nav>

      {leads.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border bg-background-elev-1/30 px-8 py-20 text-center">
          <p className="font-serif text-xl text-foreground">Todavía no hay nadie en esta línea</p>
          <p className="mt-3 text-sm text-muted">
            Cuando alguien llene un formulario del sitio, aparecerá aquí automáticamente.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {leads.map((l) => (
            <LeadCard
              key={l.id}
              lead={l}
              crossover={crossoverEmails.has(l.email.toLowerCase())}
            />
          ))}
        </div>
      )}
    </main>
  )
}
