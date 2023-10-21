export default class Props {
  _editor;
  user_id;
  page_id;
  element_id;
  page;
  elements;
  src;

  constructor(c) {
    this.type = c.path.split("/").at(1);
    this[`${this.type}_id`] = c.params[`${this.type}_id`];
  }

  set _editor(_editor) {
    this._editor = editor;
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
