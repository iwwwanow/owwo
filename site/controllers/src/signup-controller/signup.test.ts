import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";
import { mock } from "bun:test";

import { SignupController } from "./signup.controller";

const signupMockData = mock(() => ({
  username: "mock-username",
  password: "mock-password",
}));

describe("signup-controller-test", () => {
  test("process-signup-test", async () => {
    const signupData = signupMockData();
    await SignupController.processSignup(signupData);

    // TODO получение результата записи, он должен совпадать с тем, что мы отправили на запись

    //     expect(2 + 2).toBe(5);
  });
});
