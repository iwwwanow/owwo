import { Database } from "bun:sqlite";
import { readdir } from "node:fs/promises";

export const db = new Database("./src/data/db.sqlite", { create: true });
db.exec("PRAGMA journal_mode = WAL;");

export class SqlModel {
  static async migrate() {
    const migrationsPath = "./src/migrations/";
    const migrationsDirs = await readdir(migrationsPath);
    const migrationsLastDir = migrationsDirs.at(-1);
    const migrationsLastDirPath = migrationsPath + migrationsLastDir;

    const migrationFilenames = await readdir(migrationsLastDirPath);

    for (const fileName of migrationFilenames) {
      const filePath = migrationsLastDirPath + "/" + fileName;
      const fileContent = Bun.file(filePath);
      const fileText = await fileContent.text();
      const queries = fileText.split("/* *** */");
      for (const row of queries) {
        const query = db.prepare(row);
        query.run();
      }
    }
  }
}
