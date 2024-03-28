import { EtaModel } from "../models/eta.model";

export class HomeView {
  static async getHomePageHtml(c) {
    const html = await EtaModel.getHtml("Index", {});
    return html;
  }
}
