import type { HttpServerContext } from "./ports";
import type { SiteViewContext } from "./ports";

export interface SiteCoreContextConstructor {
  HttpServerContext: Constructor<HttpServerContext>;
  SiteViewContext: Constructor<SiteViewContext>;
}
