DROP TABLE IF EXISTS users;

/* *** */
CREATE TABLE
  users (
    user_id TEXT UNIQUE PRIMARY KEY,
    username TEXT UNIQUE NOT NULL CHECK (
      length (username) >= 4
      AND length (username) <= 64
      AND username NOT GLOB '*[^ -~]+$*'
    ),
    password TEXT NOT NULL CHECK (
      length (password) >= 8
      AND password NOT GLOB '*[^ -~]+$*'
    ),
    title TEXT CHECK (length (title) <= 64),
    description TEXT CHECK (length (description) <= 160),
    avatar_blob BLOB
  );
