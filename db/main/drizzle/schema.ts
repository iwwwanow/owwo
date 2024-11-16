import { uniqueIndex } from "drizzle-orm/sqlite-core";
import { integer } from "drizzle-orm/sqlite-core";
import { text } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";

// import { sql } from "drizzle-orm"

export const acconts = sqliteTable(
  "acconts",
  {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    username: text().notNull(),
    password: text().notNull(),
  },
  (table) => {
    return {
      usernameIdx: uniqueIndex("username_idx").on(table.username),
      usernameUnique: uniqueIndex("acconts_username_unique").on(table.username),
    };
  },
);

export const drizzleMigrations = sqliteTable("__drizzle_migrations", {});
