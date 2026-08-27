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

-- ---------------------------------------------------------------------------
-- La clasificación vive AQUÍ, no en la app.
--
-- El panel del CRM es un proyecto aparte (repo privado `annelis-crm`). Si cada
-- app clasificara por su cuenta habría dos copias que deben coincidir y nada
-- las compararía — el patrón que el espejo del Master Brain ya encontró 4 veces.
-- Con el trigger, cualquier app que inserte en `leads` queda clasificada igual.
-- ---------------------------------------------------------------------------

create or replace function public.leads_classify_line()
returns trigger
language plpgsql
as $$
begin
  -- Solo clasifica si nadie lo hizo explícitamente ('other' es el default).
  if new.business_line is null or new.business_line = 'other' then
    if new.inquiry_type ilike '%club%' then
      new.business_line := 'kids';
    elsif new.inquiry_type in ('Préstamo hipotecario','Mortgage loan',
                               'Preparación financiera / crédito','Financial preparation / credit')
          or new.inquiry_type ilike 'Lead magnet%' then
      new.business_line := 'mortgage';
    elsif new.inquiry_type in ('Compra de propiedad','Property purchase',
                               'Inversión en bienes raíces','Real estate investment') then
      new.business_line := 'real_estate';
    else
      new.business_line := 'other';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists leads_classify_line_trg on public.leads;

create trigger leads_classify_line_trg
  before insert on public.leads
  for each row
  execute function public.leads_classify_line();

comment on column public.leads.business_line is
  'Línea de negocio. La asigna sola el trigger leads_classify_line_trg al insertar.';

comment on column public.leads.stage is
  'Etapa de seguimiento. Qué etapa aplica a qué línea se decide en el repo privado annelis-crm.';

comment on column public.leads.notes is
  'Notas privadas de Annelis. Nunca se envían al contacto.';
