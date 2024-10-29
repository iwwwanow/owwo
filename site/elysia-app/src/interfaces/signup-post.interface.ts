import { USERNAME_INPUT_NAME } from "@site/constants";
import { PASSWORD_INPUT_NAME } from "@site/constants";
import { CONFIRM_PASSWORD_INPUT_NAME } from "@site/constants";
import { t } from "elysia";

// TODO это не тип
const SignupPostType = {
  body: t.Object({
    [USERNAME_INPUT_NAME]: t.String(),
    [PASSWORD_INPUT_NAME]: t.String(),
    [CONFIRM_PASSWORD_INPUT_NAME]: t.String(),
  }),
};

export { SignupPostType };
