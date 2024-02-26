import { EtaModel } from "../models/Eta.model";

export class SignupController {
  static async index(c) {
    // const params = await Context.getParams(c)
    const html = await EtaModel.getHtml("Signup", {});
    return c.html(html);
  }
}
