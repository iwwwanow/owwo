import { EtaModel } from "../models/Eta.model";

export class AboutController {
  static async index(c) {
    // const params = await Context.getParams(c)
    const html = await EtaModel.getHtml("About", {});
    return c.html(html);
  }
}
