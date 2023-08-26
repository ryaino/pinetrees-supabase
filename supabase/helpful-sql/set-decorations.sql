DO $$
DECLARE foo uuid;

BEGIN
  foo := 'cc9f4f09-7285-40ee-9b19-b1b14d496a9c';
insert into public.profile_decorations
(profile_id,
 decoration_name,
 professional_experience_years,
 hobby_experience_years
)
values
  (
    foo,
    'Angular',
    1,
    6
  ),
    (
    foo,
    'Spring',
    3.5,
    4
  ),
    (
    foo,
    '.NET Core',
    1,
    0
  ),
    (
    foo,
    'Java',
    3.5,
    7
  ),
    (
    foo,
    'JavaScript',
    1,
    6
  ),
    (
    foo,
    'TypeScript',
    1,
    6
  ),
    (
    foo,
    'Postgres',
    0.5,
    1.5
  );

END $$
