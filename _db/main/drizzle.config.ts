import { defineConfig } from "drizzle-kit";

import { DB_FILE_NAME } from "./drizzle.constants";

export default defineConfig({
  out: "./drizzle",
  dialect: "sqlite",
  schema: "./src/schema",
  dbCredentials: {
    url: DB_FILE_NAME,
  },
});
