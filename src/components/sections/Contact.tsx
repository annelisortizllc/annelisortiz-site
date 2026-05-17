import type { Dictionary } from '@/lib/dictionaries'
import { ContactForm } from './ContactForm'

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
          <p className="mt-6 text-sm text-muted">
            TODO Fase 2: muestra del WhatsApp + email del asistente cuando tengas los datos.
          </p>
        </div>
        <div className="md:col-span-3">
          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  )
}
