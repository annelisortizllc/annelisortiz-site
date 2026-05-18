'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import type { Dictionary } from '@/lib/dictionaries'
import { assets } from '@/lib/site'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Radial glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, ease }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, var(--accent-glow), transparent 70%)',
        }}
      />
      <div className="surface-grain relative">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-24 pb-28 md:grid-cols-5 md:gap-16 md:pt-32 md:pb-36">
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="mb-6 text-xs uppercase tracking-[0.22em] text-muted"
            >
              {dict.hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              {dict.hero.title}
              <br />
              <span className="bg-gradient-to-r from-[var(--accent-soft)] via-[var(--accent)] to-[var(--accent-deep)] bg-clip-text text-transparent">
                {dict.hero.titleAccent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
            >
              {dict.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
              >
                {dict.hero.ctaPrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* Hero portrait — visible on md+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative hidden md:col-span-2 md:block"
          >
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-accent/15 blur-2xl"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-background-elev-1">
              <Image
                src={assets.portraitHero}
                alt="Annelis Ortiz — Originadora de Préstamos Hipotecarios y Agente de Bienes Raíces"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                priority
                className="object-cover"
              />
              {/* Subtle gradient overlay for legibility integration with the dark theme */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 60%, rgba(7,7,10,0.4) 100%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
