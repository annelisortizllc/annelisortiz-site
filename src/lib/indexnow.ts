/**
 * IndexNow — push URL changes to Bing, Yandex, and other participating engines.
 * Host this site's verification key at /public/<key>.txt with the same value as content.
 * See https://www.indexnow.org/documentation
 */

import { site } from '@/lib/site'

export const INDEXNOW_KEY = '0bb4a41c0636735342b1b62360931411' as const
export const INDEXNOW_KEY_LOCATION = `${site.url}/${INDEXNOW_KEY}.txt`

const hostFromUrl = (u: string) => new URL(u).host

/**
 * Submit a batch of URL changes. Single call notifies all participating engines
 * (Bing, Yandex, Naver, Seznam, etc.).
 */
export async function notifyIndexNow(urls: string[]): Promise<{ ok: boolean; status: number; body: string }> {
  if (urls.length === 0) return { ok: true, status: 0, body: 'no urls' }
  const host = hostFromUrl(site.url)
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  }
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  const text = await res.text().catch(() => '')
  return { ok: res.ok, status: res.status, body: text }
}
