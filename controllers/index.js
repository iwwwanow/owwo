import { eta } from "../config/eta";
import Props from "../middleware/props";

export default class IndexController {
  static async renderIndex(c) {
    const props = await new Props(c).init();
    return eta.render("INDEX", props);
  }

  static async renderProfile(c) {
    const props = await new Props(c).init();
    return eta.render("PROFILE", props);
  }

  static async renderPage(c) {
    const props = await new Props(c).init();
    return eta.render("PAGE", props);
  }

  static async renderElement(c) {
    const props = await new Props(c).init();
    return eta.render("ELEMENT", props);
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

  static renderError({ code, error }) {
    console.log(error);
    return eta.render("error", { code, error });
  }
}
