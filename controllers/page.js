import { v4 as uuidv4 } from "uuid";

import { eta } from "../config/eta";
import File from "../middleware/file.ts";
import sql from "./sql.ts";

export default class PageController {
  static async index(c) {
    const { params } = c;

    c.page = sql("pages")
      .select(["page_id", "title", "desc"])
      .where({ page_id: params.page_id })
      .get();

    c.page.cover_src = await File.src("pages", params.page_id);

    return eta.render("page", c);
  }

  static async create(c) {
    const { cookie, set } = c;

    sql("pages").insert({ page_id: uuidv4(), title: "title" }).run();
    const last_pageId = sql("pages").select_last("page_id").get();

    sql("authors")
      .update({ user_id: cookie.user_id })
      .where({ page_id: last_pageId })
      .run();

    set.redirect = `/${cookie.username}`;
    return;
  }

  static async update(c) {
    const { set, params, body } = c;
    const { title, desc, media } = body;

    // TODO можно внести правки, если пользователь незалогинен. исправь это. незалогиненый пользователь имеет доступ только к контроллеру INDEX
    await File.write(media, params.page_id);

    sql("pages")
      .update({ title, desc })
      .where({ page_id: params.page_id })
      .run();

    set.redirect = `/page/${params.page_id}`;
    return;
  }

  static async delete(c) {
    const { set, params, cookie } = c;

    await File.remove(params.page_id);

    sql("pages").delete().where({ page_id: params.page_id }).run();

    set.redirect = `/${cookie.username}`;
  }
}
