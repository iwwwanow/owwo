import { Eta } from "eta";
import { defaultEtaConfig } from "../config/eta.config";

const eta = new Eta(defaultEtaConfig);

export class EtaView {
  static async getHtml(templateName, params) {
    const html = eta.render(templateName, params);
    return html;
  }
}
