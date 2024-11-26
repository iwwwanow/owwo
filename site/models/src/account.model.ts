import { mainDb } from "@db/main";
import { accountsTable } from "@db/main";
import type { AccountDataType } from "@site/dto";
import { eq } from "drizzle-orm";

class AccountModel {
  accountData: AccountDataType;

  constructor(accountData: AccountDataType) {
    this.accountData = accountData;
  }

  async writeData() {
    await mainDb.insert(accountsTable).values(this.accountData);
  }

  async getData() {
    return mainDb
      .select()
      .from(accountsTable)
      .where(eq(accountsTable.username, this.accountData.username));
  }

  async deleteData() {
    return mainDb
      .delete(accountsTable)
      .where(eq(accountsTable.username, this.accountData.username));
  }
}

export { AccountModel };
