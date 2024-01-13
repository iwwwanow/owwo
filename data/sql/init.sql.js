import { db } from "./index.sql.js";

export default async function init() {
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");

  this.tableCreate({
    table_name: "users",
    columns: {
      user_id: "TEXT PRIMARY KEY",
      username: "TEXT NOT NULL",
      password: "TEXT NOT NULL",
      date_creation: "INTEGER",
      date_lastModify: "INTEGER",
      text: "TEXT",
      markup: "TEXT DEFAULT grid",
    },
  });
  this.custom("createIndex_idx_users_username");

  this.tableCreate({
    table_name: "pages",
    columns: {
      page_id: "TEXT PRIMARY KEY",
      date_creation: "INTEGER",
      date_lastModify: "INTEGER",
      title: "TEXT",
      desc: "TEXT",
      markup: "TEXT DEFAULT grid",
      type: "DEFAULT close",
    },
  });

  await this.custom("createTable_authors");
  await this.custom("createTrigger_insertAuthors_pageId");

  this.tableCreate({
    table_name: "elements",
    columns: {
      element_id: "TEXT PRIMARY KEY",
      date_creation: "INTEGER",
      date_lastModify: "INTEGER",
      text: "TEXT",
      author_id: "TEXT",
    },
  });

  await this.custom("createTable_connections");
  await this.custom("createTrigger_insertConnections_elementId");
}
