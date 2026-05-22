import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/PageHeader'
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/jsonld'
import { listBlogPosts } from '@/content/blog'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Honest articles on mortgages, real estate, financial preparation, and wealth-building for Hispanic families in the US — currently published in Spanish.',
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
  const posts = listBlogPosts()

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
        <div className="mb-12 rounded-2xl border border-accent/40 bg-background-elev-1/60 p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Note</p>
          <h2 className="mt-3 font-serif text-xl text-foreground">
            Articles are currently published in Spanish.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            My audience is primarily Hispanic, so blog posts ship in Spanish first. The summaries
            below show the original Spanish titles. The full English translation of these
            articles is on the roadmap — meanwhile, feel free to read the Spanish versions or
            reach out directly with questions.
          </p>
          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Browse Spanish articles
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border bg-background-elev-1 p-6 transition hover:border-accent/60"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted">
                <span className="text-accent">{post.category}</span>
                <span>{post.readingTimeMin} min read · in Spanish</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl leading-tight text-foreground group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </>
  )
}
