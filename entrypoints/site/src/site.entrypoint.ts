import * as SiteMockData from "@tests/site";
import { BunHttpServerAdapter } from "@adapters/bun-http-server";
import { SvelteAdapter } from "@adapters/svelte";
import { SiteCoreContext } from "@contexts/site-core";

const siteCoreContext = new SiteCoreContext({
  HttpServerContext: BunHttpServerAdapter,
  SiteViewContext: SvelteAdapter,
  // TODO почему это работает так? зачем мне подключить моки в кор-модуль?
  MockData: SiteMockData,
});

siteCoreContext.init();
