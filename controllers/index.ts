import { eta } from "../config/eta";

export default class IndexController {
  static renderIndex({ username_cookie }: { username_cookie?: string }) {
    return eta.render("index", { cookie: { username: username_cookie } });
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
