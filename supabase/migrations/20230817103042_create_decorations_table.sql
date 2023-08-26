create table "public"."decorations" (
    "name" text not null default ''::text,
    "image_url" text default ''::text,
    "category" text not null default ''::text
);


alter table "public"."decorations" enable row level security;

CREATE UNIQUE INDEX decorations_pkey ON public.decorations USING btree (name);

alter table "public"."decorations" add constraint "decorations_pkey" PRIMARY KEY using index "decorations_pkey";

alter table "public"."decorations" add constraint "decorations_category_fkey" FOREIGN KEY (category) REFERENCES decoration_categories(name) ON DELETE SET DEFAULT not valid;

alter table "public"."decorations" validate constraint "decorations_category_fkey";
