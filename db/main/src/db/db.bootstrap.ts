import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

import { DB_FILE_NAME } from "../../drizzle.constants";

const sqlite = new Database(
  Bun.resolveSync(`../../${DB_FILE_NAME}`, import.meta.dir),
);
const mainDb = drizzle({ client: sqlite, casing: "snake_case" });

export { mainDb };
