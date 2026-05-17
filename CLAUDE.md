@AGENTS.md

# annelisortiz.com

Sitio web personal de **Annelis Ortiz**, implementación del Digital Authority Blueprint v2.0 (Spencer Hoffmann).

**Stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Framer Motion (paquete `motion`) + TypeScript. Deploy en Vercel.

---

## 🔒 Reglas de deploy obligatorias (NO romper)

Estas 4 reglas existen porque su violación causó incidentes documentados en la guía DAB v2.0 ("Lecciones Técnicas Críticas de Deploy"). Cada una costó horas de debugging en producción.

### 1. NUNCA `git push origin main` directo
- **Siempre:** branch + PR + merge.
- Workflow: `git checkout -b feat/X origin/main` → push → `gh pr create` → review → merge.
- **Por qué:** un push directo desde un worktree stale puede hacer que producción sirva código de otro feature.

### 2. NUNCA `vercel --prod` ni `vercel deploy --prod` manual
- Vercel auto-deploya al merge en `main` vía GitHub integration.
- **Por qué:** un deploy manual puede pinear el alias del dominio y bloquear auto-deploys posteriores.

### 3. Verificar env vars con `vercel env pull` que NO estén vacías
- Después de agregar/cambiar cualquier env var: `vercel env pull /tmp/v.env` y revisar que cada `KEY=value` tenga valor real (no `KEY=""`).
- **Por qué:** `vercel env add` vía stdin puede crear la variable con valor vacío → API endpoints 401/500 misteriosos.

### 4. Pre-flight curl antes de cada `vercel alias set`
- Si toca correr `vercel alias set <deployment-url> annelisortiz.com` (después de un alias-pin manual), antes hacer `curl -sI` comparando rutas críticas viejo vs nuevo.
- **Por qué:** evitar servir código incompleto al dominio público.

### Bonus
- **Lambdas no hot-reload env vars** → trigger nuevo deploy para forzar fresh lambdas.
- **Browser cache 404 fantasma** → si una ruta nueva muestra 404 al cliente pero `curl` funciona, instruir Cmd+Shift+R o incognito.

---

## 📐 Convenciones del proyecto

- **i18n:** ES por default, EN bajo `/en/`. App Router nested en `src/app/[lang]/`. Middleware ahora se llama **`proxy.ts`** (cambio Next.js 16).
- **Tema:** oscuro con color accent (definir tras escoger mockup).
- **Schema.org:** todo el sitio tiene JSON-LD inline (Person en root layout, Book/FAQPage/BreadcrumbList por página). Render con `JSON.stringify(jsonLd).replace(/</g, '\\u003c')` para anti-XSS.
- **AI crawlers:** robots.txt permite GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Anthropic-AI, Cohere-AI.
- **Forms:** Server Actions (`'use server'`) + `useActionState` para estado + Zod para validación server-side.
- **Estructura:** `src/app/[lang]/`, `src/components/`, `src/lib/`, `src/content/` (dictionaries ES/EN), `public/`.

## 🎯 Sobre Annelis

- **Profesión:** Mortgage Loan Officer + Agente de Bienes Raíces + Autora + Coach/Mentora.
- **Tagline:** "Ayudo a familias a aumentar su patrimonio a través del financiamiento y compra de propiedades principales y de inversión."
- **Idioma principal:** Español (responder a Annelis en español).
- **Dominio:** annelisortiz.com
