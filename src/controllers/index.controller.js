import { MarkdownModel } from "../models/markdown.model";
import { EtaView } from "../views/eta.view";

export class IndexController {
  static async renderHomePage(c) {
    const html = await EtaView.getHtml("home", c);
    return c.html(html);
  }

  static async renderAboutPage(c) {
    const markdown = new MarkdownModel("./README.md");
    const markdownHtml = await markdown.getHtml();

    const html = await EtaView.getHtml("", c, markdownHtml);
    return c.html(html);
  }
}
