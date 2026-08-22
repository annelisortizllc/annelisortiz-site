import Image from 'next/image'

export function MapaVIP() {
  const bullets = [
    'En qué etapa te encuentras hoy',
    'Qué áreas necesitas preparar o fortalecer',
    'Cuál podría ser tu próximo paso',
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            MAPA VIP
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            Muchas veces el problema no es que no puedas, sino que no sabes por
            dónde comenzar.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Por eso creé el <strong className="text-foreground">MAPA VIP</strong>,
            una guía sencilla que te ayudará a entender:
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-foreground">
                <span aria-hidden className="mt-1 text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Este mapa te ayudará a entender cuál es tu próximo paso, ya sea que
            quieras comprar, invertir o estructurarte mejor.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-[#0f0f14] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] md:p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent-soft)]">
              Acceso gratis
            </p>
            <h3 className="mt-3 font-serif text-2xl leading-tight text-white">
              Descubre tu próximo paso
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              En pocos minutos identifica tu etapa y qué necesitas fortalecer
              antes de dar el siguiente paso.
            </p>
            <a
              href="https://web.aortizloans.com/mapa-hipotecario-vip"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
            >
              Acceder al MAPA VIP →
            </a>
          </div>
        </div>
      </div>

      {/* Vista previa del mapa */}
      <div className="mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background-elev-1 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]">
          <Image
            src="/mapa-vip-preview.png"
            alt="Vista previa del MAPA VIP — ruta paso a paso desde tu situación financiera hasta la compra exitosa"
            width={1600}
            height={1067}
            sizes="(min-width: 768px) 900px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
