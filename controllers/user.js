import { eta } from "../config/eta";
import { marked } from "marked";

import File from "../middleware/file.ts";
import Props from "../middleware/props.js";
import sql from "./sql.ts";

export default class UserController {
  static async index(c) {
    const props = await new Props(c).init_user();
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

    const referer = c.request.headers.get("referer");
    set.redirect = referer;
    // set.redirect = `/${username}`;
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
