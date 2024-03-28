import { EtaModel } from "../models/eta.model";

export class PageView {
  static async getPageHtml(c) {
    const html = await EtaModel.getHtml("Page", {});
    return html;
  }
}
