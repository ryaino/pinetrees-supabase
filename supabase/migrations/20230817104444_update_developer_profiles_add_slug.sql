alter table "public"."developer_profiles" add column "slug" text not null default ''::text;

CREATE UNIQUE INDEX developer_profiles_slug_key ON public.developer_profiles USING btree (slug);

alter table "public"."developer_profiles" add constraint "developer_profiles_slug_key" UNIQUE using index "developer_profiles_slug_key";
