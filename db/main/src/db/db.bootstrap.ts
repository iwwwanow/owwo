import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

import { DB_FILE_NAME } from "../../drizzle.constants";

const dbPath = Bun.resolveSync(`../../${DB_FILE_NAME}`, import.meta.dir);
const sqlite = new Database(dbPath);

export const mainDb = drizzle({ client: sqlite, casing: "snake_case" });
