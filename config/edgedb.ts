import * as edgedb from "edgedb";

// TODO перепиши, это очень коряво.
import querys from "../dbschema/edgeql-js/index.ts";
export const e = querys;
export const client = edgedb.createClient();
