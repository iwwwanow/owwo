import { StaticController } from "@site/controllers";
import { Elysia } from "elysia";

export const staticService = new Elysia({ name: "static-service" }).get(
  "/public/*",
  ({ params: { "*": filepathParam } }) => {
    return StaticController.sendFile({ filepath: filepathParam });
  },
);
