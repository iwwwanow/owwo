ALTER TABLE connections
RENAME TO connections_t;

ALTER TABLE connections_t
RENAME TO Pages_Elements;

ALTER TABLE Pages_Elements
RENAME COLUMN page_id TO page__id;

ALTER TABLE Pages_Elements
RENAME COLUMN element_id TO element__id;

ALTER TABLE Pages_Elements
ADD COLUMN element__priority INTEGER NOT NULL default 0;
