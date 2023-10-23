CREATE TABLE IF NOT EXISTS
  authors (
    user_id TEXT,
    page_id TEXT,
    type TEXT,
    PRIMARY KEY (user_id, page_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE
  )
