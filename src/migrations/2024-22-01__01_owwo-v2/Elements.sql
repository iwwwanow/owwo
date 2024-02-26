ALTER TABLE elements
RENAME TO elemts_t;

ALTER TABLE elements_t
RENAME TO Elements;

ALTER TABLE Elements
RENAME COLUMN element_id TO id;

ALTER TABLE Elements
RENAME COLUMN author_id TO user__id;

ALTER TABLE Elements
ADD COLUMN image__binary TEXT NOT NULL;

ALTER TABLE Elements
ADD COLUMN state TEXT NOT NULL default draft;
