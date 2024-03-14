DROP TRIGGER IF EXISTS insert__pages_elements;

/* *** */
CREATE TRIGGER insert__pages_elements AFTER INSERT ON elements BEGIN
INSERT INTO
  pages_elements (element_id)
VALUES
  (NEW.element_id);

END
