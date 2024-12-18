export class SiteCoreContextInfrastructure {
  constructor({ HttpServerContext, HttpServierAdapter }) {
    this.httpServerContext = new HttpServerContext({ HttpServierAdapter });
  }

  async init() {
    this.httpServerContext.init();
  }
}
