import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";
import { SignupController } from "@site/controllers";

import { UniqueUsernameError } from "../errors/index";
import { ConfirmPasswordError } from "../errors/index";
import { confirmPasswordValidator } from "../validators/index";
import { UNIQUE_USERNAME_ORM_ERROR_MESSAGE } from "./signup.constants";
import type { PropsType } from "./signup.interfaces";

export class SignupMiddleware {
  static async processPostRequest(props: PropsType) {
    const { signupData, redirect } = props;

    const {
      password,
      username,
      [CONFIRM_PASSWORD_INPUT_NAME]: confirmPassword,
    } = signupData;

    const isPasswordValid = confirmPasswordValidator(password, confirmPassword);
    if (!isPasswordValid) throw new ConfirmPasswordError();

    try {
      await SignupController.processSignup({ username, password });

      const redirectSearchparams = new URLSearchParams();
      redirectSearchparams.append("success-message", "test-client-message");
      const redirectSearchparamsString = redirectSearchparams.toString();
      const redirectHref = `/?${redirectSearchparamsString}`;

      return redirect(redirectHref);
    } catch (e) {
      const error = e as Error;

      console.error("ERROR ON SIGNUP SERVICE:");
      console.error(error);

      if (error.message === UNIQUE_USERNAME_ORM_ERROR_MESSAGE) {
        throw new UniqueUsernameError();
      }

      throw new Error("signup-controller undefined error");
    }
  }
}
