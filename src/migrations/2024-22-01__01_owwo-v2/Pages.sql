ALTER TABLE pages
RENAME TO pages_t;

ALTER TABLE pages_t
RENAME TO Pages;

ALTER TABLE Pages
RENAME COLUMN page_id TO id;

ALTER TABLE Pages
RENAME COLUMN date_creation TO date__creation;

ALTER TABLE Pages
RENAME COLUMN date_lastModify TO date__last;

ALTER TABLE Pages
RENAME COLUMN desc TO text;

ALTER TABLE Pages
DROP COLUMN title;

ALTER TABLE Pages
DROP COLUMN markup;

ALTER TABLE Pages
DROP COLUMN type;

ALTER TABLE Pages
ADD COLUMN type__availability TEXT NOT NULL default public;

ALTER TABLE Pages
ADD COLUMN type__management TEXT NOT NULL default close;

ALTER TABLE Pages
ADD COLUMN state TEXT NOT NULL default draft;

ALTER TABLE Pages
ADD COLUMN image__binary TEXT NOT NULL;
