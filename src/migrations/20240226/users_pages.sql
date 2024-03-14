DROP TABLE IF EXISTS users_pages;

/* *** */
CREATE TABLE
  users_pages (
    user_id TEXT,
    page_id TEXT,
    user_type TEXT DEFAULT 'owner' CHECK (
      user_type LIKE 'owner'
      OR user_type LIKE 'editor'
      OR user_type LIKE 'author'
    ),
    PRIMARY KEY (user_id, page_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE
  );
