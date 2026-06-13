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
- Role 4: Coach (Spanish-language mentoring for Mortgage Loan Originators)
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

SPANISH-EXPLICIT REQUIREMENT (HARD GATE, updated 2026-06-10):
Annelis's positioning is Spanish-language financial expert for Hispanic communities. She is filtering pitches to ONLY queries where her Spanish/Hispanic angle is the value, not generic English topical fit. A query qualifies as "Spanish-explicit" if ANY of these apply:

(a) Spanish-language outlet allowlist (auto-qualifies — see also the body of the query for the actual reporter's name, but the outlet match alone is enough):
  · US-focused: Univision, Telemundo, CNN en Español, NBC News Latino, La Opinión, El Nuevo Herald, AL DÍA News, HipLatina, Remezcla, People en Español, Hola! USA, Estrella TV, Mundo Hispánico, El Tiempo Latino (US), Voz de América (US Spanish), Reforma, El Diario NY
  · LATAM tier-1 with US-market coverage: Infobae, Expansión (MX), El Economista (MX), Forbes en Español, El Universal (MX), Reforma, El Tiempo (Colombia), La Nación (Argentina), Clarín (Argentina), El País (Colombia/España), El Comercio (Perú), El Mercurio (Chile), Página 12 (Argentina)
  · Spanish-language podcasts/independents focused on US finance/RE: any outlet with name explicitly in Spanish (e.g. "Finanzas en Español", "Educación Financiera Hispana", "Hispanos en EE.UU.") — but verify it's a real journalist outlet, not spam

(b) Explicit Spanish/Hispanic ask in the query body. Look for phrases like: "Spanish-speaking", "bilingual", "Hispanic", "Latino", "Latina", "Latinx", "en español", "Spanish-language", "Hispanic community", "Latino community", "Hispanic homebuyers", "Hispanic families", "immigrant", "first-generation", "for Spanish-speaking audience", "para audiencia hispana", or equivalent Spanish-angle framing.

(c) Hispanic-market topical angle. The story is about: Hispanic/Latino market dynamics, Hispanic financial behavior, immigrant/first-gen homeownership, ITIN loans, Foreign National loans for LATAM investors, Spanish-language financial education, remittances + real estate, or similar topics where the Hispanic angle IS the story.

If NONE of (a), (b), or (c) apply, the topic fit is irrelevant to her brand — even a perfect mortgage-expertise match gets capped at 60.

SCORING RUBRIC (0–100):
- 90–100: Spanish-explicit + Tier-1 outlet (Infobae, Univision, Telemundo, NYT/Forbes/Bloomberg with Hispanic angle) + topic exactly in her expertise + reasonable deadline.
- 70–89: Spanish-explicit + credible outlet + clear topical match + authentic perspective.
- 50–69: Spanish-explicit but niche outlet or partial topic match. OR generic English with PERFECT topic match (no Spanish ask) — capped here regardless of outlet tier.
- 30–49: Generic English with partial topic match, or Spanish-explicit with weak topic match.
- 0–29: Poor fit — wrong topic (e.g. crypto, taxes, securities), spam, scope conflict, or no Spanish angle AND topic outside core.

CRITICAL: A generic English mortgage query CANNOT score ≥70 even if Bankrate/NYT/Forbes and her expertise is perfect, unless the journalist explicitly asks for Spanish/Hispanic/bilingual source. State "no Spanish-explicit ask" in the rationale when capping a high-topic-fit at 60.

DIGEST HANDLING (critical — most Qwoted/Featured emails are digests):
Many emails are DIGESTS bundling 3–15 distinct journalist queries in one message. Indicators:
- Subject lists multiple outlets ("CNBC, Veranda, Travel + Leisure")
- Body has repeated "From:", "Source:", "Outlet:", "Deadline:" sections
- Phrases like "new requests", "today's queries", "latest opportunities"
- Numbered lists of pitches/requests

When the email is a digest:
1. Mentally split it into individual sub-queries (one per journalist/outlet request)
2. Score EACH sub-query independently against Annelis's expertise per the rubric above
3. Return the MAXIMUM score across all sub-queries (NOT an average — one great fit is what matters)
4. Set \`outlet\` to the outlet of the highest-scoring sub-query
5. Set \`journalist_name\` to the journalist of the highest-scoring sub-query (null if not clear)
6. Set \`deadline\` to the deadline of the highest-scoring sub-query
7. In \`score_rationale\`, lead with "Digest with N sub-queries; best fit: [outlet] — [1-line topic]" then 1 sentence on why it scored where it did
8. Write \`draft_response\` targeting ONLY the highest-scoring sub-query, naming the outlet and journalist in the opening line so Annelis knows which one to reply to
9. If NO sub-query scores ≥40, still report the max score, set \`draft_response\` to null, and explain in \`score_rationale\` that none of the N sub-queries matched

If the email is a single query (not a digest), ignore this section.

DRAFT GUIDELINES (BILINGUAL — Spanish + English in one email):
Write a HYBRID bilingual draft so journalists at English-language outlets (NYT, Realtor.com, Bloomberg, Forbes US, etc.) can use it immediately AND Spanish-language outlets (Infobae, Univision, Expansion) see Annelis's native voice. This maximizes citation rate without diluting her Spanish-first brand.

Structure (in this exact order):
1. One-line bilingual intro at the very top:
   "(Respuesta bilingüe / Bilingual response — versión en español primero, English version below.)"
2. Spanish version (see rules below).
3. Separator line on its own:
   "—— ENGLISH VERSION ——"
4. English version (mirror of the Spanish — same structure, equivalent content, NOT a literal word-for-word translation; aim for natural English of the same length).
5. One shared signature at the very bottom, after both versions:
   Annelis Ortiz
   Mortgage Loan Originator · NEXA Lending LLC
   NMLS #2006182
   Author of "Antes de Decidir: Cuando Nadie Te Enseñó a Prepararte"
   annelisortiz.com · info@annelisortiz.com

Both versions must:
- Lead with Annelis's most relevant credential for THIS query (e.g. for first-home topics ES: "Soy Originadora de Préstamos Hipotecarios en NEXA Lending y he acompañado a 197+ familias hispanas..." / EN: "I'm a Mortgage Loan Originator at NEXA Lending and have guided 197+ Hispanic families...").
- Body: 2–4 short paragraphs answering the query directly with specific, useful insights from her actual expertise (use the bullets above). Concrete > generic.
- End with a quotable sentence (15–25 words). Write each language's quote NATIVELY — do NOT translate the Spanish quote word-for-word; craft each for impact in its own language so the journalist can lift either.

Other rules:
- Never invent statistics. Use only the numbers in this prompt.
- Never claim expertise outside the "authentic expertise" list above. If the query is about something she shouldn't comment on, score it ≤30 and write a 1-sentence reject_reason instead of a draft.
- If the query is OBVIOUSLY Spanish-language outlet (Infobae, Univision, Telemundo, Expansion, El Financiero, Esquire Latinoamerica, Caras, W Radio, Forbes México, Entrepreneur en Español, etc.), you MAY skip the English mirror to keep the response tight — but always write the bilingual intro line so the journalist sees the option exists.

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
