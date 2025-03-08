import { registerRoutes } from "@site/routes";

import { getRouter } from "./getters/index.js";
import { getApp } from "./getters/index.js";

const router = getRouter();
const app = getApp({ router });

Bun.serve({
  port: 3000,
  fetch(request) {
    return router.handle(request);
  },
});

console.log("Server running on http://localhost:3000");

registerRoutes(app);
