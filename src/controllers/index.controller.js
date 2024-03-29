import { EtaView } from "../views/eta.view";

export class IndexController {
  static async renderHomePage(c) {
    const html = await EtaView.getHtml("home", c);
    return c.html(html);
  }

  static async renderAboutPage(c) {
    const html = await PageProtoView.getAboutPageHtml(c);
    return c.html(html);
  }
}
