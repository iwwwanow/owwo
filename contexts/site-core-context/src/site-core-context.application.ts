import type { HttpServerPort } from "./ports";
import type { SiteViewPort } from "./ports";
import { SITE_PORT } from "./site-core-context.constants";
import type { SiteCoreContextConstructor } from "./site-core-context.interfaces";

export class SiteCoreContext {
  httpServerContext: HttpServerPort;
  siteViewContext: SiteViewPort;

  constructor({
    HttpServerContext,
    SiteViewContext,
  }: SiteCoreContextConstructor) {
    this.httpServerContext = new HttpServerContext();
    this.siteViewContext = new SiteViewContext();
  }

  async init() {
    await this.siteViewContext.init();

    this.httpServerContext.addRoute(
      "/",
      async (_) => new Response("home page"),
      { slug: "nodeId" },
    );

    this.httpServerContext.addRoute(
      "/node",
      async (_) => new Response("home page"),
      { slug: "nodeId" },
    );

    this.httpServerContext.addRoute(
      "/favicon.ico",
      // TODO
      async (_) => new Response("favicon"),
    );

    await this.httpServerContext.init({ port: SITE_PORT });
  }
}
