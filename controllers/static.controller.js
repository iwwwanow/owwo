export default class Static {
  static send(c) {
    let path;
    if (c.url.pathname === "/favicon.ico") path = "./public/favicon.ico";
    else path = "." + c.url.pathname;
    const file = Bun.file(path);
    c.headers["Cache-Control"] = "public, max-age=31536000, must-revalidate";
    return new Response(file, { headers: c.headers });
  }
  static async delete(c) {
    const referer = c.headers.get("referer");
    await File.remove(url.pathname);
    return Response.redirect(referer, { headers: c.headers });
  }
}
