import { verify } from "../deps.ts";
import { key } from "./jwt.js";

export const validate = async ({ request, cookies }, next) => {
  // TODO при каждом запросе запускает несоклько валидаций подряд. не понимаю почему, разберись.
  // console.log("validate start:", request.auth);

  if (!(await cookies.get("token"))) {
    // TODO перепроверь этот момент. выглядит ненадежно. сижу больной голова плохо варит.
    await next();
  } else {
    try {
      const token = await cookies.get("token");
      const result = await verify(token, key);
      if (result) {
        request.auth = true;
        request.authUsername = result.username;
      }
      await next();
    } catch (err) {
      cookies.set("token", "");
      await next();
    }

    // console.log("validate end:", request.auth);
  }
};
