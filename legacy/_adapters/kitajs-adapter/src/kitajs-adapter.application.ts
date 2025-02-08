import type { SiteViewPort } from "@contexts/site-core";
import type { IndexPageProps } from "@contexts/site-core";

import { IndexPage } from "./index-page.component";

export class KitajsAdapter implements SiteViewPort {
  async init(): Promise<void> {
    console.log("init kitajs adapter");
  }

  async getIndexPage(props: IndexPageProps): Promise<string> {
    return IndexPage({ someprop: "bla" });
  }
}
