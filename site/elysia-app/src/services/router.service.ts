import { StaticController } from "@site/controllers";
import { ViewController } from "@site/controllers";

class PageRouterService {
  static getFavicon() {
    return console.log("TODO create favicon");
  }

  static getPublic({ param }: { param: string }) {
    return StaticController.sendFile({ param });
  }

  static getHomePage() {
    return ViewController.getHomePage();
  }

  static getAboutPage() {
    return ViewController.getAboutPage();
  }

  static getLoginPage() {
    return ViewController.getLoginPage();
  }

  static getSignupPage() {
    return ViewController.getSignupPage();
  }

  static getNodePage(nodeId: string) {
    return ViewController.getNodePage(nodeId);
  }

  static getErrorPage() {
    return ViewController.getErrorPage();
  }
}

export { PageRouterService };
