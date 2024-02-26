import { Context } from "./context.app";

export class App {
  constructor(port) {
    this.port = port;
    this.routes = {
      get: [],
      post: [],
      put: [],
      delete: [],
    };
  }

  async listen(port) {
    const app = this;
    const serve = Bun.serve({
      port,
      async fetch(req) {
        const url = new URL(req.url);
        const pathname = url.pathname;
        const c = new Context(req);
        for (const { route, cb } of app.routes.get) {
          const regex = new RegExp(route);
          if (regex.test(pathname)) {
            return cb(c);
          }
        }
        return new Response("owwo__404-page");
      },
    });
    console.log(`OWWO IS RUNNING AT http://${serve.hostname}:${serve.port}`);
    return serve;
  }

  async get(route, cb) {
    this.routes.get.push({ route, cb });
    return this;
  }
}
