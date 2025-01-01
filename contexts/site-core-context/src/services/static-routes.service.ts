import type { HttpServerPort } from "../ports";
import { faviconRouteHandler } from "../route-handlers";
import { publicRouteHandler } from "../route-handlers";
import type { Service } from "./service.interface";

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
      handler: faviconRouteHandler,
    });
  }

  private initPublicStaticRoute() {
    this.httpServerContext.addRoute({
      path: "/public",
      handler: publicRouteHandler,
    });
  }
}
