import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

import { MAIN_DB_NAME } from "./db.constants";

const sqlite = new Database(MAIN_DB_NAME);
const mainDb = drizzle(sqlite);

export { mainDb };
