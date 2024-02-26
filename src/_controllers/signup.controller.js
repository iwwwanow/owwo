import render from "../middleware/render.middleware";

export default class SignupController {
  static async index(c) {
    const html = await render("Signup", {});
    return c.html(html);
  }
}
