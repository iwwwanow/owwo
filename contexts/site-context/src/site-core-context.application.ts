import { pageNotFoundPageHandler } from "./handlers";
import { internalServerErrorPageHandler } from "./handlers";
import type { Service } from "./interfaces/service.interface";
import type { HttpServerPort } from "./ports";
import type { SiteViewPort } from "./ports";
import { PageRoutesService } from "./services";
import { StaticRoutesService } from "./services";
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
  }

  async init() {
    await this.siteViewContext.init();

    this.pageRoutesService = new PageRoutesService({
      httpServerContext: this.httpServerContext,
      siteViewContext: this.siteViewContext,
    });
    this.staticRoutesService = new StaticRoutesService({
      httpServerContext: this.httpServerContext,
    });

    this.pageRoutesService.init();
    this.staticRoutesService.init();

    await this.httpServerContext.init({
      port: SITE_PORT,
      errorHandlers: {
        pageNotFoundErrorHandler: pageNotFoundPageHandler,
        internalServerErrorHandler: internalServerErrorPageHandler,
      },
    });
  }
}
