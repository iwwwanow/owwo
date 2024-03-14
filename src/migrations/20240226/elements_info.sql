DROP TABLE IF EXISTS elements_info;

/* *** */
CREATE TABLE
  elements_info (
    element_id TEXT PRIMARY KEY,
    element_user_id TEXT,
    element_owwo_status BOOLEAN default 1,
    element_creation_date TEXT NOT NULL,
    element_change_date TEXT NOT NULL,
    FOREIGN KEY (element_user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE
  );
