import { App } from "./app";

const app = new App();
await app.get("/", () => new Response("home"));
await app.listen(3000);
