import * as t from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";

import { USERNAME_COLUMN_NAME } from "./accounts.constants";
import { PASSWORD_COLUMN_NAME } from "./accounts.constants";
import { ACCOUNTS_TABLE_NAME } from "./accounts.constants";

export const accountsTable = sqliteTable(
  ACCOUNTS_TABLE_NAME,
  {
    id: t.int().primaryKey({ autoIncrement: true }),
    [USERNAME_COLUMN_NAME]: t.text().notNull().unique(),
    [PASSWORD_COLUMN_NAME]: t.text().notNull(),
  },
  (table) => {
    return {
      usernameIndex: t
        .uniqueIndex(`${USERNAME_COLUMN_NAME}_idx`)
        .on(table[USERNAME_COLUMN_NAME]),
    };
  },
);
