import { UserModel } from "../models/user.model";
import { JwtUtils } from "../utils/jwt.utils";
import { UserView } from "../views/user.view";
import { validatePasswordUtil } from "../utils/validate-password.utils";
import { validateUsernameUtil } from "../utils/validate-username.utils";

export class UserController {
  static async renderUserPage(c) {
    const html = await UserView.getUserPageHtml(c);
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

    validatePasswordUtil(password);
    validateUsernameUtil(username);

    try {
      await UserModel.set({
        userId: self.crypto.randomUUID(),
        username,
        password: await Bun.password.hash(password),
      });
    } catch (e) {
      console.error(e);
      // TODO redirect with current input username
      return c.redirect("signup");
    }
    return c.redirect("login");
  }
}
