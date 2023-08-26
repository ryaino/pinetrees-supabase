alter table "public"."developer_profiles" drop constraint "developer_profiles_id_fkey";

create table "public"."decoration_characteristic_mappings" (
                                                             "decoration" text not null,
                                                             "characteristic" text not null
);


alter table "public"."decoration_characteristic_mappings" enable row level security;

create table "public"."decoration_characteristics" (
  "name" text not null default ''::text
);


alter table "public"."decoration_characteristics" enable row level security;

create table "public"."profile_decorations" (
                                              "profile_id" uuid not null,
                                              "decoration_name" text not null,
                                              "professional_experience_years" real not null default '0'::real,
                                              "hobby_experience_years" real not null default '0'::real
);


alter table "public"."profile_decorations" enable row level security;

CREATE UNIQUE INDEX decoration_characteristic_mappings_pkey ON public.decoration_characteristic_mappings USING btree (decoration, characteristic);

CREATE UNIQUE INDEX decoration_characteristics_pkey ON public.decoration_characteristics USING btree (name);

CREATE UNIQUE INDEX profile_decorations_pkey ON public.profile_decorations USING btree (profile_id, decoration_name);

alter table "public"."decoration_characteristic_mappings" add constraint "decoration_characteristic_mappings_pkey" PRIMARY KEY using index "decoration_characteristic_mappings_pkey";

alter table "public"."decoration_characteristics" add constraint "decoration_characteristics_pkey" PRIMARY KEY using index "decoration_characteristics_pkey";

alter table "public"."profile_decorations" add constraint "profile_decorations_pkey" PRIMARY KEY using index "profile_decorations_pkey";

alter table "public"."decoration_characteristic_mappings" add constraint "decoration_characteristic_mappings_characteristic_fkey" FOREIGN KEY (characteristic) REFERENCES decoration_characteristics(name) ON DELETE CASCADE not valid;

alter table "public"."decoration_characteristic_mappings" validate constraint "decoration_characteristic_mappings_characteristic_fkey";

alter table "public"."decoration_characteristic_mappings" add constraint "decoration_characteristic_mappings_decoration_fkey" FOREIGN KEY (decoration) REFERENCES decorations(name) ON DELETE CASCADE not valid;

alter table "public"."decoration_characteristic_mappings" validate constraint "decoration_characteristic_mappings_decoration_fkey";

alter table "public"."profile_decorations" add constraint "profile_decorations_decoration_name_fkey" FOREIGN KEY (decoration_name) REFERENCES decorations(name) ON DELETE CASCADE not valid;

alter table "public"."profile_decorations" validate constraint "profile_decorations_decoration_name_fkey";

alter table "public"."profile_decorations" add constraint "profile_decorations_profile_id_fkey" FOREIGN KEY (profile_id) REFERENCES developer_profiles(id) ON DELETE CASCADE not valid;

alter table "public"."profile_decorations" validate constraint "profile_decorations_profile_id_fkey";

alter table "public"."developer_profiles" add constraint "developer_profiles_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."developer_profiles" validate constraint "developer_profiles_id_fkey";
