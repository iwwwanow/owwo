import { Markdown } from "../models/Markdown.model";
import { EtaModel } from "../models/Eta.model";

export class AboutController {
  static async index(c) {
    const readmePath = "./README.md";
    const readmeMarkdown = new Markdown({ filePath: readmePath });
    const readmeHtml = await readmeMarkdown.getHtml();

    console.log(readmeHtml);

    // const params = await Context.getParams(c)
    // const html = await EtaModel.getHtml("About", {});
    // const html =

    return c.html(html);
  }
}
