import type { HttpServerContextPort } from "./ports";
import type { HttpServerAdapterPortConstructor } from "./ports";
import type { HttpServerContextPortConstructor } from "./ports";

export class SiteCoreContext {
  httpServerContext: HttpServerContextPort;

  constructor({
    HttpServerContext,
    HttpServierAdapter,
  }: {
    HttpServerContext: HttpServerContextPortConstructor;
    HttpServierAdapter: HttpServerAdapterPortConstructor;
  }) {
    this.httpServerContext = new HttpServerContext(HttpServierAdapter);
  }

  async init() {
    await this.httpServerContext.init();
  }
}
