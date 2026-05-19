#!/usr/bin/env node
/**
 * Bootstrap the first PR Auto-Pilot owner user.
 * Idempotent: if the email already exists, resets the password instead.
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
 *   node scripts/bootstrap-pr-user.mjs \
 *     --email info@annelisortiz.com \
 *     --name "Annelis Ortiz" \
 *     --role owner \
 *     --password "<generated>"
 *
 * Or interactive (no --password flag): generates one and prints it.
 */

import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'
import crypto from 'node:crypto'

function arg(name, fallback = null) {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 ? process.argv[i + 1] : fallback
}

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const email = (arg('email') || '').trim().toLowerCase()
const display_name = arg('name') || 'Owner'
const role = arg('role') || 'owner'
let password = arg('password')

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY env')
  process.exit(1)
}
if (!email) {
  console.error('Pass --email <addr>')
  process.exit(1)
}
if (!['owner', 'editor', 'viewer'].includes(role)) {
  console.error('Invalid --role (owner|editor|viewer)')
  process.exit(1)
}
if (!password) {
  password = crypto.randomBytes(12).toString('base64url') // 16 chars-ish
  console.log(`Generated password: ${password}`)
}

const client = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
})

const password_hash = await bcrypt.hash(password, 12)

const { data: existing } = await client
  .from('pr_users')
  .select('id, email, role')
  .eq('email', email)
  .maybeSingle()

if (existing) {
  const { error } = await client
    .from('pr_users')
    .update({ password_hash, display_name, role })
    .eq('id', existing.id)
  if (error) {
    console.error('Update failed:', error.message)
    process.exit(1)
  }
  console.log(`✓ Updated existing user ${email} (id=${existing.id})`)
} else {
  const { data, error } = await client
    .from('pr_users')
    .insert({ email, password_hash, display_name, role })
    .select('id')
    .single()
  if (error) {
    console.error('Insert failed:', error.message)
    process.exit(1)
  }
  console.log(`✓ Created new ${role} ${email} (id=${data.id})`)
}

console.log('')
console.log('Login at: https://annelisortiz.com/admin/login')
console.log(`  email:    ${email}`)
console.log(`  password: ${password}`)
console.log('')
console.log('Annelis: store this in your password manager. The hash in the DB is one-way; you cannot retrieve the plaintext later.')
