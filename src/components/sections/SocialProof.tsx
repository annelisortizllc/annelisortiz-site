import type { Dictionary } from '@/lib/dictionaries'

const placeholderLogos = [
  'NEXA Lending',
  'NAR',
  'Univision',
  'Telemundo',
  'Bloomberg LATAM',
  'Forbes México',
]

export function SocialProof({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border bg-background-elev-1/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted">
          {dict.socialProof.title}
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {placeholderLogos.map((name) => (
            <div
              key={name}
              className="font-serif text-center text-sm tracking-wide text-muted"
              title="TODO: reemplazar por logo real"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
