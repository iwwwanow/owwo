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

    this.httpServerContext
      .get("/", async (_) => new Response("helloooo world"))
      .get("/bla", async (_) => new Response("bla1"))
      .get("/blaaa", async (_) => new Response("bla2"))
      .get("/bla/:symbol", async (_) => new Response("bla3"))
      .get("/bla/:symbol/bla2/:symbol2", async (_) => new Response("bla4"));

    await this.httpServerContext.init({ port: SITE_PORT });
  }
}
