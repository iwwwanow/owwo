import { EtaModel } from "../models/eta.model";

export class HomeView {
  static async index(c) {
    const html = await EtaModel.getHtml("Index", {});
    return c.html(html);
  }
}
