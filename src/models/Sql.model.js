import { Database } from "bun:sqlite";
import { readdir } from "node:fs/promises";

export const db = new Database("./src/data/db.sqlite", { create: true });

export class SqlModel {
  static async migrate() {
    const dir = "./src/migrations/";
    const files = await readdir(dir);
    const fileName = files.at(-1);
    const filePath = dir + fileName;

    const file = Bun.file(filePath);
    const query = await file.text();

    console.log(query);
  }
}
