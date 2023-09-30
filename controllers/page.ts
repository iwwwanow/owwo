import { Database } from "bun:sqlite";
import { ExContext } from "../typescript/interfaces.ts";

import stringFromSQL from "../utils/stringFromSQL";

const db = new Database("data/db.sqlite", { create: true });

export default class PageController {
  static async create({ params: { username }, set }: ExContext) {
    // CHECK TABLES
    const query_checkTable_pagesList = await stringFromSQL(
      "./controllers/sql/check-table_pagesList.sql"
    );
    db.prepare(query_checkTable_pagesList).run();

    const query_checkTable_pages = await stringFromSQL(
      "./controllers/sql/check-table_pages.sql"
    );
    db.prepare(query_checkTable_pages).run();

    const query_checkTable_authorsList = await stringFromSQL(
      "./controllers/sql/check-table_authorsList.sql"
    );
    db.prepare(query_checkTable_authorsList).run();

    const query_checkTable_authors = await stringFromSQL(
      "./controllers/sql/check-table_authors.sql"
    );
    db.prepare(query_checkTable_authors).run();

    const query_checkTable_elems = await stringFromSQL(
      "./controllers/sql/check-table_elems.sql"
    );
    db.prepare(query_checkTable_elems).run();

    const query_checkTable_elemsList = await stringFromSQL(
      "./controllers/sql/check-table_elemsList.sql"
    );
    db.prepare(query_checkTable_elemsList).run();

    const query_checkTable_medias = await stringFromSQL(
      "./controllers/sql/check-table_medias.sql"
    );
    db.prepare(query_checkTable_medias).run();

    // CREATE BLANK PAGE

    set.redirect = `/${username}`;
    return;
  }
}
