ALTER TABLE users
RENAME TO users_t;

ALTER TABLE users_t
RENAME TO Users;

ALTER TABLE Users
RENAME COLUMN user_id TO id;

ALTER TABLE Users
RENAME COLUMN date_creation TO date__creation;

ALTER TABLE Users
RENAME COLUMN date_lastModify TO date__last;

ALTER TABLE Users
ADD COLUMN username__public TEXT NOT NULL;

ALTER TABLE Users
ADD COLUMN image__binary TEXT NOT NULL;

ALTER TABLE Users
DROP COLUMN markup;

DROP INDEX idx_users_username;

CREATE UNIQUE INDEX idx__Users_username ON Users (username, username__public);
