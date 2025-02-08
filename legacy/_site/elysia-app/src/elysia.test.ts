import { ViewController } from "@site/controllers";
import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia.constants.js";
import { ClientErrorAbstractClass } from "./interfaces/client-error.interface.js";
import { routerService } from "./services/index.js";
import { signupService } from "./services/index.js";
import { faviconService } from "./services/index.js";
import { staticService } from "./services/index.js";

const app = new Elysia()
  .onError((ctx) => {
    const { error: e, code } = ctx;
    const error = e as unknown as ClientErrorAbstractClass | Error;

    if (error instanceof ClientErrorAbstractClass) {
      return ViewController.getErrorPage({
        errorMessage: error.clientMessage,
        errorCode: code,
      });
    }

    console.error(error);
    return error.message;
  })
  .use(faviconService)
  .use(staticService)
  .use(routerService)
  .use(signupService)

  .listen(LISTEN_PORT);

export { app };
