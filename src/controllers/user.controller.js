import { EtaModel } from "../models/Eta.model";
import { UserModel } from "../models/User.model";

export class UserController {
  static async index(c) {
    // const params = await Context.getParams(c)
    console.log(c);
    const html = await EtaModel.getHtml("Profile", {});
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
      // TODO redirect to signup with error
      // TODO redirect with current input username
      throw e;
    }

    // TODO redirect to index
    return c.html("create");
  }
}
