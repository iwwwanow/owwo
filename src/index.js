import sql from "../lib/sql.ts";
import Router from "./router.js";
await sql().init();

const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    return await Router(req);
  },
});

console.log(`OWWO IS RUNNING AT http://${server.hostname}:${server.port}`);
