drop policy "Enable read access for all users" on "public"."user_profiles";

alter table "public"."user_profiles" drop constraint "user_profiles_id_fkey";

alter table "public"."user_profiles" drop constraint "user_profiles_pkey";

drop index if exists "public"."user_profiles_pkey";

drop table "public"."user_profiles";

create table "public"."developer_profiles" (
    "id" uuid not null,
    "family_name" text,
    "given_name" text,
    "contact_email" text,
    "contact_phone" text,
    "profile_picture_url" text,
    "introduction" text,
    "location" text
);


alter table "public"."developer_profiles" enable row level security;

CREATE UNIQUE INDEX user_profiles_pkey ON public.developer_profiles USING btree (id);

alter table "public"."developer_profiles" add constraint "user_profiles_pkey" PRIMARY KEY using index "user_profiles_pkey";

alter table "public"."developer_profiles" add constraint "developer_profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE SET NULL not valid;

alter table "public"."developer_profiles" validate constraint "developer_profiles_id_fkey";

create policy "Enable read access for all users"
on "public"."developer_profiles"
as permissive
for select
to public
using (true);


create policy "INSERT Service Role"
on "public"."developer_profiles"
as permissive
for insert
to service_role
with check (true);
