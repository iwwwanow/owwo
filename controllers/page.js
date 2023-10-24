import { v4 as uuidv4 } from "uuid";
import { marked } from "marked";

import sql from "./sql.ts";
import { eta } from "../config/eta";

import File from "../middleware/file.ts";
import Props from "../middleware/props.js";

export default class PageController {
  static async index(c) {
    const props = new Props(c);
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
    const { set, params, body, request } = c;
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

    const referer = c.request.headers.get("referer");
    set.redirect = referer;
    // set.redirect = `/page/${params.page_id}`;
    return;
  }

  static async delete() {
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
