import type { SiteViewPort } from "@contexts/site-core";

export class SvelteAdapter implements SiteViewPort {
  async init(): Promise<void> {
    console.log("init svelte adapter");
  }

  async getHomePage(): Promise<string> {
    return "<h1>svelte-home-page</h1>";
  }
}
