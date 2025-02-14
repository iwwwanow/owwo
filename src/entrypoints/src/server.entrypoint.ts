import { registerIndexRoutes } from "@site/routes";
import { registerApiRoutes } from "@site/routes";
import { registerStaticRoutes } from "@site/routes";

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

registerStaticRoutes(app);
registerApiRoutes(app);
registerIndexRoutes(app);
