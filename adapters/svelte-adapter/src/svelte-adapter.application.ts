import type { SiteViewPort } from "@contexts/site-core";

import { IndexPage } from "./pages";
import { SvelteRewriter } from "./rewriter";

export class SvelteAdapter implements SiteViewPort {
  private svelteRewriter: SvelteRewriter;

  async init(): Promise<void> {
    console.log("init svelte adapter");

    this.svelteRewriter = new SvelteRewriter(
      "./adapters/svelte-adapter/src/templates/html/index.html",
    );
    await this.svelteRewriter.init();
  }

  async getIndexPage(): Promise<string> {
    const indexPageHtml = await this.svelteRewriter.getPageHtml(IndexPage);
    return indexPageHtml;
  }
}
