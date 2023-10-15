import SQL from "../controllers/sql.ts";

export default function checkEditor({ params, cookie }) {
  let _editor = false;
  if (!params || !cookie) return { _editor };
  if (!!params.username && params.username === cookie.auth.username) {
    _editor = !_editor;
  } else if (!!params.page_id) {
    const result = SQL("authors")
      .select("user_id")
      .where({ user_id: cookie.auth.user_id, page_id: params.page_id })
      .get();
    _editor = !_editor;
  }
  return { _editor };
}
