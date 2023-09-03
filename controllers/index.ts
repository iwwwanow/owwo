import { eta } from "../config/eta.ts";

export default class page {
  static async index({ request, response }) {
    response.body = eta.render("./index", { request });
  }
  static async about({ request, response }) {
    response.body = eta.render("./about", { request });
  }
  static async login({ request, response }) {
    response.body = eta.render("./login", { request });
  }
  static async signup({ request, response }) {
    response.body = eta.render("./signup", { request });
  }
}
