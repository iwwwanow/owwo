import { SignupController } from "@site/controllers";
import type { SignupData } from "@site/interfaces";

class SignupService {
  static processPostRequest(signupData: SignupData) {
    SignupController.processSignup(signupData);
  }
}

export { SignupService };
