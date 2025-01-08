import type { SiteViewPort } from "@contexts/site-core";

// import { IndexPage } from "./pages";
import { PageRewriterService } from "./services";
import { IndexPage } from "./templates";
import { commonHtml } from "./templates";

export class SvelteAdapter implements SiteViewPort {
  private svelteRewriter: PageRewriterService;

  async init(): Promise<void> {
    console.log("init svelte adapter");

    this.svelteRewriter = new PageRewriterService(commonHtml);
    await this.svelteRewriter.init();
  }

  async getIndexPage(): Promise<string> {
    const indexPageHtml = await this.svelteRewriter.getPageHtml(IndexPage);
    return indexPageHtml;
  }
}
