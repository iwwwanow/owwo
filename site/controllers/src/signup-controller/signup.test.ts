import { AccountModel } from "@site/models";
import { password } from "bun";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";
import { mock } from "bun:test";

import { SignupController } from "./signup.controller";

const randomUuid = self.crypto.randomUUID();

const signupMockData = mock(() => ({
  username: randomUuid,
  password: randomUuid,
}));

describe("signup-controller-test", () => {
  test("process-signup-test", async () => {
    const accountData = signupMockData();
    await SignupController.processSignup(accountData);

    const account = new AccountModel(accountData);
    const accountDbData = await account.getData();

    expect(accountDbData[0]).toMatchObject(accountData);

    await account.deleteData();
  });
});
