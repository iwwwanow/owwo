import { Database } from "bun:sqlite";
import { ExContext } from "../typescript/interfaces.ts";
import { eta } from "../config/eta";

import SQL from "./sql.ts";

import checkEditor from "../utils/checkEditor.ts";
import string from "./sql/_string.ts";

const db = new Database("data/db.sqlite", { create: true });

export default class PageController {
  static async index({ params, cookie_authUsername }: ExContext) {
    const editor$ = checkEditor(params, cookie_authUsername);
    return eta.render("page", {});
  }
  static async create({ params: { username }, set }: ExContext) {
    SQL.createTable("pages", [
      { name: "page_id", option: "INTEGER PRIMARY KEY AUTOINCREMENT" },
      { name: "title", option: "TEXT" },
      { name: "description", option: "TEXT" },
      { name: "cover", option: "TEXT" },
    ]);

    SQL.createTable("authors", [
      {
        name: "user_id",
        option: "INTEGER",
        type: "primary",
        foreign: {
          column: "user_id",
          parent_table: "users",
          parent_column: "user_id",
          options: "ON DELETE CASCADE ON UPDATE CASCADE",
        },
      },
      {
        name: "page_id",
        option: "INTEGER",
        type: "primary",
        foreign: {
          column: "page_id",
          parent_table: "pages",
          parent_column: "page_id",
          options: "ON DELETE CASCADE ON UPDATE CASCADE",
        },
      },
    ]);

    const user_id = SQL.select(
      ["user_id"],
      ["users"],
      [{ name: "username", value: username }]
    )[0].user_id;

    SQL.createTrigger("insert_authors_pageId", "pages", "authors", "page_id");
    SQL.insert("pages", ["title"], ["title"]);

    const last_pageId = SQL.selectLast("pages", "page_id");

    SQL.update("authors", ["user_id"], [user_id], "page_id", last_pageId);

    set.redirect = `/${username}`;
    return;
  }
}
