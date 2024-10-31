import type { SignupData } from "@site/interfaces";
import { AccountModel } from "@site/models";

class SignupController {
  static async processSignup(signupData: SignupData) {
    const account = new AccountModel(signupData);
    const writeDataResult = await account.writeData();
    console.log("writeDataResult: ", writeDataResult);
  }
}

export { SignupController };
