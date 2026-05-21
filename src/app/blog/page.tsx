import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { listBlogPosts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos honestos sobre hipotecas, bienes raíces, preparación financiera y construcción de patrimonio para familias hispanas en EE.UU. Por Annelis Ortiz.',
  alternates: { canonical: 'https://annelisortiz.com/blog' },
}

const crumbs = [
  { name: 'Inicio', path: '/' },
  { name: 'Blog', path: '/blog' },
]

export default function BlogIndexPage() {
  const posts = listBlogPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Blog"
        title="Educación honesta sobre hipotecas y bienes raíces."
        lead="Lo que de verdad necesitas saber antes de firmar — sin marketing, sin fórmulas mágicas, con números reales."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border bg-background-elev-1 p-7 transition hover:border-accent/60"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                <span className="uppercase tracking-[0.18em] text-accent">{post.category}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span aria-hidden>·</span>
                <span>{post.readingTimeMin} min de lectura</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl leading-tight text-foreground transition group-hover:text-accent md:text-3xl">
                {post.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{post.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-accent">
                Leer artículo <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </>
  )
}

function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('es', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
