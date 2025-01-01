import type { HttpServerPort } from "./ports";
import type { SiteViewPort } from "./ports";
import { PageRoutesService } from "./services";
import { StaticRoutesService } from "./services";
import type { Service } from "./services/service.interface";
import { SITE_PORT } from "./site-core-context.constants";
import type { SiteCoreContextConstructor } from "./site-core-context.interfaces";

export class SiteCoreContext {
  httpServerContext: HttpServerPort;
  siteViewContext: SiteViewPort;
  pageRoutesService: Service;
  staticRoutesService: Service;

  constructor({
    HttpServerContext,
    SiteViewContext,
  }: SiteCoreContextConstructor) {
    this.httpServerContext = new HttpServerContext();
    this.siteViewContext = new SiteViewContext();

    this.pageRoutesService = new PageRoutesService({
      httpServerContext: this.httpServerContext,
    });
    this.staticRoutesService = new StaticRoutesService({
      httpServerContext: this.httpServerContext,
    });
  }

  async init() {
    // TODO объявление 404 page - обязательное
    // TODO для 404 на уровне адаптера добавить tryCatch блок, который будет в случае ошибки возвращать пользователю страницу 404, например. эти страницы и эти хендлеры добавляются при инициализации модуля
    // TODO можно сделать это объявление обязательным при инициализации

    await this.siteViewContext.init();

    this.pageRoutesService.init();

    await this.httpServerContext.init({ port: SITE_PORT });
  }
}
