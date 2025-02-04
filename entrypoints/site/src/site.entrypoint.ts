import { BunHttpServerAdapter } from "@adapters/bun-http-server";
import { KitajsAdapter } from "@adapters/kitajs";
import { SvelteAdapter } from "@adapters/svelte";
import { SiteCoreContext } from "@contexts/site-core";

const siteCoreContext = new SiteCoreContext({
  HttpServerContext: BunHttpServerAdapter,
  // SiteViewContext: SvelteAdapter,
  SiteViewContext: KitajsAdapter,
});

siteCoreContext.init();
