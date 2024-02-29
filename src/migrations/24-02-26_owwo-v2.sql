DROP TABLE IF EXISTS users;

/* *** */
CREATE TABLE
  users (
    user_id TEXT UNIQUE PRIMARY KEY,
    username TEXT UNIQUE NOT NULL CHECK (
      length (username) >= 4
      AND length (username) <= 64
      AND username NOT GLOB '*[^!-~]+$*'
    ),
    password TEXT NOT NULL CHECK (
      length (password) >= 8
      AND length (password) <= 64
      AND password NOT GLOB '*[^ -~]+$*'
    ),
    title TEXT CHECK (length (title) <= 64),
    description TEXT CHECK (length (description) <= 160),
    cover_blob BLOB
  );

/* *** */
DROP TABLE IF EXISTS user_info;

/* *** */
CREATE TABLE
  user_info (
    user_id TEXT PRIMARY KEY,
    date_creation TEXT NOT NULL,
    date_last TEXT NOT NULL
  );

/* *** */
DROP TABLE IF EXISTS pages;

/* *** */
CREATE TABLE
  pages (
    page_id TEXT UNIQUE PRIMARY KEY,
    title TEXT CHECK (length (title) <= 64),
    description TEXT CHECK (length (description) <= 160),
    cover_blob BLOB
  );

/* *** */
DROP TABLE IF EXISTS page_info;

/* *** */
CREATE TABLE
  page_info (
    page_id TEXT UNIQUE PRIMARY KEY,
    type TEXT DEFAULT 'close' CHECK (
      type LIKE 'open'
      OR type LIKE 'invite'
      OR type LIKE 'close'
    ),
    date_creation TEXT NOT NULL,
    date_last TEXT NOT NULL
  );

/* *** */
DROP TABLE IF EXISTS elements;

/* *** */
CREATE TABLE
  elements (
    element_id TEXT UNIQUE PRIMARY KEY,
    title TEXT CHECK (length (title) <= 64),
    description TEXT CHECK (length (description) <= 160),
    cover_blob BLOB
  );

/* *** */
DROP TABLE IF EXISTS element_info;

/* *** */
CREATE TABLE
  element_info (
    element_id TEXT PRIMARY KEY,
    date_creation TEXT NOT NULL,
    date_last TEXT NOT NULL
  );

/* *** */
DROP TABLE IF EXISTS users_pages;

/* *** */
CREATE TABLE
  users_pages (
    user_id TEXT,
    page_id TEXT,
    PRIMARY KEY (user_id, page_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE
  );

/* *** */
DROP TABLE IF EXISTS pages_elements;

/* *** */
CREATE TABLE
  pages_elements (
    page_id TEXT,
    element_id TEXT,
    PRIMARY KEY (page_id, element_id),
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (element_id) REFERENCES elements (element_id) ON DELETE CASCADE ON UPDATE CASCADE
  );

/* *** */
DROP TRIGGER IF EXISTS insert__users_pages;

/* *** */
CREATE TRIGGER insert__users_pages AFTER INSERT ON pages BEGIN
INSERT INTO
  users_pages (page_id)
VALUES
  (NEW.page_id);

END;

/* *** */
DROP TRIGGER IF EXISTS insert__pages_elements;

/* *** */
CREATE TRIGGER insert__pages_elements AFTER INSERT ON elements BEGIN
INSERT INTO
  pages_elements (element_id)
VALUES
  (NEW.element_id);

END
