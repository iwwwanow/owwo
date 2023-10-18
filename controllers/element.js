import { v4 as uuidv4 } from "uuid";

import { eta } from "../config/eta";
import sql from "./sql.ts";

export default class ElementController {
  static index(c) {
    const { params } = c;

    c.element = sql("elements")
      .select(["element_id", "title", "desc"])
      .where({ element_id: params.element_id })
      .get();

    return eta.render("element", c);
  }
  static create(c) {
    const { set, params, cookie } = c;
    console.log("create");

    const element_id = uuidv4();

    sql("elements")
      .insert({ element_id: element_id, author: cookie.auth.user_id })
      .run();

    sql("connections")
      .update({ page_id: params.page_id })
      .where({ element_id })
      .run();

    set.redirect = `/page/${params.page_id}`;
  }
}
