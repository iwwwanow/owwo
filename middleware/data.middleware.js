import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

import File from "./file.middleware";
import sql from "./sql";
import set_clientType from "./set_clientType";

import * as jose from "jose";

export default class Data {
  static source(input, fileName) {
    const makeDir = (e) => {
      let dir = `./public/data_uploads/`;
      if (e.user_id) return dir + "users/" + e.user_id;
      else if (e.page_id) return dir + "pages/" + e.page_id;
      else if (e.element_id) return dir + "elements/" + e.element_id;
    };

    if (Array.isArray(input)) {
      let dir = `./public/data_uploads/pages/`;
      input.map((e) => {
        e.src = File.src(makeDir(e), fileName);
      });
    }
    return input;
  }

  // date_local() {
  //   const render = this.render;
  //   const local = (date) => {
  //     return new Date(date).toLocaleString("ru-RU");
  //   };
  //   this.render.date_creation = local(render.date_creation);
  //   this.render.date_lastModify = local(render.date_lastModify);
  // }

  static async index() {
    const users = sql("users")
      .select(["user_id", "username"])
      .order("date_lastModify")
      .all();
    this.source(users, "avatar");

    const randomPages = sql("pages").select(["*"]).random(8).all();
    this.source(randomPages, "cover");

    const randomElements = sql("elements").select(["*"]).random(16).all();
    this.source(randomElements, "cover");

    const data = { users, pages: randomPages, elements: randomElements };
    return data;
  }

  static async profile(username) {
    const render = sql("users")
      .select([
        "user_id",
        "username",
        "date_creation",
        "date_lastModify",
        "text",
        "markup",
      ])
      .where({ username })
      .get();

    render.src = File.get_src("users", render.user_id);

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );

    const pages = pages_query
      .order("date_lastModify")
      .all({ $user_id: render.user_id });

    pages.forEach((page) => {
      page.src = {};
      page.src.cover = File.srcCover("pages", page.page_id);
    });

    render.pages = pages;
    return render;
  }

  static async page(page_id) {
    const data = sql("pages")
      .select([
        "page_id",
        "title",
        "desc",
        "markup",
        "date_lastModify",
        "date_creation",
      ])
      .where({ page_id })
      .get();

    data.src = File.get_src("pages", page_id);

    const authors = sql("authors")
      .select(["user_id", "type"])
      .where({ page_id })
      .all();

    data.authors = [];
    authors.forEach((author) => {
      author.username = sql("users")
        .select("username")
        .where({ user_id: author.user_id })
        .get();
      data.authors.push(author);
    });

    const elements_query = await sql().custom_all(
      "innerJoin_elements_connections_$pageId"
    );

    const elements = elements_query
      .order("date_lastModify")
      .all({ $page_id: page_id });

    elements.map((element) => {
      // element.src = File.get_src("elements", element.element_id);
      if (element.text) {
        element.html = marked.parse(element.text);
      }
      return element;
    });

    data.elements = elements;
    return data;
  }

  static async element(element_id) {
    const data = sql("elements")
      .select([
        "element_id",
        "text",
        "author_id",
        "date_creation",
        "date_lastModify",
      ])
      .where({ element_id })
      .get();

    data.page = sql("connections")
      .select("page_id")
      .where({ element_id })
      .get();

    data.author = {};
    data.author.username = sql("users")
      .select("username")
      .where({ user_id: data.author_id })
      .get();

    data.author.type = "owner";

    data.src = File.get_src("elements", element_id);
    return data;
  }
}
