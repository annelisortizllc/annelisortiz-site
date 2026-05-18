#!/usr/bin/env node
// Submit every URL in the production sitemap to IndexNow.
// Run after non-trivial deploys: `node scripts/indexnow-submit.mjs`

const SITE_URL = 'https://annelisortiz.com'
const KEY = '0bb4a41c0636735342b1b62360931411'

async function main() {
  // Fetch and parse the live sitemap
  const r = await fetch(`${SITE_URL}/sitemap.xml`)
  if (!r.ok) throw new Error(`sitemap fetch failed: ${r.status}`)
  const xml = await r.text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  if (urls.length === 0) throw new Error('no URLs in sitemap')

  console.log(`Submitting ${urls.length} URLs to IndexNow...`)
  urls.forEach((u) => console.log(`  - ${u}`))

  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList: urls,
    }),
  })
  const body = await res.text().catch(() => '')
  console.log(`\nResponse: ${res.status} ${res.statusText}`)
  if (body) console.log(`Body: ${body}`)
  if (!res.ok) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
