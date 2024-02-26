import { EtaModel } from "../models/Eta.model";

export class LoginController {
  static async index(c) {
    // const params = await Context.getParams(c)
    const html = await EtaModel.getHtml("Login", {});
    return c.html(html);
  }
}
