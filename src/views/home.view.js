import { EtaModel } from "../models/eta.model";

export class HomeView {
  static async getHomePageHtml(c) {
    const header = await EtaModel.getComponentHtml("header", c);
    const content = await EtaModel.getComponentHtml("home");
    const footer = await EtaModel.getComponentHtml("footer");

    const html = await EtaModel.getPageHtml("layout", {
      header,
      content,
      footer,
    });

    return html;
  }
}
