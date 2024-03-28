import { Eta } from "eta";
import { configEta } from "../config/eta.config";

const eta = new Eta(configEta);

export class EtaModel {
  static #defaultHeaderName = "header";
  static #defaultFooterName = "footer";

  static async #getDefaultHeaderHtml(params) {
    const html = await this.getComponentHtml(this.#defaultHeaderName, params);
    return html;
  }

  static async #getDefaultFooterHtml(params) {
    const html = await this.getComponentHtml(this.#defaultFooterName, params);
    return html;
  }

  static async getComponentHtml(componentName, params) {
    // const componentFullName = `${componentName}.component.eta`;
    return eta.render(componentName, params);
  }

  static async getPageHtml(layoutName, components, params) {
    if (typeof components === "string") components = { content: components };

    let { header, content, footer } = components;
    if (!content) throw new Error("need content to render a page");
    if (!header || !footer) {
      if (!params)
        throw new Error("need params to render a default header and footer");
      if (!header)
        components.header = await EtaModel.#getDefaultHeaderHtml(params);
      if (!footer)
        components.footer = await EtaModel.#getDefaultFooterHtml(params);
    }

    return eta.render(layoutName, components);
  }
}
