import { v4 as uuidv4 } from "uuid";
import { marked } from "marked";

import Props from "../middleware/props.js";
import File from "../middleware/file.ts";
import dbDate from "../middleware/date.js";
import sql from "../middleware/sql.ts";

import { eta } from "../config/eta";

export default class ElementController {
  static async index(c) {
    const props = await new Props(c).init();
    return eta.render("ELEMENT", props);
  }

  static create(c) {
    const { set, params, cookie } = c;

    const element_id = uuidv4();

    sql("elements")
      .insert({
        element_id,
        date_creation: Date.now(),
        date_lastModify: Date.now(),
        author_id: cookie.auth.user_id,
      })
      .run();

    sql("connections")
      .update({ page_id: params.page_id })
      .where({ element_id })
      .run();

    dbDate.update({ element_id });

    set.redirect = `/element/${element_id}`;
  }

  static async update(c) {
    const { set, params, body } = c;
    const { text, cover, script, style } = body;

    if (!!cover.size)
      await File.removeImage("elements", params.element_id, "cover");

    await File.write("elements", cover, "cover", params.element_id);
    await File.write("elements", script, "script", params.element_id);
    await File.write("elements", style, "style", params.element_id);

    sql("elements")
      .update({ text, date_lastModify: Date.now() })
      .where({ element_id: params.element_id })
      .run();

    dbDate.update({ element_id: params.element_id });

    const referer = c.request.headers.get("referer");
    set.redirect = referer;
    // set.redirect = `/element/${params.element_id}`;
  }

  static async delete(c) {
    const { set, params, cookie } = c;
    await File.removeDir("elements", params.element_id);
    // TODO Удаляется ли connection?
    sql("elements").delete().where({ element_id: params.element_id }).run();
    set.redirect = `/${cookie.username}`;
  }

  static async removeFile(c) {
    const { set, params } = c;
    await File.removeFile("elements", params.element_id, params.file);
    set.redirect = `/element/${params.element_id}`;
  }
}
