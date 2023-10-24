import { marked } from "marked";
import File from "./file";
import sql from "../controllers/sql";

export default class Props {
  client = {
    type: "viewer",
    mode: "viewer",
  };
  render = {};
  params = {};

  constructor(c) {
    const { cookie, params, query } = c;

    if (cookie) this.auth = cookie.auth;

    if (params) {
      Object.keys(params).forEach((key) => {
        this.params[key] = params[key];
      });
    } else {
      this.init_index();
    }

    if (query.mode) this.client.mode = query.mode;

    if (this.params.username) {
      this.init_user();
    }

    if (this.render) {
      this.date_local();
    }
  }

  date_local() {
    const render = this.render;
    const local = (date) => {
      return new Date(date).toLocaleString("ru-RU");
    };
    this.render.date_creation = local(render.date_creation);
    this.render.date_lastModify = local(render.date_lastModify);
  }

  async init_index() {
    const users = sql("users")
      .select(["user_id", "username"])
      .order("date_lastModify")
      .all();

    users.map((user) => {
      return (user.src = File.get_src("users", user.user_id));
    });

    this.render.users = users;
  }

  async init_user() {
    this.render = sql("users")
      .select(["user_id", "date_creation", "date_lastModify", "text", "markup"])
      .where({ username: this.params.username })
      .get();

    if (!this.render) return;

    if (this.auth && this.auth.username === this.params.username) {
      this.client.type = "owner";
    }

    if (this.render.text) {
      this.render.html = marked.parse(this.render.text);
    }

    this.render.src = File.get_src("users", this.render.user_id);

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );
    const pages = pages_query
      .order("date_lastModify")
      .all({ $user_id: this.render.user_id });

    pages.forEach((page) => {
      page.src = {};
      page.src.cover = File.srcCover("pages", page.page_id);
    });

    this.render.pages = pages;
  }
}
