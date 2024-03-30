import { MarkdownModel } from "../models/markdown.model";

export class IndexController {
  static async renderHomePage(c) {
    return c.text("home");
    // const html = await EtaView.getHtml("home", c);
    // return c.html(html);
  }

  static async renderAboutPage(c) {
    const markdown = new MarkdownModel("./README.md");
    const markdownHtml = await markdown.getHtml();
    return c.text("about");
  }
}
