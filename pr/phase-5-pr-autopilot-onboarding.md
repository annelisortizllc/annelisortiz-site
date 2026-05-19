# Fase 5 — PR Auto-Pilot · Onboarding

El sistema técnico ya está construido en este repo. Para activarlo necesitas hacer **4 pasos** una sola vez (orden importa). Después corre solo.

| # | Paso | Tiempo | Quién |
|---|---|---|---|
| 1 | Aplicar schema en Supabase SQL Editor | 1 min | Annelis (paste + Run) |
| 2 | Pasarme Anthropic API key + nuevo Vercel token | 5 min | Annelis |
| 3 | Yo configuro env vars y deployo el sistema | — | Claude |
| 4 | Bootstrap del primer owner + setup Apps Script en Gmail | 15 min | Claude + Annelis |
| 5 | Suscripciones a 5 plataformas PR | 20 min | Annelis (o asistente) |

---

## Paso 1 · Aplicar Supabase schema (Annelis, 1 min)

1. Ve a https://supabase.com → tu proyecto `annelisortiz-prautopilot`
2. Menú izquierdo → **SQL Editor** → **New query**
3. Abre el archivo `supabase/migrations/20260518_pr_autopilot.sql` de este repo y **copia su contenido completo**
4. Pégalo en el SQL Editor → click **Run** (esquina inferior derecha)
5. Debes ver "Success. No rows returned." abajo

Esto crea las 3 tablas (`pr_users`, `pr_queries`, `pr_stats`) + triggers + RLS.

## Paso 2 · API keys (Annelis, 5 min)

### Anthropic
1. https://console.anthropic.com → Sign up con Google
2. API Keys → **Create Key** · name: `annelisortiz-prautopilot`
3. Copiar token `sk-ant-api-...` y pasarmelo

(Costo: gratis los primeros $5 USD de uso, después ~$1-3 USD/mes con tu volumen)

### Vercel
1. https://vercel.com/account/tokens
2. Borrar el anterior si existe (`claude-dab-deploy`)
3. Create Token · name: `claude-phase5` · scope: Full Account · expiration: 30 days
4. Pasarmelo

## Paso 3 · Yo configuro Vercel (Claude)

Agrego al proyecto Vercel:
- `SUPABASE_URL` — ya la tengo
- `SUPABASE_SERVICE_ROLE_KEY` — ya la tengo
- `SUPABASE_ANON_KEY` — ya la tengo
- `ANTHROPIC_API_KEY` — paso 2
- `PR_AUTH_SECRET` — genero
- `PR_AUTOPILOT_WEBHOOK_SECRET` — genero

Branch + PR + merge → Vercel deploya el sistema.

## Paso 4 · Bootstrap + Apps Script (Claude + Annelis)

### 4.1 Yo creo tu primer usuario

Desde mi terminal:
```bash
SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
node scripts/bootstrap-pr-user.mjs \
  --email info@annelisortiz.com \
  --name "Annelis Ortiz" \
  --role owner
```

Te devuelve un password generado + el `pr_user_id` (UUID). Te paso ambos.

Tu primer login: https://annelisortiz.com/admin/login

### 4.2 Annelis configura Apps Script en Gmail

1. Abre **https://script.google.com** logueada con tu Gmail (annelisortizllc@gmail.com)
2. Click **"New project"** arriba a la izquierda
3. Borra el `Code.gs` que aparece por default
4. Copia y pega TODO el contenido de `pr-autopilot/gmail-forwarder.gs` de este repo
5. En la sección CONFIG (arriba del archivo), reemplaza 2 placeholders:
   - `USER_ID` → el UUID que te paso del bootstrap
   - `WEBHOOK_SECRET` → el secret que generamos en paso 3
6. Save (Cmd+S), nombra el proyecto: **PR Auto-Pilot Forwarder**
7. Arriba selecciona la función `setupLabels` en el dropdown → click **Run**
   - Google va a pedir permisos → **Review permissions** → elegí tu cuenta → "Continue"
   - Aparece warning "Google hasn't verified this app" → Advanced → Go to PR Auto-Pilot Forwarder (unsafe)
   - Aceptar permisos
8. Click la función `pollOnce` → **Run** para test → debe loggear "Forwarded 0 emails" (todavía no llegó nada)
9. Click el icono **reloj** (Triggers) izquierda → **+ Add Trigger**:
   - Choose function: `pollPrQueries`
   - Event source: Time-driven
   - Type: **Minutes timer** · **Every 5 minutes**
   - Save

Listo. De ahora en adelante el script chequea tu Gmail cada 5 min, detecta emails de las 5 plataformas PR, y los POSTea al webhook → aparecen en `/admin/pr-autopilot`.

## Paso 5 · Suscripciones a las 5 plataformas (Annelis o asistente, 20 min)

Las 5 plataformas a las que hay que suscribirse (todas gratis, todas mandan emails diarios con queries):

### 5.1 · HARO / Featured.com (la más activa, top priority)
- https://www.featured.com (HARO renombrado en 2024)
- Sign up con tu Gmail (annelisortizllc@gmail.com)
- Confirma email
- Settings → Topics → marca: **Business**, **Real Estate**, **Personal Finance**, **Lifestyle (Hispanic-focused)**
- Frequency: **Daily** (3 emails/día con queries)

### 5.2 · Qwoted
- https://qwoted.com
- Sign up "as a Source"
- Profile: pega tu LinkedIn URL + Annelis Ortiz · NMLS #2006182
- Topics: **Mortgages**, **Real Estate**, **Personal Finance**, **Hispanic Community**

### 5.3 · Connectively
- https://www.connectively.us (era Help A B2B Writer, ahora rebrand)
- Sign up · Free tier
- Industries: **Real Estate**, **Financial Services**, **Personal Finance**

### 5.4 · Source of Sources (SOS)
- https://sourceofsources.com
- Sign up con email
- Topics: **Business**, **Real Estate**, **Family Finance**

### 5.5 · JournoRequests
- https://www.journorequests.com
- Sign up para acceso al feed diario

### Sugerencia táctica
- Si tienes asistente que maneja tu inbox: dale acceso compartido al Gmail y que ella se suscriba a las 5
- Si no: tu te suscribes y el Apps Script las procesa automáticamente
- Todas las suscripciones usan el mismo email `annelisortizllc@gmail.com` (que es donde corre el Apps Script)

---

## Cómo se usa el sistema día a día

1. Cada 5 min el Apps Script lee tu Gmail
2. Detecta emails de las 5 plataformas → POST al webhook
3. El webhook llama a Claude API → scoring (0-100) + draft de respuesta
4. La query aparece en `https://annelisortiz.com/admin/pr-autopilot` con su score
5. Tu (o tu asistente con permisos `editor`) abre el dashboard:
   - Filtra por score 70+ (los mejores matches)
   - Lee el draft generado, edita si quieres ajustar tono
   - Click **"Aprobar y enviar"** → se envía vía Resend al periodista
   - O **"Rechazar"** si no aplica
6. Resultado: 5-15 menciones reales por mes en Forbes, Infobae, Esquire, etc. con ~10 min de revisión diaria

---

## Monitoreo

- `/admin/pr-autopilot` muestra stats diarias arriba (recibidas, match alto, enviadas)
- Triggers de Apps Script tienen su propio dashboard en script.google.com → My executions (logs)
- Errores en webhook van a Vercel logs (yo los puedo revisar)
- Tabla `pr_queries` en Supabase tiene historial completo (export CSV mensual recomendado)
