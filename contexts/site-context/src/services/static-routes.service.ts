import { faviconHandler } from "../handlers";
import { publicRouteHandler } from "../handlers";
import type { Service } from "../interfaces/service.interface";
import type { HttpServerPort } from "../ports";

export class StaticRoutesService implements Service {
  httpServerContext: HttpServerPort;

  constructor({ httpServerContext }: { httpServerContext: HttpServerPort }) {
    this.httpServerContext = httpServerContext;
  }

  init() {
    this.initFaviconStaticRoute();
    this.initPublicStaticRoute();
  }

  private initFaviconStaticRoute() {
    this.httpServerContext.addRoute({
      path: "/favicon.ico",
      handler: faviconHandler,
    });
  }

  private initPublicStaticRoute() {
    this.httpServerContext.addRoute({
      path: "/public",
      handler: publicRouteHandler,
    });
  }
}
