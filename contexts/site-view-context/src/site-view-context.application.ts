import type { SiteViewContextPort } from "@contexts/site-core";
import type { SiteViewAdapterPort } from "@contexts/site-core";
import type { SiteViewAdapterPortConstructor } from "@contexts/site-core";

export class SiteViewContext implements SiteViewContextPort {
  adapter: SiteViewAdapterPort;

  constructor(adapter: SiteViewAdapterPortConstructor) {
    this.adapter = new adapter();
  }

  async init(): Promise<void> {}
}
