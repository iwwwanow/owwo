import { registerRoutes } from "@site/routes";

import { getRouter } from "./getters";
import { getApp } from "./getters";

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
