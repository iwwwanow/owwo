export default function checkEditor(
  params: { username?: string; page_id?: string },
  cookie_authUsername: string
): string | boolean {
  if (params.username && params.username === cookie_authUsername) {
    return cookie_authUsername;
  } else if (params.page_id) {
    console.log(params.page_id);
    return true;
  }
  return false;
}
