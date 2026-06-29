import { business } from '@/lib/site'

// Símbolo oficial: casa con signo "=" — usado en los logos federales
// "Equal Housing Lender" y "Equal Housing Opportunity". Inline SVG para
// que escale limpio y mantenga el color del tema.
function EqualHousingMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      {/* Casa: techo triangular + cuerpo cuadrado */}
      <path d="M16 4 4 14h3v12h18V14h3L16 4Zm0 3.4 9 7.5v9.5H7v-9.5l9-7.5Z" />
      {/* Signo "=" dentro de la casa, característico del símbolo HUD */}
      <rect x="11" y="17" width="10" height="1.6" />
      <rect x="11" y="21" width="10" height="1.6" />
    </svg>
  )
}

// Disclosure regulatorio requerido para Mortgage Loan Originators (NMLS)
// y reconocimiento federal Equal Housing Lender + Equal Housing Opportunity.
// Aparece en el footer del sitio para cumplir con normativa federal y estatal.
export function NmlsDisclosure() {
  return (
    <div className="border-t border-border bg-background-elev-2/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-6 text-[11px] leading-relaxed text-muted">
        <div className="flex items-start gap-3">
          <EqualHousingMark className="mt-0.5 h-7 w-7 shrink-0 text-foreground/70" />
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

        {/* Logos oficiales: Equal Housing Lender + Equal Housing Opportunity */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/60 pt-4">
          <div className="flex items-center gap-2 text-foreground/80">
            <EqualHousingMark className="h-6 w-6 shrink-0" />
            <span className="text-[10px] font-medium uppercase tracking-wider">
              Equal Housing Lender
            </span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <EqualHousingMark className="h-6 w-6 shrink-0" />
            <span className="text-[10px] font-medium uppercase tracking-wider">
              Equal Housing Opportunity
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
