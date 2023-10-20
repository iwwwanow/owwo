CREATE TRIGGER IF NOT EXISTS insertConnections_elementId AFTER INSERT ON elements BEGIN
INSERT INTO
  connections (element_id)
VALUES
  (NEW.element_id);

END
