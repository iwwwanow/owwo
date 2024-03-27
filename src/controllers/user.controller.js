import { EtaModel } from "../models/eta.model";
import { UserModel } from "../models/user.model";
import { JwtUtils } from "../utils/jwt.utils";

export class UserController {
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
