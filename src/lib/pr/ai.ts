import 'server-only'
import Anthropic from '@anthropic-ai/sdk'
import { env } from './env'

/**
 * Anthropic-powered scoring + draft for incoming PR queries.
 * Uses the latest Claude model with caching to keep cost predictable.
 */

let client: Anthropic | null = null
function ai(): Anthropic {
  if (!client) client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY() })
  return client
}

// Annelis's profile baked into the system prompt so every call has full context.
// Cached on Anthropic's side (`cache_control: ephemeral`) so repeat calls only
// charge cache-read pricing for this large preamble.
const SYSTEM_PROMPT = `You are the PR Auto-Pilot for Annelis Ortiz, a Mortgage Loan Originator and Real Estate Agent based in the United States. You triage incoming press queries (HARO, Featured, Qwoted, Connectively, Source of Sources, JournoRequests) and decide which ones Annelis should respond to.

ANNELIS PROFILE (canonical, do not invent):
- Name: Annelis Ortiz
- Role 1: Mortgage Loan Originator at NEXA Lending LLC (NMLS #2006182)
- Role 2: Real Estate Agent
- Role 3: Author of "Antes de Decidir: Cuando Nadie Te Enseñó a Prepararte" (Spanish, on Amazon as B0GD97JM53) — a guide on financial preparation before buying property
- Role 4: Spanish-language Coach for Mortgage Loan Originators
- Education: Universidad de Puerto Rico, Recinto de Río Piedras (Accounting)
- Experience: 5+ years in US mortgage and real estate industry
- Clients served: 197+ families, 30,000+ digital community
- Geography: United States, Puerto Rico, Latin America
- Languages: Spanish (primary), English (functional)
- Areas of authentic expertise:
  · Mortgage financing (conventional, FHA, VA, jumbo, DSCR, investment)
  · First-time home buyers, especially Hispanic families
  · Credit preparation before mortgage application
  · Real estate investment fundamentals (multifamily, rentals)
  · Financial education for Hispanic communities in the US
  · Coaching/mentoring for Mortgage Loan Originators (especially Hispanic LOs)
  · Spanish-language financial content
- Areas she SHOULD NOT speak on: tax law specifics, real estate law specifics outside her licensing states, investment securities, anything outside US mortgage/real estate.

SCORING RUBRIC (0–100):
- 90–100: Perfect fit — Tier-1 outlet (Forbes, Bloomberg, Inc, Infobae, Expansion, Univision) + topic exactly in her expertise + Spanish-friendly + reasonable deadline.
- 70–89: Strong fit — credible outlet + clear topical match + she has authentic perspective.
- 50–69: Reasonable fit — niche outlet or partial topic match. Still worth responding.
- 30–49: Weak fit — tangentially related, less prestigious outlet, or topic outside her core.
- 0–29: Poor fit — wrong topic (e.g. crypto, taxes, securities), spam, or scope conflict.

DRAFT GUIDELINES:
- ALWAYS write the draft in SPANISH, regardless of the journalist's query language. Annelis's brand is Spanish-first Hispanic financial expertise; responding in Spanish reinforces her positioning even with bilingual journalists at English-language US outlets. If the journalist asked in English, write Spanish and add a single short line at the very top: "(Respondo en español; puedo traducir al inglés si lo prefiere — solo avíseme.)"
- Lead with Annelis's most relevant credential for THIS query (e.g. para temas de primera vivienda: "Soy Originadora de Préstamos Hipotecarios en NEXA Lending y he acompañado a 197+ familias hispanas a prepararse para su primera compra...").
- Body: 2–4 short paragraphs answering the query directly with specific, useful insights from her actual expertise (use the bullets above). Concrete > generic.
- End with a quotable sentence in Spanish (15–25 words, ready to lift into the article in original or translation).
- Include her contact in a signature: Annelis Ortiz · NMLS #2006182 · annelisortiz.com · info@annelisortiz.com
- Never invent statistics. Use only the numbers in this prompt.
- Never claim expertise outside the "authentic expertise" list above. If the query is about something she shouldn't comment on, score it ≤30 and write a 1-sentence reject_reason instead of a draft.

OUTPUT FORMAT:
You MUST respond with a single JSON object and nothing else. Schema:
{
  "score": 0-100 integer,
  "score_rationale": "1-2 sentence explanation of the score",
  "outlet": "outlet name parsed from the email or null",
  "journalist_name": "journalist name parsed from the email or null",
  "deadline": "ISO 8601 timestamp parsed from the email or null",
  "language": "es",
  "draft_response": "the full draft email body OR null if score < 40"
}`

export interface AiScoringResult {
  score: number
  score_rationale: string
  outlet: string | null
  journalist_name: string | null
  deadline: string | null
  language: 'es' | 'en'
  draft_response: string | null
}

/** Score + draft a single PR query. Returns null only on hard API failure. */
export async function scoreAndDraft(
  queryBody: string,
  context: { subject?: string; from?: string } = {},
): Promise<AiScoringResult | null> {
  const userMsg = [
    context.subject ? `Subject: ${context.subject}` : '',
    context.from ? `From: ${context.from}` : '',
    '',
    queryBody,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const res = await ai().messages.create({
      model: 'claude-opus-4-7',
      max_tokens: 2048,
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [{ role: 'user', content: userMsg }],
    })

    // Find the first text block, strip code fences if any.
    const text = res.content
      .map((b) => (b.type === 'text' ? b.text : ''))
      .join('')
      .trim()

    const jsonStr = text
      .replace(/^```(?:json)?\s*/, '')
      .replace(/\s*```$/, '')
      .trim()

    const parsed = parseLooseJson(jsonStr) as AiScoringResult
    // Defensive clamps
    parsed.score = Math.max(0, Math.min(100, Math.round(parsed.score)))
    parsed.language = 'es'
    return parsed
  } catch (err) {
    console.error('[pr-autopilot/ai] scoreAndDraft failed', err)
    return null
  }
}

/**
 * Tolerant JSON parser. Claude (and other LLMs) sometimes emit JSON where
 * multi-line string values contain literal `\n`/`\r`/`\t` instead of escaped
 * versions — strict JSON.parse rejects this. We try strict first, then walk
 * the text escaping control chars only when they sit inside a string.
 */
function parseLooseJson(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    // fall through to repair
  }

  let out = ''
  let inString = false
  let escaped = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (escaped) {
      out += c
      escaped = false
      continue
    }
    if (c === '\\') {
      out += c
      escaped = true
      continue
    }
    if (c === '"') {
      inString = !inString
      out += c
      continue
    }
    if (inString) {
      if (c === '\n') out += '\\n'
      else if (c === '\r') out += '\\r'
      else if (c === '\t') out += '\\t'
      else out += c
    } else {
      out += c
    }
  }
  return JSON.parse(out)
}
