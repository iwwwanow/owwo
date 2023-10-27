import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

import File from "./file";
import sql from "./sql";
import set_clientType from "./set_clientType";

export default class Props {
  client = {
    type: "viewer",
    mode: "viewer",
  };
  params = {};

  constructor(req) {
    const url = new URL(req.url);
    const params = url.pathname.split("/");
    if (params.length === 2) {
      this.params.username = params[1];
    } else if (params.length === 3) {
      if (params[1] === "page") this.params.page_id = params[2];
      if (params[1] === "element") this.params.element_id = params[2];
    }
    // console.log(url.split("/"));
    // const referer = req.headers.get("referer");
    // const { cookie, params, query } = c;
    // if (cookie) this.auth = cookie.auth;
    // if (!!params) {
    //   this.params = {};
    //   Object.keys(params).forEach((key) => {
    //     this.params[key] = params[key];
    //   });
    //   if (this.auth) this.client.type = set_clientType(this);
    // }
    // if (query.mode) this.client.mode = query.mode;
  }

  // date_local() {
  //   const render = this.render;
  //   const local = (date) => {
  //     return new Date(date).toLocaleString("ru-RU");
  //   };
  //   this.render.date_creation = local(render.date_creation);
  //   this.render.date_lastModify = local(render.date_lastModify);
  // }

  async init() {
    if (!this.params) {
      await this.init_index();
    } else if (this.params.username) {
      await this.init_profile();
    } else if (this.params.page_id) {
      await this.init_page();
    } else if (this.params.element_id) {
      await this.init_element();
    }

    // this.date_local();
    // if (this.render.text)
    //   this.render.html = DOMPurify.sanitize(marked.parse(this.render.text));
    // else if (this.render.desc)
    //   this.render.html = DOMPurify.sanitize(marked.parse(this.render.desc));
  }

  async init_index() {
    const props = {
      client: this.client,
      render: {},
    };

    const users = sql("users")
      .select(["user_id", "username"])
      .order("date_lastModify")
      .all();

    // users.map((user) => {
    // return (user.src = File.get_src("users", user.user_id));
    // });

    props.render.users = users;
    return props;
  }

  async init_profile() {
    const props = {
      client: this.client,
      render: {},
    };

    props.render = sql("users")
      .select(["user_id", "date_creation", "date_lastModify", "text", "markup"])
      .where({ username: this.params.username })
      .get();

    // this.render.src = File.get_src("users", this.render.user_id);

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );

    const pages = pages_query
      .order("date_lastModify")
      .all({ $user_id: props.render.user_id });

    // pages.forEach((page) => {
    //   page.src = {};
    //   page.src.cover = File.srcCover("pages", page.page_id);
    // });

    props.render.pages = pages;
    return props;
  }

  async init_page() {
    const props = {
      client: this.client,
      render: {},
    };

    props.render = sql("pages")
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

    // this.render.src = File.get_src("pages", this.params.page_id);
    // this.render.authors = [];

    const authors = sql("authors")
      .select(["user_id", "type"])
      .where({ page_id: this.params.page_id })
      .all();

    props.render.authors = [];
    authors.forEach((author) => {
      author.username = sql("users")
        .select("username")
        .where({ user_id: author.user_id })
        .get();
      props.render.authors.push(author);
    });

    const elements_query = await sql().custom_all(
      "innerJoin_elements_connections_$pageId"
    );

    const elements = elements_query
      .order("date_lastModify")
      .all({ $page_id: this.params.page_id });

    elements.map((element) => {
      // element.src = File.get_src("elements", element.element_id);
      if (element.text) {
        element.html = marked.parse(element.text);
      }
      return element;
    });

    props.render.elements = elements;
    return props;
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

    this.render.page = sql("connections")
      .select("page_id")
      .where({ element_id: this.render.element_id })
      .get();

    this.render.author = {};
    this.render.author.username = sql("users")
      .select("username")
      .where({ user_id: this.render.author_id })
      .get();
    this.render.author.type = "owner";

    this.render.src = File.get_src("elements", this.params.element_id);

    return this;
  }
}
