import { Markdown } from "../models/Markdown.model";
import { EtaModel } from "../models/Eta.model";

export class AboutController {
  static async index(c) {
    const readmePath = "./README.md";
    const readmeMarkdown = new Markdown({ filePath: readmePath });
    const readmeHtml = await readmeMarkdown.getHtml();
    const aboutPageHtml = await EtaModel.getHtml("Html", {
      data: { html: readmeHtml },
    });
    return c.html(aboutPageHtml);
  }
}
