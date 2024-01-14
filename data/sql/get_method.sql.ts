import { db } from "./index.sql";

export default function get_method():
  | string
  | number
  | Boolean
  | { [key: string]: any } {
  let result = db.query(query).get() as { [key: string]: any };
  // if (!result) throw new Error("nothing selected");
  if (!result) return false;
  if (select_single) result = result[select_single];
  return result;
}
