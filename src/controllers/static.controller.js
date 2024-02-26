export class StaticController {
  static sendFile(c) {
    const path = "./src" + c.url.pathname;
    return c.sendFile(path);
  }
}
