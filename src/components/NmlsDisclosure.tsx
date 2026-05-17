import { business } from '@/lib/site'

// Disclosure regulatorio requerido para Mortgage Loan Originators (NMLS).
// Aparece en el footer del sitio para cumplir con normativa federal y estatal.
export function NmlsDisclosure() {
  return (
    <div className="border-t border-border bg-background-elev-2/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-[11px] leading-relaxed text-muted md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          {/* Equal Housing Opportunity icon (simple house silhouette) */}
          <svg
            aria-hidden
            viewBox="0 0 32 32"
            className="mt-0.5 h-7 w-7 shrink-0 text-foreground/70"
            fill="currentColor"
          >
            <path d="M16 4 4 14h3v12h7v-7h4v7h7V14h3L16 4Zm0 3.4 9 7.5v9.5h-3v-7H10v7H7v-9.5l9-7.5Z" />
          </svg>
          <div>
            <p>
              <span className="font-medium text-foreground">Annelis Ortiz</span>{' '}
              · NMLS #<span className="font-medium text-foreground">{business.nmlsLoanOfficer}</span>{' '}
              · Originadora de Préstamos Hipotecarios en{' '}
              <span className="font-medium text-foreground">{business.employer}</span>{' '}
              · NMLS #<span className="font-medium text-foreground">{business.nmlsCompany}</span>
            </p>
            <p className="mt-1">
              Equal Housing Opportunity. Verificación regulatoria disponible vía{' '}
              <a
                href={business.nmlsConsumerAccess}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:text-foreground"
              >
                NMLS Consumer Access
              </a>
              .
            </p>
            <p className="mt-1 max-w-3xl text-muted/80">
              Este sitio es informativo y educativo. No constituye una oferta de crédito ni un
              compromiso de préstamo. Todos los financiamientos están sujetos a aprobación
              crediticia, verificación de ingresos, tasación y demás términos aplicables.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
