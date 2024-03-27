import { EtaModel } from "../models/eta.model";

export class UserView {
  static async index(c) {
    console.log(c);
    const html = await EtaModel.getHtml("Profile", {});
    return c.html(html);
  }
  static async delete(c) {
    console.log(c);
    const html = await EtaModel.getHtml("Profile", {});
    return c.html(html);
  }
}
