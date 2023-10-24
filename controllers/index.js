import sql from "./sql.ts";
import { eta } from "../config/eta";

import File from "../middleware/file.ts";
import Props from "../middleware/props";

export default class IndexController {
  static renderIndex(c) {
    const props = new Props(c);

    props.users = sql("users")
      .select(["user_id", "username"])
      .order("date_lastModify")
      .all();

    console.log(props.users);

    props.users.map((user) => {
      return (user.src = File.get_src("users", user.user_id));
    });

    return eta.render("index", props);
  }
  static renderError({ code, error }) {
    console.log(error);
    return eta.render("error", { code, error });
  }
  static renderAbout(c) {
    return eta.render("about", c);
  }
  static renderLogin(c) {
    return eta.render("login", c);
  }
  static renderSignUp(c) {
    return eta.render("signup", c);
  }
}
