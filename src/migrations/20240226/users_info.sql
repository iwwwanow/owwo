DROP TABLE IF EXISTS users_info;

/* *** */
CREATE TABLE
  users_info (
    user_id TEXT PRIMARY KEY,
    user_creation_date TEXT NOT NULL,
    user_change_date TEXT NOT NULL
  );
