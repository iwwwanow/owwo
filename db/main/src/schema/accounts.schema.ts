import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";

export const accountsTable = sqliteTable(
  "accounts",
  {
    id: t.int().primaryKey({ autoIncrement: true }),
    username: t.text().notNull().unique(),
    password: t.text().notNull(),
  },
  (table) => {
    return {
      usernameIndex: t.uniqueIndex("username_idx").on(table.username),
    };
  },
);
