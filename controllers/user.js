import { eta } from "../config/eta";
import { marked } from "marked";

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

    const user = sql("users")
      .select(["user_id", "text", "markup"])
      .where({ username })
      .get();

    props.text = user.text;
    props.markup = user.markup;

    if (props.text) {
      props.html = marked.parse(props.text);
    }

    props.src = File.get_src("users", user.user_id);

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );
    const pages = pages_query.all({ $user_id: user.user_id });

    pages.forEach((page) => {
      page.src = {};
      page.src.cover = File.srcCover("pages", page.page_id);
    });

    props.pages = pages;

    return eta.render("profile", props);
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

    sql("users").update({ text, markup }).where({ user_id }).run();

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
