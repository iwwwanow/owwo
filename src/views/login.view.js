import { EtaModel } from "../models/eta.model";

export class LoginView {
  static async getLoginPageHtml(c) {
    const html = await EtaModel.getHtml("Login", {});
    return html;
  }
}
