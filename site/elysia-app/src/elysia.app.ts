import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia.constants.js";
import { onErrorHelper } from "./helpers/index.js";
import { routerService } from "./services/index.js";
import { signupService } from "./services/index.js";
import { faviconService } from "./services/index.js";
import { staticService } from "./services/index.js";

const app = new Elysia()
  .onError(onErrorHelper)
  .use(faviconService)
  .use(staticService)
  .use(routerService)
  .use(signupService)

  .listen(LISTEN_PORT);

export { app };
