import type { SiteViewPort } from "@contexts/site-core";

import { IndexPage } from "./pages";

export class SvelteAdapter implements SiteViewPort {
  async init(): Promise<void> {
    console.log("init svelte adapter");
  }

  async getHomePage(): Promise<string> {
    console.log(IndexPage.render());
    return "<h1>svelte-home-page</h1>";
  }
}
