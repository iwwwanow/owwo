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
    // TODO объявление 404 page - обязательное
    // TODO можно сделать это объявление обязательным при инициализации

    await this.siteViewContext.init();

    const homePageHandler = async (req: Request) => {
      const reqUrl = new URL(req.url);
      const { pathname } = reqUrl;
      const nodeId = pathname.split("/").filter((i) => i)[0];

      if (nodeId) {
        return new Response(`node page ${nodeId}`);
      }

      return new Response("index page");
    };

    this.httpServerContext.addRoute({
      path: "/",
      handler: homePageHandler,
      options: { slug: true },
    });

    this.httpServerContext.addRoute({
      path: "/node",
      handler: async (_) => new Response("node page"),
      options: { slug: true },
    });

    this.httpServerContext.addRoute({
      path: "/favicon.ico",
      // TODO
      handler: async (_) => new Response("favicon"),
    });

    await this.httpServerContext.init({ port: SITE_PORT });
  }
}
