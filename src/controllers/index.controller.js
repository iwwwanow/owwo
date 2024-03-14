import { EtaModel } from "../models/Eta.model";

export class IndexController {
  static async index(c) {
    // const params = await Context.getParams(c);

    const html = await EtaModel.getHtml("Index", {});
    return c.html(html);
  }
}
