import { Database } from "bun:sqlite";
const db = new Database("data/db.sqlite", { create: true });

export default function sql(table_name: string) {
  let query: string = "";
  let select_single: string = "";

  return {
    init: async function (): Promise<void> {
      db.exec("PRAGMA journal_mode = WAL;");
      db.exec("PRAGMA foreign_keys = ON;");

      this.create_table({
        table_name: "users",
        columns: {
          user_id: "TEXT PRIMARY KEY",
          username: "TEXT NOT NULL",
          password: "TEXT NOT NULL",
        },
      });
      this.custom("createIndex_idx_users_username");

      this.create_table({
        table_name: "pages",
        columns: {
          page_id: "TEXT PRIMARY KEY",
          title: "TEXT",
          desc: "TEXT",
        },
      });

      await this.custom("createTable_authors");
      await this.custom("createTrigger_insertAuthors_pageId");

      this.create_table({
        table_name: "elements",
        columns: {
          element_id: "TEXT PRIMARY KEY",
          text: "TEXT",
          author_id: "TEXT",
        },
      });

      await this.custom("createTable_connections");
      await this.custom("createTrigger_insertConnections_elementId");
    },

    custom: async function (input: string) {
      const path = `./controllers/sql_custom/${input}.sql`;
      const file = Bun.file(path);
      const query = await file.text();
      this.run(query);
    },

    custom_all: async function (input: string) {
      const path = `./controllers/sql_custom/${input}.sql`;
      const file = Bun.file(path);
      query = await file.text();
      return this;
    },

    create_table: function ({
      table_name,
      columns,
    }: {
      table_name: string;
      columns: { [key: string]: string };
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

      this.run(query);
    },

    select: function (input: string | Array<string>) {
      query = "";

      if (typeof input === "string") select_single = input;

      query += `SELECT ${input}\n`;
      query += `FROM ${table_name}\n`;

      return this;
    },

    select_last: function (input: string | Array<string>) {
      this.select(input);
      query += `ORDER BY rowid DESC\nLIMIT 1;`;
      return this;
    },

    insert: function (input: { [key: string]: string }) {
      if (table_name) {
        query += `INSERT INTO ${table_name} `;
      }

      let columns: Array<string> = [];
      let values: Array<string> = [];
      //
      Object.keys(input).forEach((column, index, array) => {
        const value = input[column];
        columns.push(column);
        values.push(`'${value}'`);
      });
      //
      query += `(${columns.join(", ")})\n`;
      query += "VALUES\n";
      query += `(${values.join(", ")});`;

      return this;
    },

    update: function (input: { [key: string]: string }) {
      if (table_name) {
        query += `UPDATE ${table_name}\n`;
      }

      query += "SET ";

      Object.keys(input).forEach((column, index, array) => {
        let value = input[column];
        query += `${column} = '${value}'`;
        if (index < array.length - 1) query += ",";
        query += "\n";
      });

      return this;
    },

    where: function (input: { [key: string]: string }) {
      query += "WHERE ";

      Object.keys(input).forEach((column) => {
        let value = (input as any)[column];
        query += `${column} = '${value}';\n`;
      });

      return this;
    },

    delete: function () {
      // TODO странно выглядит.
      db.exec("PRAGMA foreign_keys = ON;");

      query += `DELETE FROM ${table_name}\n`;
      return this;
    },

    run: function (input?: string) {
      if (input) query = input;
      db.query(query).run();
      return;
    },

    get: function (): string | number | Boolean | { [key: string]: any } {
      let result = db.query(query).get() as { [key: string]: any };
      // if (!result) throw new Error("nothing selected");
      if (!result) return false;
      if (select_single) result = result[select_single];
      return result;
    },

    all: function (input) {
      if (input) return db.query(query).all(input);
      let result = db.query(query).all();
      if (select_single) {
        const select = select_single;
        result = result.map((obj: any) => obj[select]);
      }
      return result;
    },
  };
}
