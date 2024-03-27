import { db } from "./sql.model";

export class ProtoModel {
  static queryDir = "./src/sql";

  static async getQueryText(queryName) {
    const queryPath = `${this.queryDir}/${queryName}.sql`;
    const queryFile = Bun.file(queryPath);
    const queryText = await queryFile.text();
    return queryText;
  }

  static async getQuery(queryName) {
    const queryText = await this.getQueryText(queryName);
    const query = db.query(queryText);
    return query;
  }

  static async queryGet(queryName, params) {
    const query = await this.getQuery(queryName);
    const result = await query.get(...params);
    query.finalize();
    return result;
  }

  static async queryRun(queryName, params) {
    const query = await this.getQuery(queryName);
    query.run(...params);
    query.finalize();
    return;
  }
}
