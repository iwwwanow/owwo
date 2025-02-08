import type { HttpServerPort } from "./ports";
import type { SiteViewPort } from "./ports";

export interface SiteCoreContextConstructor {
  HttpServerContext: Constructor<HttpServerPort>;
  SiteViewContext: Constructor<SiteViewPort>;
}
