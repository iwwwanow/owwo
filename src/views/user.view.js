import { EtaModel } from "../models/eta.model";

export class UserView {
  static async getUserDeletePageHtml(c) {
    console.log("TODO user delete page needed");
    const html = await EtaModel.getHtml("Profile", {});
    return c.html(html);
  }

  static async getUserPageHtml(c) {
    const html = await EtaModel.getHtml("Profile", {});
    return c.html(html);
  }

  static async delete(c) {
    console.log("delete user");
    const { params } = c;
    const { username } = params;
    console.log(username);

    // TODO проверка авторизированого пользователя и того, которого хочешь удалить
    // TODO get user
    // TODO compare dbusername and username from params
    // if error return 401 error or else, нет доступа

    // TODO рендер страницы удаления, с формой подтвеждения

    return c.redirect("/");

    console.log(c);
    const html = await EtaModel.getHtml("Profile", {});
    return c.html(html);
  }
}
