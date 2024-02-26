import { Database } from "bun:sqlite";
import { readdir } from "node:fs/promises";

export const db = new Database("./src/data/db.sqlite", { create: true });
db.exec("PRAGMA journal_mode = WAL;");

export class SqlModel {
  static async migrate() {
    const dir = "./src/migrations/";
    const files = await readdir(dir);
    const fileName = files.at(-1);
    const filePath = dir + fileName;

    const file = Bun.file(filePath);
    const queryText = await file.text();

    // const queryRows = queryText.split("\n\n");
    const queryRows = queryText.split("/* statement */");

    for (const row of queryRows) {
      console.log(row);
      const query = db.prepare(row);
      query.run();
    }
  }
}

// drop users
// drop pages
// drop elements
// drop users pages drom pages elements
// drop users pages trigger
// drop pages element trigger
