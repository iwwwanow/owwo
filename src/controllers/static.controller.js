export default class StaticController {
  static response(c) {
    const path = "." + c.url.pathname;
    const file = Bun.file(path);
    return new Response(file);
  }
}
