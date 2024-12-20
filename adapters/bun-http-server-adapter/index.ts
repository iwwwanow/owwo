export class BunHttpServerAdapter {
  routes = [];
  static = {};

  constructor() {}

  listen(port) {
    Bun.serve({
      port: port,
      static: this.static,
      fetch(req) {
        return new Response("404!");
      },
    });
  }

  async get(route, response) {
    this.static[route] = response;
  }
}
