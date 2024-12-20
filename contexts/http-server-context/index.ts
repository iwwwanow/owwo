export class HttpServerContext {
  constructor(adapter) {
    this.adapter = new adapter();
  }

  async init() {
    this.adapter.get("/", new Response("hello world"));

    this.adapter.listen(3000);
  }
}
