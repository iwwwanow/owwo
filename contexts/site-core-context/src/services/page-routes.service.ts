import type { HttpServerPort } from "../ports";
import { indexPageRouteHandler } from "../route-handlers";
import { loginPageRouteHandler } from "../route-handlers";
import { signupPageRouteHandler } from "../route-handlers";
import { aboutPageRouteHandler } from "../route-handlers";
import type { Service } from "./service.interface";

export class PageRoutesService implements Service {
  httpServerContext: HttpServerPort;

  constructor({ httpServerContext }: { httpServerContext: HttpServerPort }) {
    this.httpServerContext = httpServerContext;
  }

  init() {
    this.initIndexPageRoute();
    this.initLoginPageRoute();
    this.initSignupPageRoute();
    this.initAboutPageRoute();
  }

  private initIndexPageRoute() {
    this.httpServerContext.addRoute({
      path: "/",
      handler: indexPageRouteHandler,
    });
  }

  private initLoginPageRoute() {
    this.httpServerContext.addRoute({
      path: "/login",
      handler: loginPageRouteHandler,
    });
  }

  private initSignupPageRoute() {
    this.httpServerContext.addRoute({
      path: "/signup",
      handler: signupPageRouteHandler,
    });
  }

  private initAboutPageRoute() {
    this.httpServerContext.addRoute({
      path: "/about",
      handler: aboutPageRouteHandler,
    });
  }
}
