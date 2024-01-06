import check_env from "../utils/check_env.utils.js";

import sql from "../lib/sql.js";
import owwo_app from "../server/owwo_app.server.js";

await check_env();

await sql().init();

const app = owwo_app();

app.listen(8080);
