import { LISTEN_PORT } from "./http-server-context.constants";
import type { HttpServerPort } from "./http-server-context.port";
import type { HttpServerPortConstructor } from "./http-server-context.port";

export class HttpServerContext {
  adapter: HttpServerPort;

  constructor(adapter: HttpServerPortConstructor) {
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
