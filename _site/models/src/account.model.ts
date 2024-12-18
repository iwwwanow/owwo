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
    return AccountModel.getData(this.accountData.username);
  }

  async deleteData() {
    return AccountModel.deleteData(this.accountData.username);
  }

  static async deleteData(username: string): Promise<void> {
    return mainDb
      .delete(accountsTable)
      .where(eq(accountsTable.username, username));
  }

  static async getData(username: string) {
    return mainDb
      .select()
      .from(accountsTable)
      .where(eq(accountsTable.username, username));
  }
}

export { AccountModel };
