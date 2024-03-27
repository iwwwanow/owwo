import { EtaModel } from "../models/eta.model";

export class SignupView {
  static async index(c) {
    const html = await EtaModel.getHtml("Signup", {});
    return c.html(html);
  }
}
