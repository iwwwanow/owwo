import * as edgedb from "edgedb";
import e from "../dbschema/edgeql-js/index.ts";
import { eta } from "../config/eta.ts";

export default class page {
  static async create({ request, response, params }) {
    console.log("create-page");
    response.redirect(`/${params.username}`);
  }
}
