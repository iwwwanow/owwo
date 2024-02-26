import { App } from "./app/index.app";

const app = new App();

app.get("/page/:id", (c) => c.send("some")).get("/", (c) => c.send("home"));

await app.listen(3000);
