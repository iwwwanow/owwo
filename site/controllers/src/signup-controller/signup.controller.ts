import type { SignupData } from "@site/interfaces";
import { AccountModel } from "@site/models";

class SignupController {
  static async processSignup(signupData: SignupData) {
    const account = new AccountModel(signupData);
    await account.writeData();
    return console.log(signupData);
  }
}

export { SignupController };
