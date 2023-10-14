CREATE TRIGGER IF NOT EXISTS insertAuthors_pageId AFTER INSERT ON pages BEGIN
INSERT INTO
  authors (page_id)
VALUES
  (NEW.page_id);

END
