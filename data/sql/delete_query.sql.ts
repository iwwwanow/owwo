import { db } from "./index.sql.js";

export default function delete_query() {
  // TODO странно выглядит.
  db.exec("PRAGMA foreign_keys = ON;");

  query += `DELETE FROM ${table_name}\n`;
  return this;
}
