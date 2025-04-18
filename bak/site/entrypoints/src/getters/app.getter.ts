import type { Handler } from "@site/routes";
import type { App } from "@site/routes";

export const getApp = ({ router }): App => {
  const app = {
    get: (path: string, handler: Handler) => router.add("GET", path, handler),
    post: (path: string, handler: Handler) => router.add("POST", path, handler),
    put: (path: string, handler: Handler) => router.add("PUT", path, handler),
    delete: (path: string, handler: Handler) =>
      router.add("DELETE", path, handler),
  };

  return app;
};
