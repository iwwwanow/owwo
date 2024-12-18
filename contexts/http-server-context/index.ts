export class HttpServerContext {
  constructor({ HttpServierAdapter }) {
    this.httpServierAdapter = new HttpServierAdapter();
  }

  async init() {
    this.listen();
  }

  private async listen() {
    this.httpServierAdapter.listen(400);
  }
}
