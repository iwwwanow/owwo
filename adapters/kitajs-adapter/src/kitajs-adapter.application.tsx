import type { SiteViewPort } from "@contexts/site-core";

export class KitajsAdapter implements SiteViewPort {
  async init(): Promise<void> {
    console.log("init kita js adapter");
  }

  async getHomePage(): Promise<string> {
    return "<h1>home-page</h1>";
  }
}
