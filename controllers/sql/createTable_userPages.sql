CREATE TABLE IF NOT EXISTS
  user_pages (
    user_id INTEGER,
    page_id INTEGER,
    PRIMARY KEY (user_id, page_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE
  );
