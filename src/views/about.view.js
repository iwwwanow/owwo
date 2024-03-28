import { Markdown } from "../models/markdown.model";
import { EtaModel } from "../models/eta.model";

export class AboutView {
  static async getAboutPageHtml(c) {
    const readmePath = "./README.md";
    const readmeMarkdown = new Markdown({ filePath: readmePath });
    const readmeHtml = await readmeMarkdown.getHtml();
    const aboutPageHtml = await EtaModel.getHtml("Html", {
      data: { html: readmeHtml },
    });
    return aboutPageHtml;
  }
}
