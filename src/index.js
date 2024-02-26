import { App } from "./app/index.app";

const app = new App();

app.get("/", (c) => c.send("home"));

await app.listen(3000);
