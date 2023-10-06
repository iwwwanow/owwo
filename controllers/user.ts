import { ExContext } from "../typescript/interfaces";
import { eta } from "../config/eta";

import checkEditor from "../utils/checkEditor.ts";
import _string from "./sql/_string.ts";

import SQL from "./sql.ts";

export default class UserController {
  static async index({ params, cookie_authUsername }: ExContext) {
    const editor$ = checkEditor(params, cookie_authUsername);
    const { username } = params;

    const user_ids = SQL.select(["user_id"], ["users"], {
      filter: "username",
      value: username,
    });
    const user_id = user_ids[0].user_id;

    const page_ids = SQL.select(["page_id"], ["user_pages"], {
      filter: "user_id",
      value: user_id,
    }).map(({ page_id }) => page_id);

    let pages = [];
    for (let page_id of page_ids) {
      if (!!page_id) {
        const page = SQL.select(
          ["page_id", "title", "description", "cover"],
          ["pages"],
          { filter: "page_id", value: page_id }
        );
        pages.push(page[0]);
      } else {
        // TODO пробраыавть ошибку в лог, не клиент не возвращать
        console.log("page_id incorrect");
      }
    }

    return eta.render("profile", {
      editor$,
      cookie_authUsername,
      params,
      pages,
    });
  }
}
