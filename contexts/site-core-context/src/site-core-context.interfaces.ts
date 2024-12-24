import type { HttpServerAdapterPortConstructor } from "./ports";
import type { HttpServerContextPortConstructor } from "./ports";
import type { SiteViewAdapterPortConstructor } from "./ports";
import type { SiteViewContextPortConstructor } from "./ports";

export interface SiteCoreContextConstructor {
  HttpServerContext: HttpServerContextPortConstructor;
  HttpServierAdapter: HttpServerAdapterPortConstructor;
  SiteViewContext: SiteViewContextPortConstructor;
  SiteViewAdapter: SiteViewAdapterPortConstructor;
}
