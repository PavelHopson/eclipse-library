create table if not exists editor_accounts (
  id uuid primary key,
  email text not null unique,
  password_salt text not null,
  password_hash text not null,
  role text not null default 'editor' check (role = 'editor'),
  created_at timestamptz not null default now()
);

create table if not exists editor_sessions (
  id uuid primary key,
  account_id uuid not null references editor_accounts(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

create table if not exists image_prompt_examples (
  id text primary key,
  title text not null,
  project text not null,
  description text not null,
  prompt text not null,
  format text not null,
  image_path text,
  image_mime text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  updated_at timestamptz not null default now(),
  updated_by uuid not null references editor_accounts(id)
);

create index if not exists editor_sessions_expiry_idx on editor_sessions (expires_at);
create index if not exists image_prompt_examples_status_idx on image_prompt_examples (status, updated_at desc);
alter table image_prompt_examples add column if not exists image_path text;
alter table image_prompt_examples add column if not exists image_mime text;
