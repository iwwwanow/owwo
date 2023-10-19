import SQL from "../controllers/sql.ts";

export default function checkEditor({ params, cookie }) {
  let _editor = false;

  if (!params || !cookie) return { _editor };
  if (!cookie.auth) return { _editor };

  if (!!params.username && params.username === cookie.auth.username) {
    _editor = !_editor;
  } else if (!!params.page_id) {
    const result = SQL("authors")
      .select("user_id")
      .where({ user_id: cookie.auth.user_id, page_id: params.page_id })
      .get();
    if (result) _editor = !_editor;
  } else if (!!params.element_id) {
    const result = SQL("elements")
      .select("element_id")
      .where({ author: cookie.auth.user_id, element_id: params.element_id })
      .get();
    if (result) _editor = !_editor;
  }
  return { _editor };
}
