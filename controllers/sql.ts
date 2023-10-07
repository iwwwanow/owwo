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
  static createTrigger(
    trigger_name: string,
    trigger_table: string,
    target_table: string,
    target_column: string
  ) {
    let query = "";
    query += `CREATE TRIGGER IF NOT EXISTS ${trigger_name}\n`;
    query += `AFTER INSERT ON ${trigger_table}\n`;
    query += "BEGIN\n";
    query += "INSERT INTO\n";
    query += `${target_table} (${target_column})\n`;
    query += "VALUES\n";
    query += `(NEW.${target_column});\n`;
    query += "END;";
    db.query(query).run();
    return;
  }
  static select(
    column_names: Array<string>,
    table_names: Array<string>,
    conditions: Array<{ name: string; value: string | number }>
  ): Array<any> {
    // TODO сделать выбро по одному элементу.
    // Входящий элемент будет строки
    // Результат будет возвращаться по методу GET

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

  static selectLast(table_name: string, column_name: string) {
    let query = "";
    query += `SELECT ${column_name}\n`;
    query += `FROM ${table_name}\n`;
    query += `ORDER BY rowid DESC\nLIMIT 1;`;

    // TODO попровь тип, не понимаю.
    let result: any = db.query(query).get();
    if (!!result) return result[column_name];
    else throw new Error("last item not found");
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
  static update(
    table_name: string,
    column_names: Array<string>,
    values: Array<string>,
    condition_column: string,
    condition_value: string
  ) {
    let query = "";
    query += `UPDATE ${table_name}\n`;
    query += "SET ";
    column_names.forEach((column_name: string, index: number) => {
      query += `${column_name} = ${values[index]}\n`;
    });
    query += "WHERE\n";
    query += `${condition_column} = ${condition_value};`;
    db.query(query).run();
    return;
  }
}
