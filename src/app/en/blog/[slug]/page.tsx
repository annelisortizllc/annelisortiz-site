import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/PageHeader'
import { PostBody } from '@/components/blog/PostBody'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  articleJsonLd,
  jsonLdScript,
} from '@/lib/jsonld'
import {
  blogSlugs,
  getBlogPost,
  getBlogPostByEsSlug,
  pickContent,
} from '@/content/blog'
import { site } from '@/lib/site'

export function generateStaticParams() {
  return blogSlugs('en').map((slug) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<'/en/blog/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params
  const post = getBlogPost(slug, 'en')
  if (!post) return {}
  const content = pickContent(post, 'en')
  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: `${site.url}/en/blog/${content.slug}`,
      languages: {
        'es-ES': `${site.url}/blog/${post.es.slug}`,
        'en-US': `${site.url}/en/blog/${content.slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: content.title,
      description: content.description,
      url: `${site.url}/en/blog/${content.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ['Annelis Ortiz'],
      locale: 'en_US',
      alternateLocale: 'es_ES',
    },
  }
}

export default async function BlogPostPageEN(
  props: PageProps<'/en/blog/[slug]'>,
) {
  const { slug } = await props.params
  const post = getBlogPost(slug, 'en')
  if (!post) notFound()
  const content = pickContent(post, 'en')

  const crumbs = [
    { name: 'Home', path: '/en' },
    { name: 'Blog', path: '/en/blog' },
    { name: content.title, path: `/en/blog/${content.slug}` },
  ]

  // Related posts are referenced by ES slug; resolve them, then pick the
  // EN version if available. Posts not yet translated are dropped from
  // the related list rather than linking to Spanish.
  const related = (post.relatedSlugs ?? [])
    .map((s) => getBlogPostByEsSlug(s))
    .filter((p): p is NonNullable<typeof p> => !!p && !!p.en)
    .map((p) => ({ post: p, content: pickContent(p, 'en') }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleJsonLd({
            slug: content.slug,
            title: content.title,
            description: content.description,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            keywords: content.keywords,
            locale: 'en',
          }),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      {content.faq.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(content.faq))}
        />
      ) : null}

      <PageHeader
        eyebrow={`${content.category} · ${post.readingTimeMin} min`}
        title={content.title}
        lead={content.intro}
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">

      <article className="mx-auto max-w-3xl px-6 pt-12 pb-20" data-speakable="article">
        <PostBody sections={content.sections} />
      </article>

      {content.faq.length ? (
        <section className="border-t border-border bg-background-elev-1/40">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Frequently asked</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground">
              What readers ask most about this topic.
            </h2>
            <div className="mt-10 space-y-3" data-speakable="faq">
              {content.faq.map((q) => (
                <details
                  key={q.question}
                  className="group rounded-2xl border border-border bg-background-elev-1 px-6 py-5 transition hover:border-accent/60"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-foreground">
                    <span>{q.question}</span>
                    <span aria-hidden className="text-accent transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-muted">{q.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-4xl px-6 py-20">
        {related.length ? (
          <>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Keep reading</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.content.slug}
                  href={`/en/blog/${r.content.slug}`}
                  className="group rounded-2xl border border-border bg-background-elev-1 p-6 transition hover:border-accent/60"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-accent">{r.content.category}</span>
                  <h3 className="mt-2 font-serif text-xl leading-tight text-foreground group-hover:text-accent">
                    {r.content.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{r.content.description}</p>
                </Link>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-16 rounded-2xl border border-border bg-background-elev-2/60 p-8 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Have specific questions?</p>
          <h3 className="mt-2 font-serif text-2xl text-foreground">
            Let&apos;s talk about your situation, not generalities.
          </h3>
          <p className="mt-3 text-sm text-muted">
            Every financial situation is different. Share yours and I&apos;ll give you a clear answer.
          </p>
          <Link
            href="/en#contact"
            className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
          >
            Book a consultation
          </Link>
        </div>
      </section>

      </div>
    </>
  )
}
