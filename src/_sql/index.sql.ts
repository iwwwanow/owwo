import { Database } from "bun:sqlite";
export const db = new Database("data/db.sqlite", { create: true });

import run_method from "./run_method.sql.ts";
import get_method from "./get_method.sql.ts";
import all_method from "./all_method.sql.ts";

import init_staticMethod from "./init_staticMethod.sql.js";

import custom_query from "./custom_query.sql.js";
import customAll_query from "./customAll_query.sql.js";

import tableCreate_query from "./tableCreate_query.sql.ts";

import insert_query from "./insert_query.sql.ts";
import update_query from "./update_query.sql.ts";
import select_query from "./select_query.sql.js";
import selectLast_query from "./selectLast_query.sql.js";
import where_query from "./where_query.sql.ts";
import order_query from "./order_query.sql.ts";
import delete_query from "./delete_query.sql.ts";
import random_query from "./random_query.sql.ts";

export default class SQL {
  table_name: string;

  constructor(table_name: string) {
    this.table_name = table_name;
  }

  run = run_method;
  get = get_method;
  all = all_method;

  static init = init_staticMethod;

  custom = custom_query;
  customAll = customAll_query;
  tableCreate = tableCreate_query;
  insert = insert_query;
  update = update_query;
  select = select_query;
  selectLast = selectLast_query;
  where = where_query;
  order = order_query;
  random = random_query;
  delete = delete_query;
}

// export default function sql(table_name: string) {
//   let query: string = "";
//   let select_single: string = "";
//
//   return {
//   };
// }
