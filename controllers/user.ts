import { Database } from "bun:sqlite";
import { eta } from "../config/eta";

import stringFromSQL from "../utils/stringFromSQL";
const db = new Database("data/db.sqlite", { create: true });

export default class UserController {
  static async index({ params, username_cookie }) {
    return eta.render("profile", { params, username_cookie });
  }
}
