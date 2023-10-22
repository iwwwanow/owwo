import { eta } from "../config/eta";
import Props from "../middleware/props";

export default class IndexController {
  static renderIndex(c) {
    const props = new Props(c);
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
