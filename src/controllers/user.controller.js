import { UserModel } from "../models/user.model";
import { JwtUtils } from "../utils/jwt.utils";
import { validatePasswordUtil } from "../utils/validate-password.utils";
import { validateUsernameUtil } from "../utils/validate-username.utils";

export class UserController {
  static async renderUserPage(c) {
    return c.text("user");
  }

  static async renderUserDeletePage(c) {
    return c.text("user-delete-page");
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
