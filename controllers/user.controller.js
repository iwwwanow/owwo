import render from "../middleware/render.middleware";

export default class UserController {
  static async index(c) {
    const html = await render("Profile", {});
    return c.html(html);
  }
}
