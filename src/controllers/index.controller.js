import { HomeView } from "../views/home.view";
import { AboutView } from "../views/about.view";

export class IndexController {
  static async renderHomePage(c) {
    const html = await HomeView.getHomePageHtml(c);
    return c.html(html);
  }

  static async renderAboutPage(c) {
    const html = await AboutView.getAboutPageHtml(c);
    return c.html(html);
  }
}
