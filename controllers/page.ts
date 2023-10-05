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

    const query_createTable_userPages = await stringFromSQL(
      "./controllers/sql/createTable_userPages.sql"
    );
    db.query(query_createTable_userPages).run();

    const query_createTrigger_insert_userPages = await stringFromSQL(
      "./controllers/sql/createTrigger_insert_userPages.sql"
    );
    db.query(query_createTrigger_insert_userPages).run();

    const query_insertPage = await stringFromSQL(
      "./controllers/sql/insert_page.sql"
    );
    db.query(query_insertPage).run();

    // TODO Не нравится именно этот момент. протестировать, как это будет себя вести, когда будут писаться несколько человек.
    const query_update_userPages_user_id = await stringFromSQL(
      "./controllers/sql/update_userPages_user_id.sql"
    );
    db.query(query_update_userPages_user_id).run({ $username: username });

    set.redirect = `/${username}`;
    return;
  }
}
