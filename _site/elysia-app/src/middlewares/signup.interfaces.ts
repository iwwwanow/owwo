import type { SignupBodyDtoType } from "@site/dto";
import type { redirect as RedirectType } from "elysia";

export type PropsType = {
  signupData: SignupBodyDtoType;
  redirect: RedirectType;
};
