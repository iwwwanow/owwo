import { IndexComponent } from "test-templates";
import { Bte } from "rewriter";

const bte = new Bte();
await bte.init();

export const app = async () => {
  const server = Bun.serve({
    async fetch(req) {
      const rewritedHtmlPage = await bte.getPageHtml(IndexComponent, {
        color: "red",
      });

      return new Response(rewritedHtmlPage, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    },
  });

  console.log(`bun server started at ${server.url.href}`);
  return server;
};
