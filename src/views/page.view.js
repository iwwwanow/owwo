import { EtaModel } from "../models/eta.model";

export class PageView {
  static async index(c) {
    const html = await EtaModel.getHtml("Page", {});
    return c.html(html);
  }
}
