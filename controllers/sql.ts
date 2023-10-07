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
    fields: Array<{
      name: string;
      option: string;
      type?: string;
      foreign?: {
        column: string;
        parent_table: string;
        parent_column: string;
        options: string;
      };
    }>
  ): void {
    let query = "";

    query += "CREATE TABLE IF NOT EXISTS";
    query += `\n${table_name} (`;

    let primary_indexes: Array<number> = [];
    let foreign_indexes: Array<number> = [];
    fields.forEach((field, index) => {
      query += `\n${field.name} ${field.option}`;
      if (field !== fields.at(-1)) query += ",";
      if (field.type === "primary") primary_indexes.push(index);
      if (!!field.foreign) foreign_indexes.push(index);
    });

    let primary = "";
    if (!!primary_indexes.length) {
      query += ",\n";
      primary += `PRIMARY KEY (`;
      primary_indexes.forEach((index) => {
        primary += `${fields[index].name}`;
        if (index !== primary_indexes.at(-1)) primary += ", ";
      });
      primary += `)`;
    }

    query += primary;

    let foreign_string_array: Array<string> = [];
    if (!!foreign_indexes.length) {
      query += ",\n";
      foreign_indexes.forEach((index) => {
        const foreign_obj = fields[index].foreign;
        let foreign_string = "";
        foreign_string += `FOREIGN KEY `;
        foreign_string += `(${foreign_obj?.column}) `;
        foreign_string += `REFERENCES `;
        foreign_string += `${foreign_obj?.parent_table} `;
        foreign_string += `(${foreign_obj?.parent_column}) `;
        foreign_string += `${foreign_obj?.options}`;

        foreign_string_array.push(foreign_string);
      });
      query += foreign_string_array.join(",\n");
    }

    query += "\n);";
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
    else {
      const names: Array<string> = [];
      conditions.forEach((condition) => {
        names.push(condition.name);
      });
      throw new Error(`${names.join(", ")} not found`);
    }
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
