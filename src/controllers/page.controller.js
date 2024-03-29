import { EtaView } from "../views/eta.view";

export class PageController {
  static async renderPagePage(c) {
    const html = await EtaView.getHtml(c);
    return c.html(html);
  }
}
