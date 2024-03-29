import { Eta } from "eta";
import { defaultEtaConfig } from "../config/eta.config";

const eta = new Eta(defaultEtaConfig);

export class EtaView {
  static async getHtml(templateName, params, htmlString) {
    if (!templateName) {
      if (!htmlString) throw new Error("need html string to render blanc");
      templateName = "blank";
      params.htmlString = htmlString;
    }

    const html = eta.render(templateName, params);
    return html;
  }
}
