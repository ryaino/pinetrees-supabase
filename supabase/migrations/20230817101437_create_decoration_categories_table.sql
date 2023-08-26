create table "public"."decoration_categories" (
    "name" text not null default ''::text
);


alter table "public"."decoration_categories" enable row level security;

CREATE UNIQUE INDEX decoration_categories_name_key ON public.decoration_categories USING btree (name);

CREATE UNIQUE INDEX decoration_categories_pkey ON public.decoration_categories USING btree (name);

alter table "public"."decoration_categories" add constraint "decoration_categories_pkey" PRIMARY KEY using index "decoration_categories_pkey";

alter table "public"."decoration_categories" add constraint "decoration_categories_name_key" UNIQUE using index "decoration_categories_name_key";
