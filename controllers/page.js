import { v4 as uuidv4 } from "uuid";
import { marked } from "marked";

import sql from "./sql.ts";
import { eta } from "../config/eta";

import File from "../middleware/file.ts";
import Props from "../middleware/props.js";

export default class PageController {
  static async index(c) {
    const {
      params,
      cookie,
      query,
      params: { page_id },
    } = c;

    const props = new Props(c);
    props.page_type = "page";

    if (query.mode) props.view_mode = query.mode;

    const page = sql("pages")
      .select(["page_id", "title", "desc", "markup"])
      .where({ page_id })
      .get();

    props.page.title = page.title;
    props.page.desc = page.desc;
    props.page.markup = page.markup;
    props.page.page_id = page.page_id;

    // TODO Вывод авторов на клиент. нужен иннер джоин и один большой SQL для вывода авторов и информации страницы
    const authors = sql("authors")
      .select(["user_id", "type"])
      .where({ page_id: params.page_id })
      .all();

    if (cookie && cookie.auth) {
      const author = authors.find(
        (author) => author.user_id === cookie.auth.user_id
      );
      if (author.type === "owner") props.user_type = "owner";
    }

    authors.forEach((author) => {
      author.username = sql("users")
        .select("username")
        .where({ user_id: author.user_id })
        .get();
      props.authors.push(author);
    });

    // TODO упаковать это в модлевайр PROPS
    props.page.src = File.get_src("pages", page_id);

    const elements_query = await sql().custom_all(
      "innerJoin_elements_connections_$pageId"
    );
    const elements = elements_query
      .order("date_lastModify")
      .all({ $page_id: page_id });

    elements.map((element) => {
      return (element.src = File.get_src("elements", element.element_id));
    });

    elements.map((element) => {
      if (element.text) {
        const text = element.text;
        element.html = marked.parse(text);
        return element;
      }
    });

    props.elements = elements;

    return eta.render("PAGE", props);
  }

  static async create(c) {
    const { cookie, set } = c;

    const page_id = uuidv4();

    sql("pages")
      .insert({
        page_id,
        date_creation: Date.now(),
        date_lastModify: Date.now(),
      })
      .run();

    sql("authors")
      .update({ user_id: cookie.auth.user_id, type: "owner" })
      .where({ page_id })
      .run();

    set.redirect = `/page/${page_id}`;
    return;
  }

  static async update(c) {
    const { set, params, body } = c;
    const { title, desc, cover, script, style, markup } = body;

    // FIX можно внести правки, если пользователь незалогинен. исправь это. незалогиненый пользователь имеет доступ только к контроллеру INDEX
    if (!!cover.size) await File.removeImage("pages", params.page_id, "cover");

    await File.write("pages", cover, "cover", params.page_id);
    await File.write("pages", script, "script", params.page_id);
    await File.write("pages", style, "style", params.page_id);

    sql("pages")
      .update({ title, desc, markup, date_lastModify: Date.now() })
      .where({ page_id: params.page_id })
      .run();

    set.redirect = `/page/${params.page_id}`;
    return;
  }

  static async delete(c) {
    const { set, params, cookie } = c;
    await File.removeDir("pages", params.page_id);
    sql("pages").delete().where({ page_id: params.page_id }).run();
    set.redirect = `/${cookie.auth.username}`;
  }

  static async removeFile(c) {
    const { set, params } = c;
    await File.removeFile("pages", params.page_id, params.file);
    set.redirect = `/page/${params.page_id}`;
  }

  static async pusherAdd(c) {
    const { set, params, body } = c;
    const { pusher_username } = body;

    const pusher_id = sql("users")
      .select("user_id")
      .where({ username: pusher_username })
      .get();

    // TODO проверять, тчобы юсер не был OWNER
    const check_pusher = sql("authors")
      .select(["user_id", "type"])
      .where({ user_id: pusher_id })
      .get();

    if (!check_pusher) {
      sql("authors")
        .insert({ page_id: params.page_id, user_id: pusher_id, type: "pusher" })
        .run();
    } else {
      throw new Error("pusher exists");
    }

    set.redirect = `/page/${params.page_id}`;
  }

  static async pusherRemove(c) {
    const { set, params } = c;

    const pusher_id = sql("users")
      .select("user_id")
      .where({ username: params.pusher_username })
      .get();

    const check_pusher = sql("authors")
      .select(["user_id", "type"])
      .where({ user_id: pusher_id })
      .get();

    if (check_pusher && check_pusher.type !== "owner") {
      sql("authors").delete().where({ user_id: pusher_id }).run();
    }

    set.redirect = `/page/${params.page_id}`;
  }
}
