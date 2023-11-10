import * as fs from "node:fs";

import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

import sql from "../lib/sql.js";
import DateMiddleware from "../middleware/date.middleware.js";
import Body from "../middleware/body.middleware.js";
import File from "../middleware/file.middleware.js";

export default class Element {
  static create(c) {
    const element_id = uuidv4();
    const page_id = c.url.pathname.split("/").at(2);

    sql("elements")
      .insert({
        element_id,
        date_creation: Date.now(),
        date_lastModify: Date.now(),
        author_id: c.props.client.auth.user_id,
      })
      .run();

    sql("connections").update({ page_id }).where({ element_id }).run();
    DateMiddleware.update({ element_id });

    return Response.redirect(`/element/${element_id}?mode=editor`);
  }

  static async update(req) {
    // checkOwner

    const url = new URL(req.url);
    const element_id = url.pathname.split("/").at(2);
    const referer = req.headers.get("referer");

    const body = Body(await req.formData());

    const { cover, text, style, script } = body;
    const dir = `./public/data_uploads/elements/${element_id}/`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (cover.size) {
      const extention = cover.type.split("/").at(1);
      const buf = await cover.arrayBuffer();

      await File.remove(dir, "cover");
      await File.write(cover, dir, `cover.${extention}`);

      // const metadata = await sharp(buf).metadata();
      // console.log(metadata);

      const webp288 = await sharp(buf, { animated: true })
        .webp({ quality: 100, smartSubsample: true })
        // .resize(190, 288, { fit: "cover", withoutEnlargement: true })
        .resize(288, 288, { fit: "outside", withoutEnlargement: true })
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
      sql("elements")
        .update({ text, date_lastModify: Date.now() })
        .where({ element_id })
        .run();
      DateMiddleware.update({ element_id });
    } catch (e) {
      throw new Error("not writed");
    }

    return Response.redirect(referer);
  }

  static async delete(c) {
    // checkOwner.check(c);
    const element_id = c.url.pathname.split("/").at(2);
    await this.deleteSingle(element_id);
    return Response.redirect(`/${c.props.client.auth.username}`);
  }

  static async deleteSingle(element_id) {
    const dir = `/public/data_uploads/elements/${element_id}`;
    sql("elements").delete().where({ element_id }).run();
    await File.remove(dir);
  }
}
