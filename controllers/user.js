import { eta } from "../config/eta";

import File from "../middleware/file.ts";
import Props from "../middleware/props.js";
import sql from "./sql.ts";

export default class UserController {
  static async index(c) {
    const {
      params: { username },
    } = c;

    const props = new Props(c);
    props.username = username;

    const user_id = sql("users").select("user_id").where({ username }).get();

    props.src = File.get_src("users", user_id);

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );
    const pages = pages_query.all({ $user_id: user_id });

    pages.forEach((page) => {
      page.src = {};
      page.src.cover = File.srcCover("pages", page.page_id);
    });

    props.pages = pages;

    return eta.render("profile", props);
  }
}
