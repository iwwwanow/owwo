DROP TRIGGER IF EXISTS insert__users_pages;

/* *** */
CREATE TRIGGER insert__users_pages AFTER INSERT ON pages BEGIN
INSERT INTO
  users_pages (page_id)
VALUES
  (NEW.page_id);

END;
