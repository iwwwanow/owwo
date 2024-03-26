import { EtaModel } from "../models/eta.model";

export class ElementController {
  static async index(c) {
    // const params = await Context.getParams(c)
    const html = await EtaModel.getHtml("Element", {});
    return c.html(html);
  }
}
