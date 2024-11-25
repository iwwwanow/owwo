import { AccountModel } from "@site/models";

import type { SignupDataType } from "./signup.interface.js";

class SignupController {
  static async processSignup(signupData: SignupDataType) {
    const account = new AccountModel(signupData);
    const writeDataResult = await account.writeData();
    return writeDataResult;
  }
}

export { SignupController };
