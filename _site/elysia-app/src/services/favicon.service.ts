import { FaviconController } from "@site/controllers";
import { Elysia } from "elysia";

export const faviconService = new Elysia({ name: "favicon-service" }).get(
  "/favicon.ico",
  () => {
    FaviconController.send();
  },
);
