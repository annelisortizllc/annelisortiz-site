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
import { blogSlugs, getBlogPost, listBlogPosts } from '@/content/blog'

export function generateStaticParams() {
  return blogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata(
  props: PageProps<'/blog/[slug]'>,
): Promise<Metadata> {
  const { slug } = await props.params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://annelisortiz.com/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `https://annelisortiz.com/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ['Annelis Ortiz'],
    },
  }
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const crumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ]

  const related = (post.relatedSlugs ?? [])
    .map((s) => getBlogPost(s))
    .filter((p): p is NonNullable<typeof p> => !!p)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleJsonLd(post))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
      {post.faq.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(post.faq))}
        />
      ) : null}

      <PageHeader
        eyebrow={`${post.category} · ${post.readingTimeMin} min`}
        title={post.title}
        lead={post.intro}
        crumbs={crumbs}
      />

      <div data-theme="cream" className="bg-background text-foreground">

      <article className="mx-auto max-w-3xl px-6 pt-12 pb-20">
        <PostBody sections={post.sections} />
      </article>

      {/* FAQ */}
      {post.faq.length ? (
        <section className="border-t border-border bg-background-elev-1/40">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Preguntas frecuentes</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground">
              Lo que más nos preguntan sobre este tema.
            </h2>
            <div className="mt-10 space-y-3">
              {post.faq.map((q) => (
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

      {/* Related + CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        {related.length ? (
          <>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Sigue leyendo</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-border bg-background-elev-1 p-6 transition hover:border-accent/60"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-accent">{r.category}</span>
                  <h3 className="mt-2 font-serif text-xl leading-tight text-foreground group-hover:text-accent">
                    {r.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{r.description}</p>
                </Link>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-16 rounded-2xl border border-border bg-background-elev-2/60 p-8 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">¿Tienes preguntas específicas?</p>
          <h3 className="mt-2 font-serif text-2xl text-foreground">
            Hablemos de tu caso, no de generalidades.
          </h3>
          <p className="mt-3 text-sm text-muted">
            Cada situación financiera es distinta. Cuéntame la tuya y te doy una respuesta clara.
          </p>
          <Link
            href="/#contacto"
            className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent shadow-[0_10px_40px_-10px_var(--accent-glow)] transition hover:bg-accent-soft"
          >
            Agendar consulta
          </Link>
        </div>
      </section>

      </div>
    </>
  )
}

