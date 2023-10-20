CREATE TABLE IF NOT EXISTS
  connections (
    page_id TEXT,
    element_id TEXT,
    PRIMARY KEY (page_id, element_id),
    FOREIGN KEY (page_id) REFERENCES pages (page_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (element_id) REFERENCES elements (element_id) ON DELETE CASCADE ON UPDATE CASCADE
  )
