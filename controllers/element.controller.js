import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

import sql from "../lib/sql.js";

import File from "../middleware/file.middleware.js";

import * as fs from "node:fs";

// import checkOwner from "../middleware/check_owner.js";
// import dbDate from "../middleware/date.js";

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

    // dbDate.update({ element_id });

    return Response.redirect(`/element/${element_id}`);
  }

  static async update(req) {
    const url = new URL(req.url);
    const element_id = url.pathname.split("/").at(2);
    const referer = req.headers.get("referer");

    const formdata = await req.formData();
    const formDataObj = {};
    formdata.forEach((value, key) => (formDataObj[key] = value));

    const { cover, text, style, script } = formDataObj;
    const dir = `./public/data_uploads/elements/${element_id}/`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (cover.size) {
      const extention = cover.type.split("/").at(1);
      const buf = await cover.arrayBuffer();

      await File.remove(dir, "cover");
      await File.write(cover, dir, `cover.${extention}`);

      const webp190 = await sharp(buf, { animated: true })
        .webp()
        .resize(190, 288, { fit: "cover", withoutEnlargement: true })
        .toBuffer();
      await File.write(webp190, dir, "cover@webp190.webp");
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
    } catch (e) {
      throw new Error("запись не удалась(");
    }

    return Response.redirect(referer);

    // checkOwner.check(c);
    // const { set, params, body } = c;
    // const { text, cover, script, style } = body;
    //
    // if (!!cover.size)
    //   await File.removeImage("elements", params.element_id, "cover");
    //
    // await File.write("elements", cover, "cover", params.element_id);
    // await File.write("elements", script, "script", params.element_id);
    // await File.write("elements", style, "style", params.element_id);
    //
    // sql("elements")
    //   .update({ text, date_lastModify: Date.now() })
    //   .where({ element_id: params.element_id })
    //   .run();
    //
    // dbDate.update({ element_id: params.element_id });
    //
    // const referer = c.request.headers.get("referer");
    // set.redirect = referer;
    // // set.redirect = `/element/${params.element_id}`;
  }

  static async delete(c) {
    // checkOwner.check(c);
    // const { set, params, cookie } = c;
    // await File.removeDir("elements", params.element_id);
    // // TODO Удаляется ли connection?
    // sql("elements").delete().where({ element_id: params.element_id }).run();
    // set.redirect = `/${cookie.username}`;
  }

  static async removeFile(c) {
    // checkOwner.check(c);
    // const { set, params } = c;
    // await File.removeFile("elements", params.element_id, params.file);
    // set.redirect = `/element/${params.element_id}`;
  }
}
