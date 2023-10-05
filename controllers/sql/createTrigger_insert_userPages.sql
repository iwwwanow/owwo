CREATE TRIGGER IF NOT EXISTS insert_userPages_page_id AFTER INSERT ON pages BEGIN
INSERT INTO
  user_pages (page_id)
VALUES
  (NEW.page_id);

END;
