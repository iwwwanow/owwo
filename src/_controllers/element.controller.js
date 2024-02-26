import render from "../middleware/render.middleware";

export default class ElementController {
  static async index(c) {
    const html = await render("Element", {});
    return c.html(html);
  }
}
