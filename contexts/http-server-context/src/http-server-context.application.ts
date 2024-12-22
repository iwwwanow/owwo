import type { HttpServerAdapterPort } from "@contexts/site-core";
import type { HttpServerAdapterPortConstructor } from "@contexts/site-core";
import type { HttpServerContextPort } from "@contexts/site-core";

import { LISTEN_PORT } from "./http-server-context.constants";

export class HttpServerContext implements HttpServerContextPort {
  adapter: HttpServerAdapterPort;

  constructor(adapter: HttpServerAdapterPortConstructor) {
    this.adapter = new adapter();
  }

  async init() {
    await this.initRoutes();

    this.adapter.listen(LISTEN_PORT);
  }

  async initRoutes() {
    this.adapter.get("/", new Response("hello world"));
  }
}
