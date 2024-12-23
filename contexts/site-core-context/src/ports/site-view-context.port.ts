import type { SiteViewAdapterPortConstructor } from "./site-view-adapter.port";

export interface SiteViewContextPortConstructor {
  new (adapter: SiteViewAdapterPortConstructor): SiteViewContextPort;
}

export interface SiteViewContextPort {
  init(): Promise<void>;
}
