import { USERNAME_INPUT_NAME } from "@site/constants";
import { PASSWORD_INPUT_NAME } from "@site/constants";
import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";

import type { GetSignupDataType } from "./signup-data.interface";

// TODO maybe rename to ...formatted-data?
export const getSignupData: GetSignupDataType = (body) => {
  const username = body[USERNAME_INPUT_NAME];
  const password = body[PASSWORD_INPUT_NAME];
  const confirmPassword = body[CONFIRM_PASSWORD_INPUT_NAME];

  return {
    username,
    password,
    confirmPassword,
  };
};
