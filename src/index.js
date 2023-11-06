import sql from "../lib/sql.ts";
import Router from "./router.js";
await sql().init();

if (!process.env.JWT_SECRET) throw new Error("need some secret");

const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    return await Router(req);
  },
});

console.log(`OWWO IS RUNNING AT http://${server.hostname}:${server.port}`);
