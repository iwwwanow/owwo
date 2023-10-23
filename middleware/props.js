import File from "./file";

export default class Props {
  user_type = "viewer";
  page_type;
  view_mode = "viewer";
  authors = [];
  auth = {};
  user_id;
  user = { src: {} };
  users;
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
    if (cookie) this.auth = cookie.auth;
    if (path) this.type = path.split("/").at(1);
    if (params) this[`${this.type}_id`] = params[`${this.type}_id`];
  }
}
