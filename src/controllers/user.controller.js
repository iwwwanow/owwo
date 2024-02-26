import { EtaModel } from "../models/Eta.model";

export class UserController {
  static async index(c) {
    // const params = await Context.getParams(c)
    console.log(c);
    const html = await EtaModel.getHtml("Profile", {});
    return c.html(html);
  }
}
