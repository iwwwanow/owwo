import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

import File from "./file.middleware";
import DateMiddleware from "./date.middleware";
import sql from "../lib/sql";

export default class Data {
  static async index() {
    const users = sql("users")
      .select(["user_id", "username"])
      .order("date_lastModify")
      .all();

    users.map((user) => {
      const dir = `./public/data_uploads/users/${user.user_id}/`;
      user.src = File.sources(dir);
    });

    const pages = sql("pages").select(["*"]).random(8).all();
    pages.map((page) => {
      const dir = `./public/data_uploads/pages/${page.page_id}/`;
      page.src = File.sources(dir);
    });

    const elements = sql("elements").select(["*"]).random(16).all();
    elements.map((element) => {
      const dir = `./public/data_uploads/elements/${element.element_id}/`;
      if (element.text)
        element.html = DOMPurify.sanitize(marked.parse(element.text));
      element.src = File.sources(dir);
    });

    const data = { users, pages, elements };
    return data;
  }

  static async profile(username) {
    const data = sql("users")
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

    if (!data) throw new Error("username not found");

    const dir = `./public/data_uploads/users/${data.user_id}/`;
    data.src = File.sources(dir);

    data.date_creation = DateMiddleware.format(data.date_creation);
    data.date_lastModify = DateMiddleware.format(data.date_lastModify);

    if (data.text) data.html = DOMPurify.sanitize(marked.parse(data.text));

    const pages_query = await sql().custom_all(
      "innerJoin_pages_authors_$userId"
    );

    const pages = pages_query
      .order("date_lastModify")
      .all({ $user_id: data.user_id });

    pages.map((page) => {
      const dir = `./public/data_uploads/pages/${page.page_id}/`;
      page.src = File.sources(dir);
    });

    data.pages = pages;
    return data;
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

    if (data.desc) data.html = DOMPurify.sanitize(marked.parse(data.desc));

    const dir = `./public/data_uploads/pages/${page_id}/`;
    data.src = File.sources(dir);

    data.date_creation = DateMiddleware.format(data.date_creation);
    data.date_lastModify = DateMiddleware.format(data.date_lastModify);

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
      const dir = `./public/data_uploads/elements/${element.element_id}/`;
      element.src = File.sources(dir);
      if (element.text) {
        if (element.text)
          element.html = DOMPurify.sanitize(marked.parse(element.text));
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

    data.date_creation = DateMiddleware.format(data.date_creation);
    data.date_lastModify = DateMiddleware.format(data.date_lastModify);

    data.page = sql("connections")
      .select("page_id")
      .where({ element_id })
      .get();

    data.author = {};
    data.author.username = sql("users")
      .select("username")
      .where({ user_id: data.author_id })
      .get();

    if (data.text) data.html = DOMPurify.sanitize(marked.parse(data.text));

    data.author.type = "owner";

    const dir = `./public/data_uploads/elements/${data.element_id}/`;
    data.src = File.sources(dir);
    return data;
  }
}
