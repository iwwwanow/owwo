import { UserModel } from "../models/user.model";
import { JwtUtils } from "../utils/jwt.utils";
import { UserView } from "../views/user.view";

export class UserController {
  static async renderUserPage(c) {
    const html = await UserView.getAboutPageHtml(c);
    return c.html(html);
  }

  static async renderUserDeletePage(c) {
    const html = await UserView.getUserDeletePageHtml(c);
    return c.html(html);
  }

  static async create(c) {
    const data = await c.getData();
    const { username, password, ["confirm-password"]: confirmPassword } = data;

    if (password !== confirmPassword) {
      const error = new Error("password mismatch");
      throw error;
    }

    try {
      await UserModel.set(data);
    } catch (e) {
      console.error(e);
      // TODO redirect with current input username
      return c.redirect("signup");
    }
    return c.redirect("login");
  }
}
