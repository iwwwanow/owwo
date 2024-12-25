import { BunHttpServerAdapter } from "@adapters/bun-http-server";
import { KitajsAdapter } from "@adapters/kitajs";
import { SiteCoreContext } from "@contexts/site-core";

const siteCoreContext = new SiteCoreContext({
  HttpServerContext: BunHttpServerAdapter,
  SiteViewContext: KitajsAdapter,
});

siteCoreContext.init();
