import { routeCompare } from "./compare.app";
import { Context } from "./context.app";

export class App {
  #middlewares = [];

  constructor(port) {
    this.port = port;
    this.routes = {
      get: [],
      post: [],
      put: [],
      delete: [],
    };
  }

  use(middleware) {
    this.#middlewares.push(middleware);
  }

  async listen(port) {
    const app = this;
    const middlewares = this.#middlewares;
    const serve = Bun.serve({
      port,
      async fetch(req) {
        const c = new Context(req);
        for (const middleware of middlewares) await middleware(c);
        return routeCompare(c, app.routes);
      },
    });
    console.log(`OWWO IS RUNNING AT http://${serve.hostname}:${serve.port}`);
    return serve;
  }

  get(route, cb) {
    this.routes.get.push({ route, cb });
    return this;
  }

  post(route, cb) {
    this.routes.post.push({ route, cb });
    return this;
  }

  put(route, cb) {
    this.routes.put.push({ route, cb });
    return this;
  }

  delete(route, cb) {
    this.routes.delete.push({ route, cb });
    return this;
  }
}
