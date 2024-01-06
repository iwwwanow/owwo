export default function owwo_app() {
  return {
    listen: function (port) {
      const serve = Bun.serve({
        port,
        async fetch(req) {
          console.log(this);
          return new Response("Hello world!");
        },
      });

      console.log(`OWWO IS RUNNING AT http://${serve.hostname}:${serve.port}`);

      return serve;
    },
  };
}
