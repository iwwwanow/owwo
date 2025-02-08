import { indexPageHandler } from "../handlers";
import { loginPageHandler } from "../handlers";
import { signupPageRouteHandler } from "../handlers";
import { aboutPageHandler } from "../handlers";
import type { Service } from "../interfaces";
import type { HttpServerPort } from "../ports";
import type { SiteViewPort } from "../ports";

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
      handler: (req) => indexPageHandler(req, this.siteViewContext),
    });
  }

  private initLoginPageRoute() {
    this.httpServerContext.addRoute({
      path: "/login",
      handler: (req) => loginPageHandler(req, this.siteViewContext),
    });
  }

  private initSignupPageRoute() {
    this.httpServerContext.addRoute({
      path: "/signup",
      handler: (req) => signupPageRouteHandler(req, this.siteViewContext),
    });
  }

  private initAboutPageRoute() {
    this.httpServerContext.addRoute({
      path: "/about",
      handler: (req) => aboutPageHandler(req, this.siteViewContext),
    });
  }
}
