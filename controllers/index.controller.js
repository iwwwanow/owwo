import render from "../middleware/render.middleware";

export default class IndexController {
  static async index(c) {
    const html = await render("Index", {});
    return c.html(html);
  }
}
