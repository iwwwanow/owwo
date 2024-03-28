import { EtaModel } from "../models/eta.model";

export class ElementView {
  static async getElementPageHtml(c) {
    const html = await EtaModel.getHtml("Element", {});
    return html;
  }
}
