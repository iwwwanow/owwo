import File from "./file";

export default class Props {
  _editor;
  user_id;
  username;
  page_id;
  page;
  pages;
  element_id;
  element;
  elements;
  src;
  html;

  constructor(c) {
    this._editor = c._editor;
    this.type = c.path.split("/").at(1);
    this[`${this.type}_id`] = c.params[`${this.type}_id`];
  }

  set username(username) {
    this.username = username;
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
