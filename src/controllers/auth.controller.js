import { LoginView } from "../views/login.view";
import { SignupView } from "../views/signup.view";

export class AuthController {
  static async renderLoginPage(c) {
    const html = await LoginView.getLoginPageHtml(c);
    return c.html(html);
  }

  static async renderSignupPage(c) {
    const html = await SignupView.getSignupPageHtml(c);
    return c.html(html);
  }

  static async login(c) {
    const data = await c.getData();
    const { username, password } = data;
    try {
      const user = await UserModel.get(data);
      const { user_id: userId, username } = user;
      const jwt = await JwtUtils.createJwt({ userId });
      c.setHeader("Set-Cookie", `auth=${jwt}`);
      return c.redirect("/");
    } catch (e) {
      console.error(e);
    }
  }

  static async logout(c) {
    // const params = await Context.getParams(c)
    // const html = await EtaModel.getHtml("Logout", {});
    c.resetAuth();
    return c.redirect("/");
  }
}
