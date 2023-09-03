import { eta } from "../config/eta.ts";

export default class user {
  static async index({ request, response, params }) {
    response.body = eta.render("./profile", {
      request,
      params,
    });
  }
}
