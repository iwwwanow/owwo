export class SiteCoreContext {
  constructor({ HttpServerContext, HttpServierAdapter }) {
    this.httpServerContext = new HttpServerContext(HttpServierAdapter);
  }

  async init() {
    await this.httpServerContext.init();
  }
}
