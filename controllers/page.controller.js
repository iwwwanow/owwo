import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

import sql from "../lib/sql.js";
import File from "../middleware/file.middleware.js";
import * as fs from "node:fs";

import dbDate from "../middleware/date.js";

export default class Page {
  static async create(c) {
    // checkOwner.check(c);
    // const { cookie, set } = c;
    // const page_id = uuidv4();
    //
    // sql("pages")
    //   .insert({
    //     page_id,
    //     date_creation: Date.now(),
    //     date_lastModify: Date.now(),
    //   })
    //   .run();
    //
    // sql("authors")
    //   .update({ user_id: cookie.auth.user_id, type: "owner" })
    //   .where({ page_id })
    //   .run();
    //
    // dbDate.update({ page_id });
    //
    // set.redirect = `/page/${page_id}`;
    // return;
  }

  static async update(req) {
    const url = new URL(req.url);
    const page_id = url.pathname.split("/").at(2);

    const referer = req.headers.get("referer");

    const formdata = await req.formData();
    const formDataObj = {};
    formdata.forEach((value, key) => (formDataObj[key] = value));

    const { cover, title, desc, style, script, markup } = formDataObj;
    const dir = `./public/data_uploads/pages/${page_id}/`;
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
      sql("pages")
        .update({ title, desc, markup, date_lastModify: Date.now() })
        .where({ page_id })
        .run();
    } catch (e) {
      throw new Error("запись не удалась(");
    }

    return Response.redirect(referer);

    // checkOwner.check(c);
    //
    // const { set, params, body, request } = c;
    // const { title, desc, cover, script, style, markup } = body;
    //
    // if (!!cover.size) await File.removeImage("pages", params.page_id, "cover");
    //
    // await File.write("pages", cover, "cover", params.page_id);
    // await File.write("pages", script, "script", params.page_id);
    // await File.write("pages", style, "style", params.page_id);
    //
    // sql("pages")
    //   .update({ title, desc, markup, date_lastModify: Date.now() })
    //   .where({ page_id: params.page_id })
    //   .run();
    //
    // dbDate.update({ page_id: params.page_id });
    //
    // const referer = c.request.headers.get("referer");
    // set.redirect = referer;
    // return;
  }

  static async delete(c) {
    // checkOwner.check(c);
    // const { set, params, cookie } = c;
    //
    // const connections = sql("connections")
    //   .select("element_id")
    //   .where({ page_id: params.page_id })
    //   .all();
    // if (connections.length) {
    //   connections.forEach(async (element_id) => {
    //     sql("elements").delete().where({ element_id }).run();
    //     await File.removeDir("elements", element_id);
    //   });
    // }
    //
    // await File.removeDir("pages", params.page_id);
    // sql("pages").delete().where({ page_id: params.page_id }).run();
    //
    // set.redirect = `/${cookie.auth.username}`;
  }

  static async removeFile(c) {
    //   checkOwner.check(c);
    //   const { set, params } = c;
    //   await File.removeFile("pages", params.page_id, params.file);
    //   set.redirect = `/page/${params.page_id}`;
  }
}
