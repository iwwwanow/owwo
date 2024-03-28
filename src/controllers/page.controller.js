import { PageView } from "../views/page.view";

export class PageController {
  static async renderPagePage(c) {
    const html = await PageView.getPageHtml(c);
    return c.html(html);
  }
}
