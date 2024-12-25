import type { HttpServerContext } from "./ports";
import type { SiteViewContext } from "./ports";
import type { SiteCoreContextConstructor } from "./site-core-context.interfaces";

// TODO env & const & fallback
const PORT = 3000;

export class SiteCoreContext {
  httpServerContext: HttpServerContext;
  siteViewContext: SiteViewContext;

  constructor({
    HttpServerContext,
    SiteViewContext,
  }: SiteCoreContextConstructor) {
    this.httpServerContext = new HttpServerContext();
    this.siteViewContext = new SiteViewContext();
  }

  async init() {
    await this.siteViewContext.init();

    this.httpServerContext.get("/", new Response("helloooo world"));
    await this.httpServerContext.init({ port: PORT });
  }
}
