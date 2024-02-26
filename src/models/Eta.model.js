import { Eta } from "eta";

import { configEta } from "../config/eta.config";

const eta = new Eta(configEta);

export class EtaModel {
  static async getHtml(template, params) {
    return eta.render(template, params);
  }
}
