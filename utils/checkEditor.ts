export default function checkEditor(
  params: { username: string },
  cookie_authUsername: string
): string | boolean {
  if (params.username === cookie_authUsername) {
    return cookie_authUsername;
  }
  return false;
}
