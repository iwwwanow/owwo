import sql from "./sql";

export default function (c) {
  if (!c.auth) return "viewer";
  if (c.params.username) {
    if (c.auth.username === c.params.username) return "owner";
  } else if (c.params.page_id) {
    const type = sql("authors")
      .select("type")
      .where({ page_id: c.params.page_id, user_id: c.auth.user_id })
      .get();
    if (type) return type;
  } else if (c.params.element_id) {
    const author_id = sql("elements")
      .select("author_id")
      .where({ element_id: c.params.element_id })
      .get();
    if (author_id === c.auth.user_id) return "owner";
  } else return "viewer";
}
