import { BunHttpServerAdapter } from "../../../adapters/bun-http-server-adapter";
import { HttpServerContext } from "../../../contexts/http-server-context";
import { SiteCoreContextInfrastructure } from "../../../contexts/site-core-context";

const siteCoreContext = new SiteCoreContextInfrastructure({
  HttpServerContext,
  HttpServierAdapter: BunHttpServerAdapter,
});

siteCoreContext.init();
