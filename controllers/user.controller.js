import { v4 as uuidv4 } from "uuid";

import sql from "../lib/sql.ts";
import Password from "../middleware/password.ts";
import File from "../middleware/file.middleware.js";
import Page from "./page.controller.js";

export default class User {
  static async create(c) {
    const body = c.body;
    const text = await Bun.readableStreamToText(body);
    const arr = text.split("&");
    const obj = {};
    arr.forEach((item) => {
      item = item.split("=");
      obj[item[0]] = item[1];
    });

    const { username, password, confirm } = obj;

    Password.confirm(password, confirm);
    const user_id = uuidv4();

    const db_username = sql("users")
      .select("username")
      .where({ username })
      .get();
    if (db_username) {
      throw new Error(`username '${db_username}' already exists`);
    }

    try {
      sql("users")
        .insert({
          user_id,
          username,
          password: await Bun.password.hash(password),
          date_creation: Date.now(),
          date_lastModify: Date.now(),
        })
        .run();
    } catch (e) {
      throw new Error("failed to add the user");
    }

    // dbDate.update({ user_id });
    return Response.redirect("/login");
  }

  static async delete(c) {
    const username = c.url.pathname.split("/").at(1);
    const user_id = sql("users").select("user_id").where({ username }).get();

    const page_ids = sql("authors").select("page_id").where({ user_id }).all();

    page_ids.forEach(async (page_id) => await Page.deleteSingle(page_id));

    const dir = `/public/data_uploads/users/${user_id}`;
    File.remove(dir);

    sql("users").delete().where({ user_id }).run();

    // FIX удалять все дочки и связи.

    c.headers["Set-Cookie"] =
      "auth=deleted; expires=Thu, 16 Jul 1998 00:00:00 GMT";
    return Response.redirect("/", { headers: c.headers });
  }
}
