import { mainDb } from "@db/main";
import { accountsTable } from "@db/main";
import type { SignupDataType } from "@site/dto";

class AccountModel {
  signupData: SignupDataType;

  constructor(signupData: SignupDataType) {
    this.signupData = signupData;
  }

  async writeData() {
    const { username, password } = this.signupData;
    await mainDb.insert(accountsTable).values({ username, password });
  }
}

export { AccountModel };
