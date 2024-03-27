import { EtaModel } from "../models/eta.model";

export class AuthController {
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
