import type { HttpServerPort } from "./ports";
import type { SiteViewPort } from "./ports";
import { indexPageRouteHandler } from "./route-handlers";
import { loginPageRouteHandler } from "./route-handlers";
import { signupPageRouteHandler } from "./route-handlers";
import { aboutPageRouteHandler } from "./route-handlers";
import { faviconRouteHandler } from "./route-handlers";
import { publicRouteHandler } from "./route-handlers";
import { SITE_PORT } from "./site-core-context.constants";
import type { SiteCoreContextConstructor } from "./site-core-context.interfaces";

export class SiteCoreContext {
  httpServerContext: HttpServerPort;
  siteViewContext: SiteViewPort;

  constructor({
    HttpServerContext,
    SiteViewContext,
  }: SiteCoreContextConstructor) {
    this.httpServerContext = new HttpServerContext();
    this.siteViewContext = new SiteViewContext();
  }

  async init() {
    // TODO объявление 404 page - обязательное
    // TODO для 404 на уровне адаптера добавить tryCatch блок, который будет в случае ошибки возвращать пользователю страницу 404, например. эти страницы и эти хендлеры добавляются при инициализации модуля
    // TODO можно сделать это объявление обязательным при инициализации

    await this.siteViewContext.init();

    this.httpServerContext.addRoute({
      path: "/",
      handler: indexPageRouteHandler,
    });

    this.httpServerContext.addRoute({
      path: "/login",
      handler: loginPageRouteHandler,
    });

    this.httpServerContext.addRoute({
      path: "/signup",
      handler: signupPageRouteHandler,
    });

    this.httpServerContext.addRoute({
      path: "/about",
      handler: aboutPageRouteHandler,
    });

    this.httpServerContext.addRoute({
      path: "/favicon.ico",
      handler: faviconRouteHandler,
    });

    this.httpServerContext.addRoute({
      path: "/public",
      handler: publicRouteHandler,
    });

    await this.httpServerContext.init({ port: SITE_PORT });
  }
}
