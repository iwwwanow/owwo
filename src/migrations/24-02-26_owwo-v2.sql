DROP TABLE IF EXISTS users;

/* block */
CREATE TABLE
  users (
    user_id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    title TEXT,
    description TEXT
  );

/* block */
DROP TABLE IF EXISTS pages;

/* block */
CREATE TABLE
  pages (
    page_id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT
  );

/* block */
DROP TABLE IF EXISTS elements;

/* block */
CREATE TABLE
  elements (
    element_id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT
  );

/* block */
DROP TABLE IF EXISTS users_pages;

/* block */
CREATE TABLE
  users_pages (
    user_id TEXT,
    page_id TEXT,
    PRIMARY KEY (user_id, page_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE
  );

/* block */
DROP TABLE IF EXISTS pages_elements;

/* block */
CREATE TABLE
  pages_elements (
    page_id TEXT,
    element_id TEXT,
    PRIMARY KEY (page_id, element_id),
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (element_id) REFERENCES elements (element_id) ON DELETE CASCADE ON UPDATE CASCADE
  );

/* block */
DROP TRIGGER IF EXISTS insert__users_pages;

/* block */
CREATE TRIGGER insert__users_pages AFTER INSERT ON pages BEGIN
INSERT INTO
  users_pages (page_id)
VALUES
  (NEW.page_id);

END;

/* block */
DROP TRIGGER IF EXISTS insert__pages_elements;

/* block */
CREATE TRIGGER insert__pages_elements AFTER INSERT ON elements BEGIN
INSERT INTO
  pages_elements (element_id)
VALUES
  (NEW.element_id);

END
