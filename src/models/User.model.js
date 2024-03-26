import { validatePasswordUtil } from "../utils/validate-password.utils";
import { validateUsernameUtil } from "../utils/validate-username.utils";

export class UserModel {
  static async get(params) {}

  static async set(params) {
    const { username, password } = params;
    validatePasswordUtil(password);
    validateUsernameUtil(username);
  }
}
