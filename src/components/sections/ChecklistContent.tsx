import Link from 'next/link'
import type { ChecklistStep } from '@/content/checklist'

type Copy = {
  stepLabel: string
  whyLabel: string
  actionLabel: string
  pitfallLabel: string
  ctaTitle: string
  ctaLead: string
  ctaBook: string
  ctaWhatsApp: string
  bookHref: string
  whatsAppHref: string
  bookingHref: string
  ctaBooking: string
}

export function ChecklistContent({
  steps,
  copy,
}: {
  steps: ChecklistStep[]
  copy: Copy
}) {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12">
        <ol className="space-y-12">
          {steps.map((step) => (
            <li key={step.num} className="grid gap-6 sm:grid-cols-[80px_1fr]">
              <div className="text-accent">
                <div className="font-serif text-5xl leading-none">
                  {String(step.num).padStart(2, '0')}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted">
                  {copy.stepLabel}
                </div>
              </div>
              <article>
                <h2 className="font-serif text-2xl leading-tight text-foreground md:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-accent">
                  {copy.whyLabel}
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {step.why}
                </p>

                <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-accent">
                  {copy.actionLabel}
                </p>
                <ul className="mt-2 space-y-2 text-base text-muted">
                  {step.action.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-1 text-accent" aria-hidden>
                        ✓
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                {step.pitfall ? (
                  <div className="mt-6 rounded-xl border border-border bg-background-elev-1/40 p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
                      {copy.pitfallLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.pitfall}
                    </p>
                  </div>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            {copy.ctaTitle}
          </p>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground md:text-3xl">
            {copy.ctaLead}
          </h3>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={copy.bookingHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent transition hover:bg-accent-soft"
            >
              📅 {copy.ctaBooking}
            </a>
            <a
              href={copy.whatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent"
            >
              💬 {copy.ctaWhatsApp}
            </a>
            <Link
              href={copy.bookHref}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent"
            >
              📖 {copy.ctaBook}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
