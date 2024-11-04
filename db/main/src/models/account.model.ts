import { mainDb } from "@db/main";
import { accountsTable } from "@db/main";
import type { SignupData } from "@site/interfaces";

class AccountModel {
  signupData: SignupData;

  constructor(signupData: SignupData) {
    this.signupData = signupData;
  }

  async writeData() {
    const { username, password } = this.signupData;
    await mainDb.insert(accountsTable).values({ username, password });
  }
}

export { AccountModel };
