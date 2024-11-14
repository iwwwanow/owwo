import { AccountModel } from "@db/main";

import type { SignupDataType } from "./signup.interface.js";

class SignupController {
  static async processSignup(signupData: SignupDataType) {
    const account = new AccountModel(signupData);
    const writeDataResult = await account.writeData();
    console.log("writeDataResult: ", writeDataResult);
  }
}

export { SignupController };
