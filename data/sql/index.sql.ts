import { Database } from "bun:sqlite";
export const db = new Database("data/db.sqlite", { create: true });

import run from "./run.sql.ts";
import get from "./get.sql.ts";
import all from "./all.sql.ts";

import init from "./init.sql.js";
import custom from "./custom.sql.js";
import customAll from "./customAll.sql.js";
import tableCreate from "./tableCreate.sql.js";
import insert from "./insert.sql.ts";
import update from "./update.sql.ts";
import select from "./select.sql.js";
import selectLast from "./selectLast.sql.js";
import where from "./where.sql.ts";
import order from "./order.sql.ts";
import random from "./random.sql.ts";
import delete from "./delete.sql.ts";

export default function sql(table_name: string) {
  let query: string = "";
  let select_single: string = "";

  return {
    init,
    custom,
    customAll,
    tableCreate,
    insert,
    update,
    select,
    selectLast,
    where,
    order,
    random,
    delete,
    run,
    get,
    all,
  };
}
