import 'server-only'
import bcrypt from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { env } from './env'
import { db, type PrUser, type PrRole } from './db'

const COOKIE_NAME = 'pr_session'
const SESSION_MAX_AGE_SEC = 60 * 60 * 12 // 12 hours
const ANTI_TIMING_DELAY_MS = 600         // DAB v2.0 hard requirement on login

const encoder = new TextEncoder()
const secretKey = () => encoder.encode(env.PR_AUTH_SECRET())

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

// ---------- Password helpers ----------

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12)
}

async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash)
}

// ---------- Session JWT ----------

export interface SessionPayload {
  sub: string         // pr_users.id
  email: string
  role: PrRole
  display_name: string
}

async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SEC}s`)
    .sign(secretKey())
}

async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey(), { algorithms: ['HS256'] })
    return payload as unknown as SessionPayload
  } catch {
    return null
  }
}

// ---------- Login / logout ----------

/**
 * Constant-time login: every attempt — success or failure — takes at
 * least 600 ms, so an attacker can't time-distinguish "no such user"
 * from "wrong password".
 */
export async function login(
  email: string,
  password: string,
): Promise<{ ok: true; user: SessionPayload } | { ok: false; reason: string }> {
  const started = Date.now()
  let result: { ok: true; user: SessionPayload } | { ok: false; reason: string } = {
    ok: false,
    reason: 'Invalid email or password',
  }

  try {
    const normalized = email.trim().toLowerCase()
    const { data, error } = await db()
      .from('pr_users')
      .select('*')
      .eq('email', normalized)
      .maybeSingle()

    if (!error && data) {
      const user = data as PrUser
      const matches = await verifyPassword(password, user.password_hash)
      if (matches) {
        await db()
          .from('pr_users')
          .update({ last_login_at: new Date().toISOString() })
          .eq('id', user.id)

        const payload: SessionPayload = {
          sub: user.id,
          email: user.email,
          role: user.role,
          display_name: user.display_name,
        }
        const token = await signSession(payload)
        const jar = await cookies()
        jar.set(COOKIE_NAME, token, {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          path: '/',
          maxAge: SESSION_MAX_AGE_SEC,
        })
        result = { ok: true, user: payload }
      }
    } else if (!error && !data) {
      // Burn a hash so failed-no-user takes the same CPU as failed-wrong-pw.
      await verifyPassword(password, '$2a$12$0123456789012345678901abcdefghijklmnopqrstuvwxyz12345.')
    }
  } catch {
    // swallow — generic failure response
  }

  const elapsed = Date.now() - started
  if (elapsed < ANTI_TIMING_DELAY_MS) await sleep(ANTI_TIMING_DELAY_MS - elapsed)
  return result
}

export async function logout(): Promise<void> {
  const jar = await cookies()
  jar.delete(COOKIE_NAME)
}

// ---------- Server-side session check ----------

export async function getSession(): Promise<SessionPayload | null> {
  const jar = await cookies()
  const token = jar.get(COOKIE_NAME)?.value
  if (!token) return null
  return verifySession(token)
}

export async function requireRole(...allowed: PrRole[]): Promise<SessionPayload> {
  const s = await getSession()
  if (!s) throw new Error('Unauthorized')
  if (allowed.length && !allowed.includes(s.role)) throw new Error('Forbidden')
  return s
}
