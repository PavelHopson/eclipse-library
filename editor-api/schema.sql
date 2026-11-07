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
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  updated_at timestamptz not null default now(),
  updated_by uuid not null references editor_accounts(id)
);

create index if not exists editor_sessions_expiry_idx on editor_sessions (expires_at);
create index if not exists image_prompt_examples_status_idx on image_prompt_examples (status, updated_at desc);
alter table image_prompt_examples add column if not exists image_path text;
alter table image_prompt_examples add column if not exists image_mime text;
alter table image_prompt_examples add column if not exists negative_prompt text not null default '';
alter table image_prompt_examples add column if not exists settings text not null default '';
alter table image_prompt_examples add column if not exists source_url text not null default '';
alter table image_prompt_examples add column if not exists rights_note text not null default '';
alter table image_prompt_examples drop constraint if exists image_prompt_examples_status_check;
alter table image_prompt_examples add constraint image_prompt_examples_status_check check (status in ('draft', 'published', 'archived'));

alter table image_prompt_examples add column if not exists style_code text not null default '';


-- Explicitly linked identities; never grant an editor role by matching email.
create table if not exists editor_identity_links (
  id uuid primary key,
  account_id uuid not null references editor_accounts(id) on delete cascade,
  issuer text not null,
  subject text not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  unique (issuer, subject),
  unique (account_id, issuer)
);
alter table editor_sessions add column if not exists identity_link_id uuid references editor_identity_links(id) on delete cascade;

alter table editor_sessions add column if not exists chat_grant text;

-- Library-local permissions; Chat never supplies a Library role.
alter table editor_accounts drop constraint if exists editor_accounts_role_check;
alter table editor_accounts add constraint editor_accounts_role_check check (role in ('owner','editor','viewer','disabled'));
create table if not exists editor_prompt_history (
 id bigint generated always as identity primary key,
 prompt_id text not null,
 actor_id uuid not null references editor_accounts(id),
 saved_at timestamptz not null default now(),
 snapshot jsonb not null
);
create index if not exists editor_prompt_history_prompt_idx on editor_prompt_history(prompt_id,id desc);
create or replace function library_record_prompt_revision() returns trigger language plpgsql as $$
begin
 insert into editor_prompt_history(prompt_id,actor_id,snapshot)
 values(new.id,new.updated_by,to_jsonb(new) - 'image_path' - 'image_mime');
 return new;
end $$;
drop trigger if exists library_prompt_revision on image_prompt_examples;
create trigger library_prompt_revision after insert or update on image_prompt_examples
 for each row execute function library_record_prompt_revision();

-- Capture the current text before the first edit after migration; safe to reapply.
insert into editor_prompt_history(prompt_id,actor_id,snapshot)
 select p.id,p.updated_by,to_jsonb(p)-'image_path'-'image_mime' from image_prompt_examples p
 where not exists(select 1 from editor_prompt_history h where h.prompt_id=p.id);
