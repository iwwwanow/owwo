import render from "../middleware/render.middleware";

export default class PageController {
  static async index(c) {
    const html = await render("Page", {});
    return c.html(html);
  }
}
