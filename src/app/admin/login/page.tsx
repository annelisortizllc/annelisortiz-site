import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/pr/auth'
import { LoginForm } from './LoginForm'

export const metadata: Metadata = {
  title: 'Admin · Login',
  robots: { index: false, follow: false }, // never index admin
}

export default async function LoginPage() {
  const session = await getSession()
  if (session) redirect('/admin/pr-autopilot')

  return (
    <main className="relative isolate min-h-[100dvh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, var(--accent-glow), transparent 70%)',
        }}
      />
      <div className="relative mx-auto flex min-h-[100dvh] max-w-md flex-col items-center justify-center px-6 py-16">
        <div className="mb-10 flex items-center gap-2 font-serif text-xl tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent-glow)]" />
          <span className="text-foreground">Annelis Ortiz</span>
        </div>
        <div className="w-full rounded-2xl border border-border bg-background-elev-1 p-8 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Admin</p>
          <h1 className="mt-3 font-serif text-3xl text-foreground">PR Auto-Pilot</h1>
          <p className="mt-2 text-sm text-muted">
            Inicia sesión para revisar las queries de prensa recibidas.
          </p>
          <div className="mt-8">
            <LoginForm />
          </div>
        </div>
        <p className="mt-6 text-[11px] text-muted/70">
          Acceso restringido. Todas las acciones quedan auditadas.
        </p>
      </div>
    </main>
  )
}
