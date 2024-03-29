import { UserModel } from "../models/user.model";
import { EtaView } from "../views/eta.view";
import { JwtUtils } from "../utils/jwt.utils";
import { validatePasswordUtil } from "../utils/validate-password.utils";
import { validateUsernameUtil } from "../utils/validate-username.utils";

export class AuthController {
  static async renderLoginPage(c) {
    const html = await EtaView.getLoginPageHtml(c);
    return c.html(html);
  }

  static async renderSignupPage(c) {
    const html = await EtaView.getSignupPageHtml(c);
    return c.html(html);
  }

  static async login(c) {
    const data = await c.getData();
    const { username, password } = data;
    try {
      const user = await UserModel.get(data);

      if (!user) {
        const error = new Error("user not exist");
        throw error;
      }

      const { password: hashedPassword } = user;
      const isPasswordMatch = await Bun.password.verify(
        password,
        hashedPassword
      );

      if (!isPasswordMatch) {
        const error = new Error("password mismatch");
        throw error;
      }

      const { user_id: userId } = user;

      const jwt = await JwtUtils.createJwt({ userId });
      c.setHeader("Set-Cookie", `auth=${jwt}`);
      return c.redirect("/");
    } catch (e) {
      console.error(e);
    }
  }

  static async logout(c) {
    c.resetAuth();
    return c.redirect("/");
  }
}
