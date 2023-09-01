import { verify } from "../deps.ts";
import { key } from "./jwt.js";

export const validate = async ({ request, cookies }, next) => {
  if (!(await cookies.get("token"))) {
    // TODO перепроверь этот момент. выглядит ненадежно. сижу больной голова плохо варит.
    console.log("not cookies");
    await next();
  } else {
    const token = await cookies.get("token");
    const result = await verify(token, key);
    if (result) {
      request.auth = true;
      request.username = result.username;
    }
    await next();
  }
};
