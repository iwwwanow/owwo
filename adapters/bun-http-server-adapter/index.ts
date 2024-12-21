import type { HttpServerPort } from "../../contexts/http-server-context";

export class BunHttpServerAdapter implements HttpServerPort {
  static: Record<string, Response> = {};

  constructor() {}

  listen(port: number) {
    const { url } = Bun.serve({
      port: port,
      static: this.static,
      fetch(_req: Request) {
        return new Response("404!");
      },
    });

    return { url };
  }

  async get(route: string, response: Response) {
    this.static[route] = response;
  }
}
