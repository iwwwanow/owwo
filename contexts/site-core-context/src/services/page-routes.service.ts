import type { Service } from "../interfaces";
import type { HttpServerPort } from "../ports";
import type { SiteViewPort } from "../ports";
import { indexPageRouteHandler } from "../route-handlers";
import { loginPageRouteHandler } from "../route-handlers";
import { signupPageRouteHandler } from "../route-handlers";
import { aboutPageRouteHandler } from "../route-handlers";

export class PageRoutesService implements Service {
  httpServerContext: HttpServerPort;
  siteViewContext: SiteViewPort;

  constructor({
    httpServerContext,
    siteViewContext,
  }: {
    httpServerContext: HttpServerPort;
    siteViewContext: SiteViewPort;
  }) {
    this.httpServerContext = httpServerContext;
    this.siteViewContext = siteViewContext;
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
      handler: (req) => indexPageRouteHandler(req, this.siteViewContext),
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
