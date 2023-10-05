export default function checkEditor(
  params: { username: string },
  cookie_authUsername: string
): boolean {
  if (params.username === cookie_authUsername) {
    return true;
  }
  return false;
}
