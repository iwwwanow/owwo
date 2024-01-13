import * as fs from "node:fs";

import { v4 as uuidv4 } from "uuid";

import sql from "../lib/sql.js";
import File from "../middleware/file.middleware.js";
import Image from "../middleware/image.middleware.js";
import DateMiddleware from "../middleware/date.middleware.js";
import Element from "./element.controller.js";
import Body from "../middleware/body.middleware.js";

import checkOwner from "../middleware/check_owner.js";
import Page from "../models/Page.model.js";

export default class PageController {
  static async create(c) {
    checkOwner.checkProfile(c);

    const page = new Page();
    page.create();

    const page_id = page.id;
    const user_id = c.props.client.auth.user_id;

    sql("authors").update({ user_id, type: "owner" }).where({ page_id }).run();
    DateMiddleware.update({ page_id });

    return Response.redirect(`/page/${page_id}?mode=editor`);
  }

  static async update(c) {
    console.log(c);

    const page_id = c.url.pathname.split("/").at(2);
    const page = new Page(page_id);

    if (c.props.client.auth) {
      const authUserId = c.props.client.auth.user_id;
      const permissions = page.getPermissions(authUserId);
      if (permissions !== "owner")
        throw new Error("not have permissions to modify this page");
    } else throw new Error("not authentificated");

    // const body = Body(await req.formData());

    page.writeFile("buffer");

    // const { cover, title, desc, style, script, markup } = body;
    // const dir = `./public/data_uploads/pages/${page_id}/`;
    // if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    //
    // if (cover.size) {
    //   const extention = cover.type.split("/").at(1);
    //   const buffer = await cover.arrayBuffer();
    //
    //   await File.remove(dir, "cover");
    //   await File.write(cover, dir, `cover.${extention}`);
    //
    //   const card = new Image(buffer);
    //   await card.convert("webp288");
    //
    //   await File.write(card.buffer, dir, "cover@webp288.webp");
    // }
    //
    // if (style.size) {
    //   await File.remove(dir, "style");
    //   await File.write(style, dir, "style.css");
    // }
    //
    // if (script.size) {
    //   await File.remove(dir, "script");
    //   await File.write(script, dir, "script.js");
    // }
    //
    // try {
    //   sql("pages")
    //     .update({ title, desc, markup, date_lastModify: Date.now() })
    //     .where({ page_id })
    //     .run();
    //
    //   DateMiddleware.update({ page_id });
    // } catch (e) {
    //   throw new Error("запись не удалась(");
    // }
    //
    return Response.redirect(c.referer);
  }

  static async delete(c) {
    // checkOwner.check(c);
    const page_id = c.url.pathname.split("/").at(2);
    await this.deleteSingle(page_id);
    return Response.redirect(`/${c.props.client.auth.username}`);
  }

  static async deleteSingle(page_id) {
    const connections = sql("connections")
      .select("element_id")
      .where({ page_id })
      .all();
    if (connections.length) {
      connections.forEach(async (element_id) => {
        await Element.deleteSingle(element_id);
      });
    }

    sql("pages").delete().where({ page_id }).run();

    const dir = `/public/data_uploads/pages/${page_id}`;
    await File.remove(dir);
  }
}
