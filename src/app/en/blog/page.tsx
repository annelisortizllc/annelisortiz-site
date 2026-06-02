import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { listBlogPosts, pickContent } from '@/content/blog'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Honest articles on mortgages, real estate, financial preparation, and wealth-building for Hispanic families in the US. By Annelis Ortiz.',
  alternates: {
    canonical: `${site.url}/en/blog`,
    languages: {
      'es-ES': `${site.url}/blog`,
      'en-US': `${site.url}/en/blog`,
    },
  },
}

const crumbs = [
  { name: 'Home', path: '/en' },
  { name: 'Blog', path: '/en/blog' },
]

export default function BlogIndexPageEN() {
  const posts = listBlogPosts('en')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />

      <PageHeader
        eyebrow="Blog"
        title="Honest education on mortgages and real estate."
        lead="What you really need to know before signing — no marketing, no magic formulas, real numbers."
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-6">
          {posts.map((post) => {
            const content = pickContent(post, 'en')
            return (
              <Link
                key={content.slug}
                href={`/en/blog/${content.slug}`}
                className="group block rounded-2xl border border-border bg-background-elev-1 p-7 transition hover:border-accent/60"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                  <span className="uppercase tracking-[0.18em] text-accent">{content.category}</span>
                  <span aria-hidden>·</span>
                  <span>{formatDate(post.publishedAt)}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readingTimeMin} min read</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl leading-tight text-foreground transition group-hover:text-accent md:text-3xl">
                  {content.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">{content.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-accent">
                  Read article <span aria-hidden>→</span>
                </span>
              </Link>
            )
          })}
        </div>
      </section>
      </div>
    </>
  )
}

function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
