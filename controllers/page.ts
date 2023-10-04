import { Database } from "bun:sqlite";
import { ExContext } from "../typescript/interfaces.ts";

import stringFromSQL from "../utils/stringFromSQL";

const db = new Database("data/db.sqlite", { create: true });

export default class PageController {
  static async create({ params: { username }, set }: ExContext) {
    // CHECK TABLE

    // CREATE BLANK PAGE
    // TODO добавление автора
    const query_insert_pageBlank = await stringFromSQL(
      "./controllers/sql/insert_page-blank.sql"
    );
    const result = db.prepare(query_insert_pageBlank).run();
    console.log(result);

    set.redirect = `/${username}`;
    return;
  }
}
