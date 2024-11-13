import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";
import { SignupController } from "@site/controllers";
import type { SignupBodyDtoType } from "@site/dto";
import type { redirect as RedirectType } from "elysia";

import { UniqueUsernameError } from "../errors";
import { ConfirmPasswordError } from "../errors";
import { confirmPasswordValidator } from "../validators";
import { UNIQUE_USERNAME_ORM_ERROR_MESSAGE } from "./signup.constants";

// TODO move to interfaces
type PropsType = {
  signupData: SignupBodyDtoType;
  redirect: RedirectType;
};

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

      // TODO success message
      const redirectSearchparams = new URLSearchParams();
      redirectSearchparams.append("success-message", "test-client-message");
      const redirectSearchparamsString = redirectSearchparams.toString();
      const redirectHref = `/?${redirectSearchparamsString}`;

      return redirect(redirectHref);
    } catch (error) {
      // TODO check error type and rende it on client

      // TODO to const
      if (error.message === UNIQUE_USERNAME_ORM_ERROR_MESSAGE) {
        throw new UniqueUsernameError();
      }

      console.error("ERROR ON SIGNUP SERVICE:");
      console.error(error);
      throw new Error("signup-controller undefined error");
    }
  }
}
