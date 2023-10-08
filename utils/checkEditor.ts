import SQL from "../controllers/sql";

export default function checkEditor(
  params: { username?: string; page_id?: string },
  cookie_authUsername: string
): string | boolean {
  if (params.username && params.username === cookie_authUsername) {
    return cookie_authUsername;
  } else if (params.page_id) {
    const { page_id } = params;
    const page_user_id = SQL.select(
      ["user_id"],
      ["authors"],
      [{ name: "page_id", value: page_id }]
    )[0].user_id;
    const auth_user_id = SQL.select(
      ["user_id"],
      ["users"],
      [{ name: "username", value: cookie_authUsername }]
    )[0].user_id;
    if (page_user_id === auth_user_id) return cookie_authUsername;
  }
  return false;
}
