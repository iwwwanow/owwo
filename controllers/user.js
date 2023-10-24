import { eta } from "../config/eta";
import { marked } from "marked";

import File from "../middleware/file.ts";
import Props from "../middleware/props.js";
import sql from "./sql.ts";

export default class UserController {
  static async index(c) {
    const { params, cookie, query } = c;

    const props = new Props(c);

    props.page_type = "profile";
    props.user.username = params.username;

    if (query.mode) props.view_mode = query.mode;

    if (cookie.auth && cookie.auth.username === params.username)
      props.user_type = "owner";

    const user = sql("users")
      .select(["user_id", "date_creation", "date_lastModify", "text", "markup"])
      .where({ username: params.username })
      .get();

    props.user.user_id = user.user_id;

    props.user.text = user.text;
    props.user.markup = user.markup;

    props.user.date_creation = new Date(user.date_creation).toLocaleString(
      "ru-RU"
    );
    props.user.date_lastModify = new Date(user.date_lastModify).toLocaleString(
      "ru-RU"
    );

    if (props.user.text) {
      props.user.html = marked.parse(props.user.text);
    }

    props.user.src = File.get_src("users", user.user_id);

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );
    const pages = pages_query
      .order("date_lastModify")
      .all({ $user_id: user.user_id });

    pages.forEach((page) => {
      page.src = {};
      page.src.cover = File.srcCover("pages", page.page_id);
    });

    props.pages = pages;

    return eta.render("PROFILE", props);
  }

  static async update(c) {
    const {
      set,
      params: { username },
      body,
    } = c;
    const { avatar, text, script, style, markup } = body;

    const user_id = sql("users").select("user_id").where({ username }).get();

    if (!!avatar.size) await File.removeImage("users", user_id, "avatar");

    await File.write("users", avatar, "avatar", user_id);
    await File.write("users", script, "script", user_id);
    await File.write("users", style, "style", user_id);

    sql("users")
      .update({ text, markup, date_lastModify: Date.now() })
      .where({ user_id })
      .run();

    set.redirect = `/${username}`;
    return;
  }

  static async delete(c) {
    const { set } = c;

    console.log("delete");

    set.redirect = `/${params.username}`;
  }

  static async removeFile(c) {
    const {
      set,
      params: { username, file },
    } = c;
    const user_id = sql("users").select("user_id").where({ username }).get();
    await File.removeFile("users", user_id, file);
    set.redirect = `/${username}`;
  }
}
