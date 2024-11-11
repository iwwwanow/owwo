// TODO где еще используется dto?
import { signupDto } from "@site/dto";
import { Elysia } from "elysia";

import { SignupMiddleware } from "../middlewares";

export const signupService = new Elysia({ name: "signup-service" }).post(
  "/signup",
  (ctx) => {
    const { redirect, body: signupData } = ctx;
    return SignupMiddleware.processPostRequest({ signupData, redirect });
  },
  {
    body: signupDto,
  },
);
