import { db } from "./index.sql";

export default function all_method(input) {
  if (input) return db.query(query).all(input);
  let result = db.query(query).all();
  if (select_single) {
    const select = select_single;
    result = result.map((obj: any) => obj[select]);
  }
  return result;
}
