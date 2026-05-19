import 'server-only'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { env } from './env'

/**
 * Server-side Supabase client using the service_role key.
 * Bypasses RLS — never expose to the browser. All callers must run on
 * the server (Server Component, Route Handler, Server Action).
 */
let cached: SupabaseClient | null = null

export function db(): SupabaseClient {
  if (cached) return cached
  cached = createClient(env.SUPABASE_URL(), env.SUPABASE_SERVICE_ROLE_KEY(), {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'x-application-name': 'annelisortiz-pr-autopilot' } },
  })
  return cached
}

// ------ Typed row helpers --------------------------------------------------

export type PrRole = 'owner' | 'editor' | 'viewer'
export type PrQueryStatus = 'pending' | 'approved' | 'rejected' | 'sent' | 'error'
export type PrSource = 'haro' | 'qwoted' | 'connectively' | 'sos' | 'journorequests' | 'other'

export interface PrUser {
  id: string
  email: string
  password_hash: string
  display_name: string
  role: PrRole
  created_at: string
  last_login_at: string | null
}

export interface PrQuery {
  id: string
  user_id: string | null
  source: PrSource
  source_email_id: string | null
  received_at: string
  journalist_name: string | null
  journalist_email: string | null
  outlet: string | null
  query_subject: string | null
  query_body: string
  deadline: string | null
  score: number | null
  score_rationale: string | null
  draft_response: string | null
  status: PrQueryStatus
  approved_by_user_id: string | null
  approved_at: string | null
  sent_at: string | null
  resend_email_id: string | null
  error_message: string | null
  raw_email: Record<string, unknown> | null
}

export interface PrStatsRow {
  day: string
  user_id: string
  queries_received: number
  queries_high_match: number
  queries_medium_match: number
  responses_sent: number
}
