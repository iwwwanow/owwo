import type { SiteViewAdapterPort } from "@contexts/site-core";

export class KitajsAdapter implements SiteViewAdapterPort {
  // TODO type
  async getHomePage(homePageData: any): Promise<string> {
    return "<h1>home-page</h1>";
  }
}
