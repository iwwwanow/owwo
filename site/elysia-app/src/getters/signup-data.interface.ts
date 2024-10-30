import type { SignupData } from "@site/interfaces";
import type { Static } from "elysia";

import { SignupPostType } from "../interfaces";

type GetSignupDataBodyProp = Static<(typeof SignupPostType)["body"]>;

type GetSignupDataType = (body: GetSignupDataBodyProp) => SignupData;

export type { GetSignupDataType };
