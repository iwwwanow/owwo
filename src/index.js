import check_env from "../utils/check_env.utils.js";

import sql from "../lib/sql.js";
import Router from "./router.js";

await check_env();

await sql().init();

const server = Bun.serve({
  port: 8080,
  async fetch(req) {
    return await Router(req);
  },
});

console.log(`OWWO IS RUNNING AT http://${server.hostname}:${server.port}`);
