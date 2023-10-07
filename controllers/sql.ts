import { Database } from "bun:sqlite";
const db = new Database("data/db.sqlite", { create: true });

export default class SQL {
  static createIndex(
    index_name: string,
    table_name: string,
    column_name: string
  ): void {
    const query = `CREATE UNIQUE INDEX IF NOT EXISTS ${index_name} ON ${table_name} (${column_name});`;
    db.query(query).run();
    return;
  }
  static createTable(
    table_name: string,
    fields: Array<{ name: string; option: string }>
  ): void {
    let query = "";
    query += "CREATE TABLE IF NOT EXISTS\n";
    query += `${table_name} (\n`;
    for (let field of fields) {
      query += `${field.name} ${field.option}`;
      if (field !== fields.at(-1)) query += ",";
      query += "\n";
    }
    query += ");";
    db.query(query).run();
    return;
  }
  static select(
    column_names: Array<string>,
    table_names: Array<string>,
    conditions: Array<{ name: string; value: string | number }>
  ): Array<any> {
    let query = "";
    query += `SELECT\n`;
    query += `${column_names.join(", ")}\n`;
    query += `FROM\n`;
    query += `${table_names.join(", ")}\n`;
    query += `WHERE\n`;
    for (let condition of conditions) {
      query += `${condition.name} = $${condition.name}`;
      if (condition !== conditions.at(-1)) query += ",";
      query += "\n";
    }
    query += ";";

    let obj: any = {};
    conditions.forEach(
      (condition: { name: string; value: string | number }, index: number) => {
        const key = "$" + condition.name;
        obj[key] = conditions[index].value;
      }
    );

    const result = db.query(query).all(obj);

    if (!!result) return result;
    else throw new Error(`${conditions.name} not found`);
  }

  static insert(table_name: string, column_names: Array<string>, values: any) {
    let query = "";
    query += `INSERT INTO\n`;
    query += `${table_name} (${column_names.join(", ")})\n`;
    query += `VALUES\n`;
    query += `($${column_names.join(", $")});`;

    let obj: any = {};
    column_names.forEach((column_name, index) => {
      const key = "$" + column_name;
      obj[key] = values[index];
    });

    db.query(query).run(obj);
    return;
  }
}
