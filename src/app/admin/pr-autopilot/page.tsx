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
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">PR Auto-Pilot</p>
          <h1 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
            Buenos días, {session.display_name}.
          </h1>
          <p className="mt-1 text-sm text-muted">
            Revisa, edita o rechaza las queries pendientes. La IA pre-clasificó por relevancia.
          </p>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="rounded-full border border-border-strong px-4 py-1.5 text-xs text-muted transition hover:border-accent hover:text-accent"
          >
            Salir
          </button>
        </form>
      </div>

      {/* Stats */}
      <section className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-5">
        <StatCard label="Hoy recibidas" value={today_stats?.queries_received ?? 0} />
        <StatCard label="Match alto (≥70)" value={today_stats?.queries_high_match ?? 0} accent />
        <StatCard label="Match medio" value={today_stats?.queries_medium_match ?? 0} />
        <StatCard label="Enviadas hoy" value={today_stats?.responses_sent ?? 0} />
        <StatCard label="Pendientes totales" value={counts.pending ?? 0} />
      </section>

      {/* Queue */}
      <section className="space-y-4">
        <h2 className="font-serif text-xl text-foreground">Cola actual ({queries.length})</h2>
        {queries.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-background-elev-1/40 p-12 text-center">
            <p className="text-sm text-muted">
              No hay queries pendientes. Cuando el forwarder de Gmail mande nuevas, aparecerán aquí.
            </p>
          </div>
        ) : (
          queries.map((q) => <QueryCard key={q.id} query={q} />)
        )}
      </section>
    </main>
  )
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-background-elev-1 p-5">
      <p className="text-[10px] uppercase tracking-wider text-muted">{label}</p>
      <p
        className={`mt-2 font-serif text-3xl ${accent ? 'text-accent' : 'text-foreground'}`}
      >
        {value}
      </p>
    </div>
  )
}
