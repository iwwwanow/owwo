import { eta } from "../config/eta.ts";

export default class user {
  static async index({
    request,
    response,
    params,
  }: {
    request: Request;
    response: Response;
    params: any;
  }) {
    response.body = eta.render("./profile", {
      request,
      params,
    });
  }
}
