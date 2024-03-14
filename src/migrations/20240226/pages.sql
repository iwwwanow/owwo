DROP TABLE IF EXISTS pages;

/* *** */
CREATE TABLE
  pages (
    page_id TEXT UNIQUE PRIMARY KEY,
    title TEXT CHECK (length (title) <= 64),
    description TEXT CHECK (length (description) <= 160),
    cover_blob BLOB
  );
