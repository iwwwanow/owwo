if (!Bun.env.CLEAN_UNACTIVE)
  throw new Error("нужна переменная. будь внимателен.");

import sql from "../lib/sql.ts";
import User from "../controllers/user.controller.js";

const users = sql("users")
  .select(["user_id", "username", "date_lastModify"])
  .all();

const constUsers = [
  "admin",
  "EV4IX",
  "ChannelOfTheCultOfTheGoddessOfFlowers",
  "effectivnayarabota1",
];

users.forEach((user) => {
  const moduleMS = Date.now() - user.date_lastModify;
  const moduleDays = moduleMS / (1000 * 60 * 60 * 24);
  if (!constUsers.includes(user.username)) {
    if (moduleDays > Bun.env.CLEAN_UNACTIVE) {
      User.delete_username(user.username);
    }
  }
});
