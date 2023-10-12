import { ExContext } from "../typescript/interfaces";
import { eta } from "../config/eta";
import sql from "./_sql.ts";
import checkEditor from "../utils/checkEditor.ts";
import checkType from "../typescript/checkType.ts";

import * as fs from "node:fs";

export default class UserController {
  static async index({ params, cookie_authUsername }: ExContext) {
    const editor$ = checkEditor(params, cookie_authUsername);
    const { username } = params;

    const users = new sql("users");
    const user_id = users.select("user_id").where({ username: username }).get();

    // TODO не работает!
    checkType.number(user_id);

    const authors = new sql("authors");
    const page_ids = authors.select("page_id").where({ user_id }).all();

    let pages_array = [];
    for (let page_id of page_ids) {
      if (!!page_id) {
        // TODO поправь этот момент, можно запрашивать все страницы разом.
        const pages = new sql("pages");
        const page = pages
          .select(["page_id", "title", "desc"])
          .where({ page_id })
          .get();

        // TODO перенести в мидлевайр ФАЙЛ
        let page_dir = `./public/data_uploads/pages/${page_id}`;
        if (fs.existsSync(page_dir)) {
          fs.readdirSync(page_dir).forEach((file) => {
            if (file.split(".").at(0) === "cover") {
              page.cover_src = page_dir.substring(1) + "/" + file;
            }
          });
        }

        pages_array.push(page);
      } else {
        // TODO пробраыавть ошибку в лог, не клиент не возвращать
        console.log("page_id incorrect");
      }
    }

    return eta.render("profile", {
      editor$,
      cookie_authUsername,
      params,
      pages: pages_array,
    });
  }
}
