import { v4 as uuidv4 } from "uuid";

import { eta } from "../config/eta";
import File from "../middleware/file.ts";
import Props from "../middleware/props.js";
import sql from "./sql.ts";

export default class PageController {
  static async index(c) {
    const {
      params: { page_id },
    } = c;

    const props = new Props(c);

    props._editor = c._editor;

    props.page = sql("pages")
      .select(["page_id", "title", "desc"])
      .where({ page_id })
      .get();

    // TODO Вывод авторов на клиент. нужен иннер джоин и один большой SQL для вывода авторов и информации страницы
    // const authors = sql("authors")
    //   .select("user_id")
    //   .where({ page_id: params.page_id })
    //   .all();
    //
    // authors.forEach((author) => {
    //   const username = sql("users")
    //     .select("username")
    //     .where({ user_id: author })
    //     .get();
    // });

    props.src = File.get_src("pages", page_id);

    const elements_query = await sql().custom_all(
      "innerJoin_elements_connections_$pageId"
    );
    const elements = elements_query.all({ $page_id: page_id });

    elements.map((element) => {
      return (element.src = File.get_src("elements", element.element_id));
    });

    props.elements = elements;

    return eta.render("page", props);
  }

  static async create(c) {
    const { cookie, set } = c;

    const page_id = uuidv4();

    sql("pages").insert({ page_id }).run();

    sql("authors")
      .update({ user_id: cookie.auth.user_id })
      .where({ page_id })
      .run();

    set.redirect = `/page/${page_id}`;
    return;
  }

  static async update(c) {
    const { set, params, body } = c;
    const { title, desc, cover, script, style } = body;

    // FIX можно внести правки, если пользователь незалогинен. исправь это. незалогиненый пользователь имеет доступ только к контроллеру INDEX
    if (!!cover.size) await File.removeCover("pages", params.page_id);

    await File.write("pages", cover, "cover", params.page_id);
    await File.write("pages", script, "script", params.page_id);
    await File.write("pages", style, "style", params.page_id);

    sql("pages")
      .update({ title, desc })
      .where({ page_id: params.page_id })
      .run();

    set.redirect = `/page/${params.page_id}`;
    return;
  }

  static async delete(c) {
    const { set, params, cookie } = c;
    await File.removeDir("pages", params.page_id);
    sql("pages").delete().where({ page_id: params.page_id }).run();
    set.redirect = `/${cookie.username}`;
  }

  static async removeFile(c) {
    const { set, params } = c;
    await File.removeFile("pages", params.page_id, params.file);
    set.redirect = `/page/${params.page_id}`;
  }
}
