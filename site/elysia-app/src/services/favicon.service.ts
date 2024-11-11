import { Elysia } from "elysia";

export const faviconService = new Elysia({ name: "favicon-service" }).get(
  "/favicon.ico",
  () => {
    // TODO
    console.log("need to provide favicon");
    return "bla";
  },
);
