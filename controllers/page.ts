import { Database } from "bun:sqlite";
import { ExContext } from "../typescript/interfaces.ts";

import stringFromSQL from "../utils/stringFromSQL";

const db = new Database("data/db.sqlite", { create: true });

export default class PageController {
  static async create({ params: { username }, set }: ExContext) {
    const query_createTable_pages = await stringFromSQL(
      "./controllers/sql/createTable_pages.sql"
    );
    db.query(query_createTable_pages).run();

    const query_createTable_user_pages = await stringFromSQL(
      "./controllers/sql/createTable_user_pages.sql"
    );
    db.query(query_createTable_user_pages).run();

    const query_insertPage = await stringFromSQL(
      "./controllers/sql/insert_page.sql"
    );
    db.query(query_insertPage).run();

    set.redirect = `/${username}`;
    return;
  }
}
