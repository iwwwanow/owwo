import { ExContext } from "../typescript/interfaces.ts";
import { eta } from "../config/eta";
import checkEditor from "../utils/checkEditor.ts";
import sql from "./_sql.ts";
import File from "../middleware/file.ts";

export default class PageController {
  static async index({ params, cookie_authUsername }: ExContext) {
    const { page_id } = params;
    const editor$ = checkEditor(params, cookie_authUsername);

    sql.init();

    const pages = new sql("pages");
    let page = pages
      .select(["page_id", "title", "desc"])
      .where({ page_id })
      .get();

    return eta.render("page", { cookie_authUsername, editor$, page, params });
  }

  static async create({ params: { username }, set }: ExContext) {
    const users = new sql("users");
    const user_id = users.select("user_id").where({ username: username }).get();

    const pages = new sql("pages");
    pages.insert({ title: "title" }).run();

    const last_pageId = pages.select("page_id").last().get();

    if (typeof user_id === "number" && typeof last_pageId === "number") {
      const authors = new sql("authors");
      authors
        .update({ user_id: user_id })
        .where({ page_id: last_pageId })
        .run();
    } else {
      throw new Error("id`s is not number");
    }

    set.redirect = `/${username}`;
    return;
  }

  static async update({
    set,
    params: { page_id },
    body: { title, desc, media },
  }: ExContext) {
    await File.write(media, page_id);

    const pages = new sql("pages");
    pages.update({ title, desc }).where({ page_id: page_id }).run();

    set.redirect = `/page/${page_id}`;
    return;
  }
}
