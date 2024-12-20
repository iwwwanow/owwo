import { BunHttpServerAdapter } from "../../../adapters/bun-http-server-adapter";
import { HttpServerContext } from "../../../contexts/http-server-context";
import { SiteCoreContext } from "../../../contexts/site-core-context";

const siteCoreContext = new SiteCoreContext({
  HttpServerContext,
  HttpServierAdapter: BunHttpServerAdapter,
});

siteCoreContext.init();
