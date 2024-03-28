import { ProtoModel } from "./proto.model";

export class UserModel extends ProtoModel {
  static async get(params) {
    const { username } = params;
    const user = await super.queryGet("get-user", [username]);
    return user;
  }

  static async set(params) {
    const { userId, username, password } = params;

    await super.queryRun("set-user", [userId, username, password]);
  }
}
