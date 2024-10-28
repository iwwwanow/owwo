import { SignupController } from "@site/controllers";

class SignupService {
  static processPostRequest() {
    SignupController.processSignup();
  }
}

export { SignupService };
