import { EtaModel } from "../models/eta.model";

export class SignupView {
  static async getSignupPageHtml(c) {
    const html = await EtaModel.getHtml("Signup", {});
    return html;
  }
}
