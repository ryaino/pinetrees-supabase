insert into
public.decoration_categories (name)
values
('Framework'),
('Language'),
('Database'),
('Software'),
('Library');

insert into
  public.decoration_characteristics (name)
values
('JavaScript Framework'),
('Java Framework'),
('SQL Database'),
('C# Framework'),
('NoSQL Database'),
('Dependency Injection Framework'),
('Backend Framework')
;

insert into
public.decorations (name, image_url, category)
values
('Angular', 'https://angular.io/assets/images/logos/angular/angular.png', 'Framework'),
('React', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', 'Framework'),
('Vue', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png', 'Framework'),
('Spring', 'https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png', 'Framework'),
('.NET Core', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png', 'Framework'),

('Java', 'https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png', 'Language'),
('C#', 'https://static.cdnlogo.com/logos/c/27/c.svg', 'Language'),
('JavaScript', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png', 'Language'),
('TypeScript', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png', 'Language'),

('Postgres', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png', 'Database'),
('MySQL', 'https://cdn.freebiesupply.com/logos/large/2x/mysql-logo-png-transparent.png', 'Database'),
('MongoDB', 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png', 'Database');


insert into
  public.decoration_characteristic_mappings (decoration, characteristic)
values
  ( 'Angular', 'JavaScript Framework'),
  ( 'React', 'JavaScript Framework'),
  ( 'Vue', 'JavaScript Framework'),
  ( 'Spring', 'Java Framework'),
  ( '.NET Core', 'C# Framework'),
  ( 'Postgres', 'SQL Database'),
  ( 'MySQL', 'SQL Database'),
  ( 'MongoDB', 'NoSQL Database'),
  ( 'Spring', 'Dependency Injection Framework'),
  ( '.NET Core', 'Dependency Injection Framework'),
  ( 'Angular', 'Dependency Injection Framework'),
  ( 'Spring', 'Backend Framework'),
  ( '.NET Core', 'Backend Framework');
