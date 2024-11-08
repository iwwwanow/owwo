import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";
import { SignupController } from "@site/controllers";
import type { SignupDtoType } from "@site/dto";
import type { redirect as RedirectType } from "elysia";

import { ConfirmPasswordError } from "../errors";
import { confirmPasswordValidator } from "../validators";

// TODO move to interfaces
type PropsType = {
  signupData: SignupDtoType;
  redirect: RedirectType;
};

class SignupService {
  static processPostRequest(props: PropsType) {
    const { signupData, redirect } = props;

    const {
      password,
      username,
      [CONFIRM_PASSWORD_INPUT_NAME]: confirmPassword,
    } = signupData;

    const isPasswordValid = confirmPasswordValidator(password, confirmPassword);
    if (!isPasswordValid) throw new ConfirmPasswordError();

    try {
      SignupController.processSignup({ username, password });

      // TODO success message
      return redirect("/");
    } catch (error) {
      // TODO check error type and rende it on client
      throw new Error("signup-controller undefined error");
    }
  }
}

export { SignupService };
