import type { Dictionary } from '@/lib/dictionaries'
import { ContactForm } from './ContactForm'
import { applicationPortal, contact } from '@/lib/site'

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contacto" className="border-t border-border bg-background-elev-1/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            {dict.contact.title}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            {dict.contact.lead}
          </h2>

          {/* Canales directos */}
          <div className="mt-8 space-y-3">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-background-elev-1 px-5 py-4 transition hover:border-accent/60"
            >
              <span
                aria-hidden
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
              >
                {/* WhatsApp glyph */}
                <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
                  <path d="M16 3C9.4 3 4 8.4 4 15c0 2.2.6 4.3 1.7 6.2L4 29l8-2.1A12 12 0 1 0 16 3Zm6.9 17c-.3.8-1.6 1.6-2.3 1.7-.6.1-1.4.1-2.2-.1-1-.3-2.4-.8-4.1-2.3-2.1-1.8-3.4-4-3.5-4.2-.1-.2-.8-1.1-.8-2.1 0-1 .5-1.5.7-1.7.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.3-.1.6.3.5.9 1.5 1.9 2.4 1.2 1.1 2.3 1.5 2.6 1.6.3.1.4.1.6-.1l.7-.8c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.6.3 0 .1 0 .8-.3 1.5Z"/>
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-wider text-muted">WhatsApp directo</p>
                <p className="font-mono text-sm text-foreground group-hover:text-accent">{contact.whatsappPretty}</p>
              </div>
              <span aria-hidden className="text-muted group-hover:text-accent">↗</span>
            </a>

            <a
              href={contact.mailto}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-background-elev-1 px-5 py-4 transition hover:border-accent/60"
            >
              <span
                aria-hidden
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-wider text-muted">Email</p>
                <p className="text-sm text-foreground group-hover:text-accent">{contact.email}</p>
              </div>
              <span aria-hidden className="text-muted group-hover:text-accent">↗</span>
            </a>
          </div>

          {/* Portal profesional aortizloans.com */}
          <div className="mt-8 rounded-2xl border border-border bg-background-elev-2/60 p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
              ¿Listo para aplicar?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Para iniciar una pre-aprobación o aplicación formal de préstamo hipotecario,
              accede a mi portal profesional.
            </p>
            <a
              href={applicationPortal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              Ir a {applicationPortal.label}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  )
}
