DROP TABLE IF EXISTS pages_info;

/* *** */
CREATE TABLE
  pages_info (
    page_id TEXT UNIQUE PRIMARY KEY,
    page_type TEXT DEFAULT 'close' CHECK (
      page_type LIKE 'open'
      OR page_type LIKE 'invite'
      OR page_type LIKE 'close'
    ),
    page_state TEXT DEFAULT 'default' CHECK (
      page_state LIKE 'bin'
      OR page_state LIKE 'archive'
    ),
    page_owwo_status BOOLEAN default 1,
    page_creation_date TEXT NOT NULL,
    page_change_date TEXT NOT NULL
  );
