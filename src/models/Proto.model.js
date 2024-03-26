import { db } from "./Sql.model";

export class ProtoModel {
  static queryDir = "./src/sql";

  static async getQueryText(queryName) {
    const queryPath = `${this.queryDir}/${queryName}.sql`;
    const queryFile = Bun.file(queryPath);
    const queryText = await queryFile.text();
    return queryText;
  }

  static async queryRun(queryName, params) {
    const queryText = await this.getQueryText(queryName);
    const query = db.query(queryText);
    await query.run(...params);
    return;
  }
}
