import { BunHttpServerAdapter } from "@adapters/bun-http-server";
import { SvelteAdapter } from "@adapters/svelte";
import { SiteCoreContext } from "@contexts/site-core";

const siteCoreContext = new SiteCoreContext({
  HttpServerContext: BunHttpServerAdapter,
  SiteViewContext: SvelteAdapter,
});

siteCoreContext.init();
