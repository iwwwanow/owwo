import { ExContext } from "../typescript/interfaces.ts";
import { eta } from "../config/eta";
import checkEditor from "../utils/checkEditor.ts";
import sql from "./_sql.ts";

export default class PageController {
  static async index({ params, cookie_authUsername }: ExContext) {
    const { page_id } = params;
    const editor$ = checkEditor(params, cookie_authUsername);
    const pages = new sql("pages");
    const page = pages
      .select(["page_id", "title", "description", "cover"])
      .where({ page_id })
      .get();
    console.log(page);

    return eta.render("page", { cookie_authUsername, editor$, page, params });
  }

  static async create({ params: { username }, set }: ExContext) {
    sql.createTable({
      table_name: "pages",
      columns: {
        page_id: "INTEGER PRIMARY KEY AUTOINCREMENT",
        title: "TEXT",
        description: "TEXT",
        cover: "BLOB",
      },
    });

    const users = new sql("users");
    const user_id = users.select("user_id").where({ username: username }).get();

    await sql.custom("createTrigger_insertAuthors_pageId");

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
    body: { title, description, media },
  }: ExContext) {
    const pages = new sql("pages");
    pages
      .update({ title: title, description: description })
      .where({ page_id: page_id })
      .run();

    set.redirect = `/page/${page_id}`;
    return;
  }
}
