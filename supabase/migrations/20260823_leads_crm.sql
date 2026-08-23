-- DAB v2.0 Fase 2 · Lead capture · Sync a CRM (GoHighLevel)
-- Trackea el push de cada lead al CRM. El sync nunca bloquea el signup:
-- si GHL falla, el lead ya está guardado aquí y se puede reintentar.
--
-- Run from Supabase SQL editor (Settings → SQL Editor → New query → paste → Run).
-- Idempotent: safe to re-run.

alter table public.leads
  add column if not exists crm_status text
    not null default 'pending'
    check (crm_status in ('pending','synced','failed','skipped'));

alter table public.leads
  add column if not exists crm_contact_id text;

alter table public.leads
  add column if not exists crm_error text;

alter table public.leads
  add column if not exists crm_synced_at timestamptz;

-- Para encontrar rápido los leads que hay que reintentar.
create index if not exists leads_crm_status_idx
  on public.leads (crm_status)
  where crm_status in ('pending','failed');

comment on column public.leads.crm_status is
  'Estado del sync a GoHighLevel. failed/pending = reintentable, el lead ya está a salvo en esta tabla.';

comment on column public.leads.crm_contact_id is
  'contactId devuelto por GHL (contacts/upsert). Sirve para actualizar el contacto después.';
