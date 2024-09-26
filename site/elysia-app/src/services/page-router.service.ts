import { StaticController } from "@site/controllers";
import { ViewController } from "@site/controllers";

class PageRouterService {
  static getFavicon() {
    return console.log("TODO create favicon");
  }

  static getPublic() {
    return StaticController.sendFile();
  }

  static getHomePage() {
    return ViewController.renderHomePage();
  }

  static getAboutPage() {
    return ViewController.renderAboutPage();
  }

  static getLoginPage() {
    return ViewController.renderLoginPage();
  }

  static getSignupPage() {
    return ViewController.renderSignupPage();
  }

  static getNodePage() {
    return ViewController.renderNodePage();
  }

  static getErrorPage() {
    return ViewController.renderErrorPage();
  }
}

export { PageRouterService };
