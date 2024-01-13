class Context {
  constructor() {}
  send(i) {
    return new Response(i);
  }
  html(html) {
    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  }
}

export default function app() {
  const routes_get = [];

  return {
    listen: function (port) {
      const serve = Bun.serve({
        port,
        async fetch(req) {
          const url = new URL(req.url);
          const pathname = url.pathname;

          const c = new Context(req);

          for (const { route, cb } of routes_get) {
            if (route === pathname) {
              return cb(c);
            }
          }

          return new Response("owwo_404-page");
        },
      });

      console.log(`OWWO IS RUNNING AT http://${serve.hostname}:${serve.port}`);

      return serve;
    },

    get: function (route, cb) {
      routes_get.push({ route, cb });
      return this;
    },
  };
}
