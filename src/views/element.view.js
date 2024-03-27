import { EtaModel } from "../models/eta.model";

export class ElementView {
  static async index(c) {
    const html = await EtaModel.getHtml("Element", {});
    return c.html(html);
  }
}
