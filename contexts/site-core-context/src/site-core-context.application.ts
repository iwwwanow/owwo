import type { HttpServerContextPort } from "./ports";
import type { SiteViewContextPort } from "./ports";
import type { SiteCoreContextConstructor } from "./site-core-context.interfaces";

export class SiteCoreContext {
  httpServerContext: HttpServerContextPort;
  siteViewContext: SiteViewContextPort;

  constructor({
    HttpServerContext,
    HttpServierAdapter,
    SiteViewContext,
    SiteViewAdapter,
  }: SiteCoreContextConstructor) {
    this.httpServerContext = new HttpServerContext(HttpServierAdapter);
    this.siteViewContext = new SiteViewContext(SiteViewAdapter);
  }

  async init() {
    await this.httpServerContext.init();
    await this.siteViewContext.init();
  }
}
