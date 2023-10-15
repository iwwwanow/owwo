import { eta } from "../config/eta";

export default class IndexController {
  static renderIndex(c) {
    console.log(c.cookie.auth);
    return eta.render("index", c);
  }
  static renderError({ code, error }) {
    console.log(error);
    return eta.render("error", { code, error });
  }
  static renderAbout(c) {
    return eta.render("about", {});
  }
  static renderLogin(c) {
    console.log(c);
    return eta.render("login", c);
  }
  static renderSignUp(c) {
    return eta.render("signup", {});
  }
}
