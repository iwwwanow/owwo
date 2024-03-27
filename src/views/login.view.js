import { EtaModel } from "../models/eta.model";

export class LoginView {
  static async index(c) {
    const html = await EtaModel.getHtml("Login", {});
    return c.html(html);
  }
}
