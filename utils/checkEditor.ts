import sql from "../controllers/_sql.ts";

export default function checkEditor(
  params: { username?: string; page_id?: string },
  cookie_authUsername: string
): string | boolean {
  if (params.username && params.username === cookie_authUsername) {
    return cookie_authUsername;
  } else if (params.page_id) {
    const { page_id } = params;
    const authors = new sql("authors");
    const page_user_id = authors.select("user_id").where({ page_id }).get;

    const users = new sql("users");
    const auth_user_id = authors
      .select("user_id")
      .where({ username: cookie_authUsername }).get;
    if (page_user_id === auth_user_id) return cookie_authUsername;
  }
  return false;
}
