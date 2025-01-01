import type { HttpServerPort } from "./ports";
import type { SiteViewPort } from "./ports";
import { PageRoutesService } from "./services";
import { StaticRoutesService } from "./services";
import type { Service } from "./services/service.interface";
import { SITE_PORT } from "./site-core-context.constants";
import type { SiteCoreContextConstructor } from "./site-core-context.interfaces";

export class SiteCoreContext {
  httpServerContext: HttpServerPort;
  siteViewContext: SiteViewPort;
  pageRoutesService: Service;
  staticRoutesService: Service;

  constructor({
    HttpServerContext,
    SiteViewContext,
  }: SiteCoreContextConstructor) {
    this.httpServerContext = new HttpServerContext();
    this.siteViewContext = new SiteViewContext();

    this.pageRoutesService = new PageRoutesService({
      httpServerContext: this.httpServerContext,
    });
    this.staticRoutesService = new StaticRoutesService({
      httpServerContext: this.httpServerContext,
    });
  }

  async init() {
    await this.siteViewContext.init();

    this.pageRoutesService.init();
    this.staticRoutesService.init();

    await this.httpServerContext.init({ port: SITE_PORT });
  }
}
