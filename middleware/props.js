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
    }

    if (query.mode) this.client.mode = query.mode;

    if (this.params.page_id) {
      this.init_page();
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
    return this;
  }

  async init_user() {
    this.render = sql("users")
      .select(["user_id", "date_creation", "date_lastModify", "text", "markup"])
      .where({ username: this.params.username })
      .get();

    if (!this.render) return;

    this.date_local();

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
    return this;
  }

  async init_page() {
    this.render = sql("pages")
      .select([
        "page_id",
        "title",
        "desc",
        "markup",
        "date_lastModify",
        "date_creation",
      ])
      .where({ page_id: this.params.page_id })
      .get();
    this.render.src = File.get_src("pages", this.params.page_id);
    this.render.authors = [];
    this.date_local();

    const authors = sql("authors")
      .select(["user_id", "type"])
      .where({ page_id: this.params.page_id })
      .all();

    // CHECK OWNER
    if (this.auth) {
      const author = authors.find(
        (author) => author.user_id === this.auth.user_id
      );
      if (author && author.type === "owner") this.client.type = "owner";
    }

    authors.forEach((author) => {
      author.username = sql("users")
        .select("username")
        .where({ user_id: author.user_id })
        .get();
      this.render.authors.push(author);
    });

    const elements_query = await sql().custom_all(
      "innerJoin_elements_connections_$pageId"
    );

    const elements = elements_query
      .order("date_lastModify")
      .all({ $page_id: this.params.page_id });

    elements.map((element) => {
      return (element.src = File.get_src("elements", element.element_id));
    });

    elements.map((element) => {
      if (element.text) {
        const text = element.text;
        element.html = marked.parse(text);
        return element;
      }
    });

    this.render.elements = elements;
    return this;
  }

  async init_element() {
    this.render = sql("elements")
      .select([
        "element_id",
        "text",
        "author_id",
        "date_creation",
        "date_lastModify",
      ])
      .where({ element_id: this.params.element_id })
      .get();

    this.date_local();

    // CHECK OWNER
    if (this.auth && this.render.author_id === this.auth.user_id) {
      this.client.type = "owner";
    }

    this.render.src = File.get_src("elements", this.params.element_id);

    if (this.render.text) {
      this.render.html = marked.parse(this.render.text);
    }
    return this;
  }
}
