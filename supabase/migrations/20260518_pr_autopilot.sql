-- DAB v2.0 Fase 5 · PR Auto-Pilot schema
-- Run from Supabase SQL editor (Settings → SQL Editor → New query → paste → Run).
-- Idempotent: safe to re-run.

-- ============================================================================
-- pr_users: dashboard accounts (owner / editor / viewer)
-- ============================================================================
create extension if not exists "pgcrypto";

create table if not exists public.pr_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,         -- bcrypt hash
  display_name text not null,
  role text not null check (role in ('owner','editor','viewer')),
  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

create index if not exists pr_users_email_idx on public.pr_users (lower(email));

-- ============================================================================
-- pr_queries: every PR opportunity captured from the Gmail forwarder
-- ============================================================================
create table if not exists public.pr_queries (
  id uuid primary key default gen_random_uuid(),
  -- Source
  user_id uuid references public.pr_users(id) on delete set null,  -- who this query belongs to (the LO/coach the asistente forwards for)
  source text not null,                -- 'haro' | 'qwoted' | 'connectively' | 'sos' | 'journorequests' | 'other'
  source_email_id text,                -- Gmail message ID (dedupe)
  received_at timestamptz not null default now(),

  -- Parsed content
  journalist_name text,
  journalist_email text,
  outlet text,                          -- "Forbes", "Infobae"...
  query_subject text,
  query_body text not null,
  deadline timestamptz,

  -- AI scoring + draft (from Anthropic)
  score smallint check (score >= 0 and score <= 100),
  score_rationale text,                -- short explanation
  draft_response text,                  -- markdown response the LO can edit

  -- Lifecycle
  status text not null default 'pending'
    check (status in ('pending','approved','rejected','sent','error')),
  approved_by_user_id uuid references public.pr_users(id) on delete set null,
  approved_at timestamptz,
  sent_at timestamptz,
  resend_email_id text,                -- response email id when sent via Resend
  error_message text,
  raw_email jsonb                       -- snapshot of full payload for audit
);

create index if not exists pr_queries_status_idx on public.pr_queries (status, received_at desc);
create index if not exists pr_queries_user_idx on public.pr_queries (user_id, received_at desc);
create unique index if not exists pr_queries_source_email_uq
  on public.pr_queries (source, source_email_id)
  where source_email_id is not null;

-- ============================================================================
-- pr_stats: daily counts (refreshed by triggers below)
-- ============================================================================
create table if not exists public.pr_stats (
  day date not null,
  user_id uuid not null references public.pr_users(id) on delete cascade,
  queries_received int not null default 0,
  queries_high_match int not null default 0,   -- score >= 70
  queries_medium_match int not null default 0, -- 40 <= score < 70
  responses_sent int not null default 0,
  primary key (day, user_id)
);

create or replace function public.refresh_pr_stats_for(uid uuid, d date) returns void
language sql security definer set search_path = public as $$
  insert into public.pr_stats (day, user_id, queries_received, queries_high_match, queries_medium_match, responses_sent)
  select d, uid,
    count(*) filter (where (received_at at time zone 'utc')::date = d),
    count(*) filter (where (received_at at time zone 'utc')::date = d and score >= 70),
    count(*) filter (where (received_at at time zone 'utc')::date = d and score >= 40 and score < 70),
    count(*) filter (where (sent_at at time zone 'utc')::date = d and status = 'sent')
  from public.pr_queries where user_id = uid
  on conflict (day, user_id) do update set
    queries_received = excluded.queries_received,
    queries_high_match = excluded.queries_high_match,
    queries_medium_match = excluded.queries_medium_match,
    responses_sent = excluded.responses_sent;
$$;

create or replace function public.pr_queries_after_change() returns trigger
language plpgsql security definer set search_path = public as $$
declare uid uuid; d date;
begin
  uid := coalesce(new.user_id, old.user_id);
  if uid is null then return new; end if;
  d := (coalesce(new.received_at, old.received_at) at time zone 'utc')::date;
  perform public.refresh_pr_stats_for(uid, d);
  if new.sent_at is not null then
    perform public.refresh_pr_stats_for(uid, (new.sent_at at time zone 'utc')::date);
  end if;
  return new;
end $$;

drop trigger if exists pr_queries_stats_trigger on public.pr_queries;
create trigger pr_queries_stats_trigger
  after insert or update on public.pr_queries
  for each row execute function public.pr_queries_after_change();

-- ============================================================================
-- RLS — service-role only. We never expose these tables to the anon key.
-- All dashboard reads/writes go through the Next.js server using the
-- service_role secret. RLS off keeps the API simple and explicit.
-- ============================================================================
alter table public.pr_users    enable row level security;
alter table public.pr_queries  enable row level security;
alter table public.pr_stats    enable row level security;

-- No public policies = service_role bypasses RLS (full access),
-- anon + authenticated have no policies so they get zero rows. Exactly
-- what we want.
