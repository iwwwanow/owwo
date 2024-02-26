export default async function (c): Promise<void> {
  const { cookie, removeCookie, jwt } = c;
  if (cookie.auth) {
    cookie.auth = await jwt.verify(cookie.auth);
    if (!cookie.auth) {
      return cookie;
    }
  }
  return;
}
