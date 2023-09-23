import { eta } from "../config/eta";

export default class IndexController {
  static renderIndex() {
    return eta.render("index", {});
  }
  static renderAbout() {
    return eta.render("about", {});
  }
  static renderLogin() {
    return eta.render("login", {});
  }
  static renderSignUp() {
    return eta.render("signup", {});
  }
}
