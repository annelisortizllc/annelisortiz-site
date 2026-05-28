-- DAB v2.0 Fase 2 · Lead capture · Gap B (auto-respuesta al lead)
-- Trackea el envío del email de auto-confirmación que va AL LEAD
-- (independiente del email de notificación interna a info@annelisortiz.com).
--
-- Run from Supabase SQL editor (Settings → SQL Editor → New query → paste → Run).
-- Idempotent: safe to re-run.

alter table public.leads
  add column if not exists auto_response_status text
    default 'pending'
    check (auto_response_status in ('pending','sent','failed','skipped'));

alter table public.leads
  add column if not exists auto_response_id text;

alter table public.leads
  add column if not exists auto_response_error text;

alter table public.leads
  add column if not exists auto_responded_at timestamptz;

comment on column public.leads.auto_response_status is
  'Estado del email de auto-confirmación enviado al lead (no la notificación interna).';
