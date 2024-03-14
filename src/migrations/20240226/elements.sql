DROP TABLE IF EXISTS elements;

/* *** */
CREATE TABLE
  elements (
    element_id TEXT UNIQUE PRIMARY KEY,
    title TEXT CHECK (length (title) <= 64),
    description TEXT CHECK (length (description) <= 160),
    cover_blob BLOB
  );
