import { mainDb } from "@db/main";
import type { SignupData } from "@site/interfaces";
import { sql } from "drizzle-orm";

class AccountModel {
  signupData: SignupData;

  constructor(signupData: SignupData) {
    this.signupData = signupData;
  }

  async writeData() {
    const query = sql`select "hello world" as text`;
    const result = mainDb.get<{ text: string }>(query);
    console.log(result);

    console.log(this.signupData);
  }
}

export { AccountModel };
