-- CRM interno · línea de negocio + etapa de seguimiento
--
-- Annelis trabaja tres líneas y necesita verlas por separado:
--   mortgage    · originación hipotecaria
--   real_estate · bienes raíces
--   kids        · Pequeños Héroes del Dinero
--   other       · prensa, conferencias, coaching — no son pipeline de venta
--
-- Run from Supabase SQL editor. Idempotent: safe to re-run.

alter table public.leads
  add column if not exists business_line text
    not null default 'other'
    check (business_line in ('mortgage','real_estate','kids','other'));

-- Etapas: el set es la unión de las tres líneas. Cada línea usa el subconjunto
-- que le aplica (ver src/lib/crm/pipeline.ts, que es la fuente de verdad de
-- qué etapa se ofrece en qué línea).
alter table public.leads
  add column if not exists stage text
    not null default 'nuevo'
    check (stage in (
      'nuevo','contactado','bienvenida','activo',
      'precalificado','aplico','compro_libro','cerrado','perdido','inactivo'
    ));

alter table public.leads
  add column if not exists stage_updated_at timestamptz;

-- Notas privadas de Annelis sobre la persona. Nunca sale al cliente.
alter table public.leads
  add column if not exists notes text;

-- El panel lista por línea y ordena por fecha.
create index if not exists leads_line_created_idx
  on public.leads (business_line, created_at desc);

-- Para detectar la misma persona en varias líneas (cruce Club → hipoteca).
create index if not exists leads_email_lower_idx
  on public.leads (lower(email));

-- ---------------------------------------------------------------------------
-- Backfill: clasificar lo que ya existe. Solo toca filas todavía en 'other',
-- así que re-ejecutarlo no pisa una clasificación corregida a mano.
-- ---------------------------------------------------------------------------

update public.leads set business_line = 'kids'
where business_line = 'other'
  and inquiry_type ilike '%club%';

update public.leads set business_line = 'mortgage'
where business_line = 'other'
  and (
    inquiry_type in ('Préstamo hipotecario','Mortgage loan',
                     'Preparación financiera / crédito','Financial preparation / credit')
    or inquiry_type ilike 'Lead magnet%'
  );

update public.leads set business_line = 'real_estate'
where business_line = 'other'
  and inquiry_type in ('Compra de propiedad','Property purchase',
                       'Inversión en bienes raíces','Real estate investment');

comment on column public.leads.business_line is
  'Línea de negocio derivada de inquiry_type al insertar (src/lib/crm/pipeline.ts · classifyLine).';

comment on column public.leads.stage is
  'Etapa de seguimiento. El set válido por línea vive en src/lib/crm/pipeline.ts.';

comment on column public.leads.notes is
  'Notas privadas de Annelis. Nunca se envían al contacto.';
