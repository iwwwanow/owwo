import sql from "../lib/sql.ts";

export default class checkOwner {
  static async check(c) {
    const { cookie, params } = c;
    if (!cookie.auth) throw new Error("not logged in");
    if (params.username) {
      this.checkUser(c);
    } else if (params.page_id) {
      this.checkPage(c);
    } else if (params.element_id) {
      this.checkElement(c);
    } else throw new Error("check owner error");
  }

  static async checkProfile(c) {
    if (c.props.client.auth) {
      const authUsername = c.props.client.auth.username;
      if (authUsername === c.url.pathname.split("/")[1]) return;
    }
    throw new Error("check owner error");
  }

  static async checkPage(c) {
    const { cookie, params } = c;
    const owner_id = sql("authors")
      .select("user_id")
      .where({ page_id: params.page_id, type: "owner" })
      .get();

    if (cookie.auth.user_id === owner_id) return;
    else throw new Error("check owner error");
  }

  static async checkElement(c) {
    const { cookie, params } = c;
    const owner_id = sql("elements")
      .select("author_id")
      .where({ element_id: params.element_id })
      .get();

    if (cookie.auth.user_id === owner_id) return;
    else throw new Error("check owner error");
  }
}
