import { v4 as uuidv4 } from "uuid";

import sql from "../middleware/sql.ts";
import File from "../middleware/file.ts";
import dbDate from "../middleware/date.js";
import checkOwner from "../middleware/check_owner.js";

export default class PageController {
  static async create(c) {
    checkOwner.check(c);
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

    dbDate.update({ page_id });

    set.redirect = `/page/${page_id}`;
    return;
  }

  static async update(c) {
    checkOwner.check(c);

    const { set, params, body, request } = c;
    const { title, desc, cover, script, style, markup } = body;

    if (!!cover.size) await File.removeImage("pages", params.page_id, "cover");

    await File.write("pages", cover, "cover", params.page_id);
    await File.write("pages", script, "script", params.page_id);
    await File.write("pages", style, "style", params.page_id);

    sql("pages")
      .update({ title, desc, markup, date_lastModify: Date.now() })
      .where({ page_id: params.page_id })
      .run();

    dbDate.update({ page_id: params.page_id });

    const referer = c.request.headers.get("referer");
    set.redirect = referer;
    return;
  }

  static async delete(c) {
    checkOwner.check(c);
    const { set, params, cookie } = c;

    const connections = sql("connections")
      .select("element_id")
      .where({ page_id: params.page_id })
      .all();
    if (connections.length) {
      connections.forEach(async (element_id) => {
        sql("elements").delete().where({ element_id }).run();
        await File.removeDir("elements", element_id);
      });
    }

    await File.removeDir("pages", params.page_id);
    sql("pages").delete().where({ page_id: params.page_id }).run();

    set.redirect = `/${cookie.auth.username}`;
  }

  static async removeFile(c) {
    checkOwner.check(c);
    const { set, params } = c;
    await File.removeFile("pages", params.page_id, params.file);
    set.redirect = `/page/${params.page_id}`;
  }
}
