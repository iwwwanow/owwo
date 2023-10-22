import File from "./file";

export default class Props {
  referer;
  _editor;
  auth = {};
  user_id;
  user = { src: {} };
  page_id;
  page = { src: {} };
  pages;
  element_id;
  element = { src: {} };
  elements;
  markup;

  constructor(c) {
    const { headers, cookie, path, params } = c;
    this._editor = c._editor;
    this.referer = headers.referer;
    if (cookie) this.auth = cookie.auth;
    if (path) this.type = path.split("/").at(1);
    if (params) this[`${this.type}_id`] = params[`${this.type}_id`];
  }

  set username(username) {
    this.user.username = username;
  }

  set page_id(id) {
    this.page_id = id;
  }
  set page(page) {
    this.page = page;
  }

  set elements(elements) {
    this.elements = elements;
  }
}
