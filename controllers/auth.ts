export default class AuthController {
  static async createUser({ body, set }) {
    const { username, password, confirm } = body;

    set.redirect = "/signup";
    // set.redirect = "/login";
  }
}
