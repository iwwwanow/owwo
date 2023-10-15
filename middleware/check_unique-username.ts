import SQL from "../controllers/sql.ts";

export default function (username: string) {
  const db_username = SQL("users").select("username").where({ username }).get();
  if (db_username) {
    throw new Error(`username '${db_username}' already exists`);
  }
}
