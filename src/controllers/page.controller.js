import { EtaModel } from "../models/eta.model";

export class PageController {
  static async index(c) {
    // const params = await Context.getParams(c)
    const html = await EtaModel.getHtml("Page", {});
    return c.html(html);
  }
}
