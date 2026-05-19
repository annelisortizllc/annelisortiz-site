import 'server-only'

/**
 * Strict env access for the PR Auto-Pilot subsystem.
 * Each getter throws at boot-time if the variable is missing so we never
 * silently degrade in production (the DAB v2.0 deploy notes specifically
 * warn about Vercel env vars resolving to empty strings).
 */

function required(name: string): string {
  const v = process.env[name]
  if (!v) {
    throw new Error(
      `[pr-autopilot] missing env var ${name}. Configure it in Vercel (production + preview + development) and run \`vercel env pull\` to verify.`,
    )
  }
  return v
}

export const env = {
  SUPABASE_URL: () => required('SUPABASE_URL'),
  SUPABASE_SERVICE_ROLE_KEY: () => required('SUPABASE_SERVICE_ROLE_KEY'),
  ANTHROPIC_API_KEY: () => required('ANTHROPIC_API_KEY'),
  PR_AUTH_SECRET: () => required('PR_AUTH_SECRET'),
  PR_AUTOPILOT_WEBHOOK_SECRET: () => required('PR_AUTOPILOT_WEBHOOK_SECRET'),
  RESEND_API_KEY: () => required('RESEND_API_KEY'),
}
