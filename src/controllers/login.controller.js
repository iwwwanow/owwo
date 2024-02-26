import render from "../middleware/render.middleware";

export default class LoginController {
  static async index(c) {
    const html = await render("Login", {});
    return c.html(html);
  }
}
