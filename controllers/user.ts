export default class UserController {
  static async create(ctx) {
    const result = ctx.request.body();
    console.log(result.type);
    console.log(await result.value);
    console.log("create");
    ctx.render("login.eta");
  }
}
