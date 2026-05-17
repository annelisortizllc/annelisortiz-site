import type { Dictionary } from '@/lib/dictionaries'
import { ContactForm } from './ContactForm'
import { applicationPortal } from '@/lib/site'

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

          {/* Portal de aplicaciones de préstamos (NEXA Lending) */}
          <div className="mt-10 rounded-2xl border border-border bg-background-elev-2/60 p-6">
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
