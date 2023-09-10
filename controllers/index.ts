import { Request, Response } from "../deps.ts";
import { eta } from "../config/eta.ts";

interface Context {
  request: Request;
  response: Response;
}

export default class page {
  static index({ request, response }: Context) {
    response.body = eta.render("./index", { request });
  }
  static about({ request, response }: Context) {
    response.body = eta.render("./about", { request });
  }
  static login({ request, response }: Context) {
    response.body = eta.render("./login", { request });
  }
  static signup({ request, response }: Context) {
    response.body = eta.render("./signup", { request });
  }
}
