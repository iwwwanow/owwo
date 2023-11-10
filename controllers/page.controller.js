import * as fs from "node:fs";

import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

import sql from "../lib/sql.js";
import File from "../middleware/file.middleware.js";
import DateMiddleware from "../middleware/date.middleware.js";
import Element from "./element.controller.js";
import Body from "../middleware/body.middleware.js";

export default class Page {
  static async create(c) {
    // checkOwner.check(c);

    const page_id = uuidv4();
    const user_id = c.props.client.auth.user_id;

    sql("pages")
      .insert({
        page_id,
        date_creation: Date.now(),
        date_lastModify: Date.now(),
      })
      .run();

    sql("authors").update({ user_id, type: "owner" }).where({ page_id }).run();
    DateMiddleware.update({ page_id });

    return Response.redirect(`/page/${page_id}?mode=editor`);
  }

  static async update(req) {
    // checkOwner.check(c);

    const url = new URL(req.url);
    const page_id = url.pathname.split("/").at(2);

    const referer = req.headers.get("referer");

    const body = Body(await req.formData());

    const { cover, title, desc, style, script, markup } = body;
    const dir = `./public/data_uploads/pages/${page_id}/`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (cover.size) {
      const extention = cover.type.split("/").at(1);
      const buf = await cover.arrayBuffer();

      await File.remove(dir, "cover");
      await File.write(cover, dir, `cover.${extention}`);

      const metadata = await sharp(buf).metadata();
      let { width, height } = metadata;
      if (width > height) {
        width = undefined;
        height = 288;
      } else if (width < height) {
        width = 190;
        height = undefined;
      } else {
        width = 190;
        height = undefined;
      }

      const webp288 = await sharp(buf, { animated: true })
        .webp({ quality: 100, smartSubsample: true })
        // .resize(288, 288, { fit: "outside", withoutEnlargement: true })
        .resize(width, height, {
          // fit: "outside",
          withoutEnlargement: true,
          fastShrinkOnLoad: true,
        })
        .toBuffer();
      await File.write(webp288, dir, "cover@webp288.webp");
    }

    if (style.size) {
      await File.remove(dir, "style");
      await File.write(style, dir, "style.css");
    }

    if (script.size) {
      await File.remove(dir, "script");
      await File.write(script, dir, "script.js");
    }

    try {
      sql("pages")
        .update({ title, desc, markup, date_lastModify: Date.now() })
        .where({ page_id })
        .run();

      DateMiddleware.update({ page_id });
    } catch (e) {
      throw new Error("запись не удалась(");
    }

    return Response.redirect(referer);
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
