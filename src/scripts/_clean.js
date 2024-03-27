import Page from "../controllers/page.controller";
import Element from "../controllers/element.controller";

import sql from "../lib/sql";
const authors = sql("authors").select(["user_id", "page_id"]).all();
authors.forEach((author) => {
  if (!author.user_id) Page.deleteSingle(author.page_id);
});

const connections = sql("connections").select(["page_id", "element_id"]).all();
connections.forEach((connection) => {
  if (!connection.page_id) Element.deleteSingle(connection.element_id);
});
