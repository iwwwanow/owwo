ALTER TABLE authors
RENAME TO authors_t;

ALTER TABLE authors_t
RENAME TO Users_Pages;

ALTER TABLE Users_Pages
RENAME COLUMN user_id TO user__id;

ALTER TABLE Users_Pages
RENAME COLUMN page_id TO page__id;

ALTER TABLE Users_Pages
DROP COLUMN type;

ALTER TABLE Users_Pages
ADD COLUMN user__type TEXT NOT NULL default owner;

ALTER TABLE Users_Pages
ADD COLUMN page__priority INTEGER NOT NULL default 0;
