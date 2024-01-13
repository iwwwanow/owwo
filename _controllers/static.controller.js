import File from "../middleware/file.middleware";

export default class Static {
  static send(c) {
    let path;
    // 5min cache
    c.headers["Cache-Control"] = "public, max-age=300, must-revalidate";
    if (c.url.pathname === "/favicon.ico") path = "./public/favicon.ico";
    else path = "." + c.url.pathname;
    const file = Bun.file(path);
    if (c.url.pathname.split("/").at(2) === "data_uploads") {
      // 1min cache
      c.headers["Cache-Control"] = "public, max-age=60, must-revalidate";
    }
    return new Response(file, { headers: c.headers });
  }
  static async delete(c) {
    await File.remove(c.url.pathname);
    return Response.redirect(c.referer, { headers: c.headers });
  }
}
