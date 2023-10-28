import File from "../middleware/file.ts";
import sql from "../middleware/sql.ts";
import dbDate from "../middleware/date.js";
import checkOwner from "../middleware/check_owner.js";

export default class UserController {
  static async update(c) {
    const {
      set,
      params: { username },
      body,
    } = c;
    checkOwner.check(c);

    const { avatar, text, script, style, markup } = body;

    const user_id = sql("users").select("user_id").where({ username }).get();

    if (!!avatar.size) {
      await File.removeImage("users", user_id, "avatar");
      await File.write_image("users", avatar, "avatar", user_id);
    }

    await File.write("users", script, "script", user_id);
    await File.write("users", style, "style", user_id);

    try {
      sql("users")
        .update({ text, markup, date_lastModify: Date.now() })
        .where({ user_id })
        .run();
    } catch (e) {
      throw new Error("запись не удалась(");
    }

    dbDate.update(user_id);

    const referer = c.request.headers.get("referer");
    set.redirect = referer;
    return;
  }

  static async delete(c) {
    // FIX REF
    checkOwner.check(c);
    const { set, params, removeCookie } = c;
    const user_id = sql("users")
      .select("user_id")
      .where({ username: params.username })
      .get();
    const page_ids = sql("authors").select("page_id").where({ user_id }).all();
    if (page_ids.length) {
      page_ids.forEach(async (page_id) => {
        const connections = sql("connections")
          .select("element_id")
          .where({ page_id })
          .all();
        if (connections.length) {
          connections.forEach(async (element_id) => {
            sql("elements").delete().where({ element_id }).run();
            await File.removeDir("elements", element_id);
          });
        }

        await File.removeDir("pages", page_id);
        sql("pages").delete().where({ page_id }).run();
      });
    }

    await File.removeDir("users", user_id);
    sql("users").delete().where({ user_id }).run();

    removeCookie("auth");
    set.redirect = "/";
  }

  static async removeFile(c) {
    const {
      set,
      params: { username, file },
    } = c;
    checkOwner.check(c);

    const user_id = sql("users").select("user_id").where({ username }).get();
    await File.removeFile("users", user_id, file);

    const referer = c.request.headers.get("referer");
    set.redirect = referer;
    return;
  }
}
