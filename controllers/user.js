import { eta } from "../config/eta";

import File from "../middleware/file.ts";
import sql from "./sql.ts";

export default class UserController {
  static async index(c) {
    const { params } = c;

    const user_id = sql("users")
      .select("user_id")
      .where({ username: params.username })
      .get();

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );
    c.pages = pages_query.all({ $user_id: user_id });

    c.pages.forEach((page) => {
      page.src = {};
      page.src.cover = File.srcCover("pages", page.page_id);
    });

    return eta.render("profile", c);
  }
}
