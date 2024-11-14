import { app } from "./elysia.app.js";
import { getLaunchText } from "./getters/index.js";
import { checkEnvs } from "./helpers/index.js";

// TODO toutes to consts
// TODO link routes consts with a href consts

checkEnvs();

if (!app?.server?.url) {
  console.error(app);
  throw new Error(`error on elysia-app launch`);
}

const {
  server: { url },
} = app;

console.log(getLaunchText(url));
