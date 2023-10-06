import { Database } from "bun:sqlite";
const db = new Database("data/db.sqlite", { create: true });

export default class SQL {
  static select(
    column_list: Array<string>,
    table_list: Array<string>,
    row: { filter: string; value: string }
  ): Array<any> {
    let query = "";
    query += `SELECT ${column_list.join(", ")}\n`;
    query += `FROM ${table_list.join(", ")}\n`;
    query += `WHERE ${row.filter} = $${row.filter}`;
    query += ";";

    const result = db.query(query).all({ [`$${row.filter}`]: row.value });

    if (!!result) return result;
    else throw new Error(`${row.filter} not found`);
  }
  // constructor(query: string) {
  //   this.query = query;
  // }
  // get username_password() {
  //   console.log(this.query);
  //   return;
  // }
}
