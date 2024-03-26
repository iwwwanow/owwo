// import crypto from "crypto";

import { ProtoModel } from "./proto.model";
import { validatePasswordUtil } from "../utils/validate-password.utils";
import { validateUsernameUtil } from "../utils/validate-username.utils";

export class UserModel extends ProtoModel {
  static async get(params) {}

  static async set(params) {
    const { username, password } = params;

    validatePasswordUtil(password);
    validateUsernameUtil(username);

    await super.queryRun("set-user", [
      self.crypto.randomUUID(),
      username,
      await Bun.password.hash(password),
    ]);
  }
}
