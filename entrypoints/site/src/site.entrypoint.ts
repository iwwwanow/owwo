import { BunHttpServerAdapter } from "@adapters/bun-http-server";
import { HttpServerContext } from "@contexts/http-server";
import { SiteCoreContext } from "@contexts/site-core";

const siteCoreContext = new SiteCoreContext({
  HttpServerContext,
  HttpServierAdapter: BunHttpServerAdapter,
});

siteCoreContext.init();
