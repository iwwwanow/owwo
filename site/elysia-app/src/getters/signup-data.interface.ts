import type { Static } from "elysia";

import { SignupPostType } from "../interfaces";

type GetSignupDataBodyProp = Static<(typeof SignupPostType)["body"]>;

type GetSignupDataType = (body: GetSignupDataBodyProp) => {
  username: string;
  password: string;
  confirmPassword: string;
};

export type { GetSignupDataType };
