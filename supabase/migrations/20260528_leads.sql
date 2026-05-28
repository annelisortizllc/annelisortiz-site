-- DAB v2.0 Fase 2 · Lead capture persistence
-- Persiste cada submission del formulario de contacto ANTES de intentar Resend,
-- así no perdemos leads si el envío de email falla.
--
-- Run from Supabase SQL editor (Settings → SQL Editor → New query → paste → Run).
-- Idempotent: safe to re-run.

create extension if not exists "pgcrypto";

-- ============================================================================
-- leads: cada submission del formulario público de annelisortiz.com
-- ============================================================================
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Datos del lead (validados con Zod antes del insert)
  name text not null,
  email text not null,
  whatsapp text,
  company text,
  inquiry_type text not null,   -- ej. "Préstamo hipotecario", "Coaching para Originadores"
  message text not null,

  -- Contexto de la submission
  locale text,                  -- 'es' | 'en'
  source_path text,             -- '/', '/sobre-mi', '/servicios', etc.
  user_agent text,
  referrer text,

  -- Estado del envío de email vía Resend
  email_status text not null default 'pending'
    check (email_status in ('pending','sent','failed','skipped')),
  resend_email_id text,
  email_error text,
  emailed_at timestamptz
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (lower(email));
create index if not exists leads_inquiry_type_idx on public.leads (inquiry_type);

-- RLS: bloqueado por default, solo el service_role accede.
alter table public.leads enable row level security;
-- (sin policies → todas las operaciones requieren service_role)

comment on table public.leads is
  'DAB Phase 2 — toda submission del contact form se guarda aquí antes de Resend para no perder leads.';
