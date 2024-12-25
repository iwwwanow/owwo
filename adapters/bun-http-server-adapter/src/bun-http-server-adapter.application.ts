import type { HttpServerContext } from "@contexts/site-core";
import type { InitProps } from "@contexts/site-core";

export class BunHttpServerAdapter implements HttpServerContext {
  private isInitialazed: boolean = false;
  private isRoutesInitialazed: boolean = false;
  private isListening: boolean = false;

  static: Record<string, Response> = {};

  async init({ port }: InitProps) {
    this.listen(port);
    console.log("init bun http server adapter");
  }

  listen(port: number) {
    const { url } = Bun.serve({
      port: port,
      static: this.static,
      // static: {
      //   "/": new Response("Hello World"),
      // },
      fetch(_req: Request) {
        return new Response("404!");
      },
    });

    return { url };
  }

  get(route: string, response: Response) {
    this.static[route] = response;
  }
}
