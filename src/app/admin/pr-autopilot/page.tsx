import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/pr/auth'
import { db, type PrQuery, type PrStatsRow } from '@/lib/pr/db'
import { logoutAction } from '@/lib/pr/actions/approve'
import { QueryCard } from './QueryCard'

export const metadata: Metadata = {
  title: 'PR Auto-Pilot · Admin',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

async function loadData(userId: string) {
  const supabase = db()
  const today = new Date().toISOString().slice(0, 10)

  const [queriesRes, statsRes, totalsRes] = await Promise.all([
    supabase
      .from('pr_queries')
      .select('*')
      .eq('user_id', userId)
      .in('status', ['pending', 'approved'])
      .order('score', { ascending: false, nullsFirst: false })
      .order('received_at', { ascending: false })
      .limit(50),
    supabase
      .from('pr_stats')
      .select('*')
      .eq('user_id', userId)
      .eq('day', today)
      .maybeSingle(),
    supabase
      .from('pr_queries')
      .select('status', { count: 'exact', head: false })
      .eq('user_id', userId),
  ])

  const queries = (queriesRes.data as PrQuery[] | null) ?? []
  const today_stats = (statsRes.data as PrStatsRow | null) ?? null
  const counts = (totalsRes.data ?? []).reduce<Record<string, number>>((acc, r) => {
    acc[r.status] = (acc[r.status] ?? 0) + 1
    return acc
  }, {})
  return { queries, today_stats, counts }
}

export default async function PrAutoPilotPage() {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  const { queries, today_stats, counts } = await loadData(session.sub)

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      {/* Header */}
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">PR Auto-Pilot</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Hola, {session.display_name.split(' ')[0]}.
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted">
            Revisa, edita o rechaza las queries pendientes. La IA pre-clasificó por relevancia y redactó un draft inicial en español.
          </p>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="rounded-full border border-border-strong px-5 py-2 text-xs text-muted transition hover:border-accent hover:text-accent"
          >
            Salir
          </button>
        </form>
      </div>

      {/* Stats */}
      <section className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
        <StatCard label="Recibidas hoy" value={today_stats?.queries_received ?? 0} />
        <StatCard label="Match alto (≥70)" value={today_stats?.queries_high_match ?? 0} accent />
        <StatCard label="Match medio" value={today_stats?.queries_medium_match ?? 0} />
        <StatCard label="Enviadas hoy" value={today_stats?.responses_sent ?? 0} />
        <StatCard label="Pendientes" value={counts.pending ?? 0} />
      </section>

      {/* Queue */}
      <section>
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl text-foreground">
            Cola actual
          </h2>
          <span className="text-sm text-muted">{queries.length} {queries.length === 1 ? 'query' : 'queries'}</span>
        </div>
        {queries.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-background-elev-1/30 px-8 py-20 text-center">
            <p className="font-serif text-xl text-foreground">Sin queries pendientes</p>
            <p className="mt-3 text-sm text-muted">
              Cuando el forwarder de Gmail mande nuevas, aparecerán aquí con su score y draft.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {queries.map((q) => <QueryCard key={q.id} query={q} />)}
          </div>
        )}
      </section>
    </main>
  )
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-background-elev-1 px-6 py-7">
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted">{label}</p>
      <p
        className={`mt-4 font-serif text-4xl ${accent ? 'text-accent' : 'text-foreground'}`}
      >
        {value}
      </p>
    </div>
  )
}
