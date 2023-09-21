import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(8080);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
