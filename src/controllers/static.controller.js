export class StaticController {
  static sendFile(c) {
    const path = "./src" + c.url.pathname;
    console.log(path);
    return c.sendFile(path);
  }
}
