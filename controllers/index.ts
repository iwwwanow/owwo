import { eta } from "../config/eta";

export default class IndexController {
  static renderIndex({
    cookie_authUsername,
  }: {
    cookie_authUsername?: string;
  }) {
    return eta.render("index", { cookie_authUsername });
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
