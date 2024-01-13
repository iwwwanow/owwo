export default function delete() {
  // TODO странно выглядит.
  db.exec("PRAGMA foreign_keys = ON;");

  query += `DELETE FROM ${table_name}\n`;
  return this;
}
