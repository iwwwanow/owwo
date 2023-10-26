import { eta } from "../config/eta";
import Props from "../middleware/props";

export default class IndexController {
  static async renderIndex(c) {
    const props = await new Props(c).init();
    return eta.render("Index", props);
  }

  static async renderProfile(c) {
    const props = await new Props(c).init();
    return eta.render("Profile", props);
  }

  static async renderPage(c) {
    const props = await new Props(c).init();
    return eta.render("Page", props);
  }

  static async renderElement(c) {
    const props = await new Props(c).init();
    return eta.render("Element", props);
  }

  static renderAbout(c) {
    return eta.render("About", c);
  }
  static renderLogin(c) {
    return eta.render("Login", c);
  }
  static renderSignUp(c) {
    return eta.render("Signup", c);
  }

  static renderError({ code, error }) {
    console.log(error);
    return eta.render("Error", { code, error });
  }
}
