import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";
import { SignupController } from "@site/controllers";
import type { SignupDtoType } from "@site/dto";

import { ConfirmPasswordError } from "../errors";
import { confirmPasswordValidator } from "../validators";

class SignupService {
  static processPostRequest(signupData: SignupDtoType) {
    const {
      password,
      username,
      [CONFIRM_PASSWORD_INPUT_NAME]: confirmPassword,
    } = signupData;

    const isPasswordValid = confirmPasswordValidator(password, confirmPassword);
    if (!isPasswordValid) throw new ConfirmPasswordError();

    SignupController.processSignup({ username, password });
  }
}

export { SignupService };
