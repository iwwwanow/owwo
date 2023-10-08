import { Database } from "bun:sqlite";
const db = new Database("data/db.sqlite", { create: true });

export default class sql {
  query: string = "";
  table_name?: string;
  table_names?: Array<string>;
  select_single?: string;

  constructor(input: string | Array<string>) {
    if (typeof input === "string") {
      this.table_name = input;
    } else if (Array.isArray(input)) {
      this.table_names = input;
    }
  }

  static async custom(input: string) {
    const path = `./controllers/sql_custom/${input}.sql`;
    const file = Bun.file(path);
    const query = await file.text();
    this.static_run(query);
  }

  static createTable({
    table_name,
    columns,
  }: {
    table_name: string;
    columns: { [name: string]: string | any };
  }) {
    let query = "";
    query += `CREATE TABLE IF NOT EXISTS ${table_name} (\n`;

    Object.keys(columns).forEach((column, index, array) => {
      let data_type = "";
      data_type = columns[column];
      query += `${column} ${data_type}`;
      if (index < array.length - 1) query += ",";
      query += "\n";
    });

    query += ");";

    this.static_run(query);
  }

  select(input: string | Array<string>) {
    this.query = "";

    if (typeof input === "string") this.select_single = input;

    this.query += `SELECT ${input}\n`;
    this.query += `FROM ${this.table_name}\n`;

    return this;
  }

  last() {
    this.query += `ORDER BY rowid DESC\nLIMIT 1;`;
    return this;
  }

  insert(input: { [key: string]: string }) {
    if (this.table_name) {
      this.query += `INSERT INTO ${this.table_name} `;
    }

    let columns: Array<string> = [];
    let values: Array<string> = [];

    Object.keys(input).forEach((column, index, array) => {
      const value = input[column];
      columns.push(column);
      values.push(`'${value}'`);
    });

    this.query += `(${columns.join(", ")})\n`;
    this.query += "VALUES\n";
    this.query += `(${values.join(", ")});`;

    return this;
  }

  update(input: { [key: string]: string }) {
    if (this.table_name) {
      this.query += `UPDATE ${this.table_name}\n`;
    }

    this.query += "SET ";

    Object.keys(input).forEach((column, index, array) => {
      const value = input[column];
      this.query += `${column} = '${value}'`;
      if (index < array.length - 1) this.query += ",";
      this.query += "\n";
    });

    return this;
  }

  where(input: { [key: string]: string | number }) {
    this.query += "WHERE\n";

    Object.keys(input).forEach((column) => {
      const value = (input as any)[column];
      this.query += `${column} = '${value}';\n`;
    });

    return this;
  }

  static static_run(query: string) {
    db.query(query).run();
    return;
  }

  run() {
    db.query(this.query).run();
    return;
  }

  get(): string | number | { [key: string]: any } {
    console.log(this.query);
    let result = db.query(this.query).get() as { [key: string]: any };
    console.log(result);
    if (!result) throw new Error("nothing selected");
    if (this.select_single) result = result[this.select_single];
    return result;
  }

  all() {
    let result = db.query(this.query).all();
    if (this.select_single) {
      const select = this.select_single;
      result = result.map((obj) => obj[select]);
    }
    return result;
  }
}
