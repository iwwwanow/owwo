import { eta } from "../config/eta";

export default class IndexController {
  static renderIndex({
    cookie_authUsername,
  }: {
    cookie_authUsername?: string;
  }) {
    return eta.render("index", { cookie_authUsername });
  }
  static renderError({
    cookie_authUsername,
    code,
    error,
  }: {
    cookie_authUsername: string;
    code: number;
    error: Error;
  }) {
    console.log(error);
    return eta.render("error", { cookie_authUsername, code, error });
  }
  static renderAbout({ cookie_authUsername }: { cookie_authUsername: string }) {
    return eta.render("about", { cookie_authUsername });
  }
  static renderLogin() {
    return eta.render("login", {});
  }
  static renderSignUp() {
    return eta.render("signup", {});
  }
}
