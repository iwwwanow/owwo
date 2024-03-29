import { EtaView } from "../views/eta.view";

export class ElementController {
  static async renderElementPage(c) {
    const html = await EtaView.getElementPageHtml(c);
    return c.html(html);
  }
}
