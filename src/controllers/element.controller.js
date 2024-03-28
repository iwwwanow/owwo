import { ElementView } from "../views/element.view";

export class ElementController {
  static async renderElementPage(c) {
    const html = await ElementView.getElementPageHtml(c);
    return c.html(html);
  }
}
