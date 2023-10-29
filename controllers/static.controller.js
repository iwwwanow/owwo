import File from "../middleware/file.middleware";

export default class Static {
  static send(c) {
    let path;
    if (c.url.pathname === "/favicon.ico") path = "./public/favicon.ico";
    else path = "." + c.url.pathname;
    const file = Bun.file(path);
    if (c.url.pathname.split("/").at(2) === "data_uploads") {
      // FIX cache for user uploads none!
      // поставить минимальный кеш, или как-нибудь его обновлять.
      // console.log(c.url.pathname.split("/").at(2));
    } else {
      c.headers["Cache-Control"] = "public, max-age=31536000, must-revalidate";
    }
    return new Response(file, { headers: c.headers });
  }
  static async delete(c) {
    await File.remove(c.url.pathname);
    return Response.redirect(c.referer, { headers: c.headers });
  }
}
