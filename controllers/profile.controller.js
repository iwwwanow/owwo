import * as fs from "node:fs";

import sharp from "sharp";

import Body from "../middleware/body.middleware.js";
import DateMiddleware from "../middleware/date.middleware.js";
import File from "../middleware/file.middleware.js";
import sql from "../lib/sql.js";

export default class Profile {
  static async update(req) {
    const url = new URL(req.url);
    const username = url.pathname.split("/").at(1);
    const user_id = sql("users").select("user_id").where({ username }).get();

    const referer = req.headers.get("referer");

    const body = Body(await req.formData());

    const { avatar, text, style, script, markup } = body;
    const dir = `./public/data_uploads/users/${user_id}/`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (avatar.size) {
      const extention = avatar.type.split("/").at(1);
      const buf = await avatar.arrayBuffer();

      await File.remove(dir, "avatar");
      await File.write(avatar, dir, `avatar.${extention}`);

      const webp64 = await sharp(buf, { animated: true })
        .webp({ quality: 100, smartSubsample: true })
        .resize(64, 64, { fit: "cover", withoutEnlargement: true })
        .toBuffer();
      await File.write(webp64, dir, "avatar@webp64.webp");
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
      sql("users").update({ text, markup }).where({ user_id }).run();
      DateMiddleware.update(user_id);
    } catch (e) {
      throw new Error("not writed");
    }

    return Response.redirect(referer);
  }
}
