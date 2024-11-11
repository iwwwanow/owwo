import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia.constants";
import { onErrorHelper } from "./helpers";
import { routerService } from "./services";
import { signupService } from "./services";
import { faviconService } from "./services";
import { staticService } from "./services";

const app = new Elysia()
  .onError(onErrorHelper)
  .use(faviconService)
  .use(staticService)
  .use(routerService)
  .use(signupService)

  .listen(LISTEN_PORT);

export { app };
