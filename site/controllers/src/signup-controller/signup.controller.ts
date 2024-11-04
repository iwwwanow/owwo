import { AccountModel } from "@db/main";
import type { SignupData } from "@site/interfaces";

class SignupController {
  static async processSignup(signupData: SignupData) {
    const account = new AccountModel(signupData);
    const writeDataResult = await account.writeData();
    console.log("writeDataResult: ", writeDataResult);
  }
}

export { SignupController };
