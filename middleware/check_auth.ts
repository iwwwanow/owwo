export default async function ({ cookie, removeCookie, jwt }): Promise<void> {
  cookie.auth = await jwt.verify(cookie.auth);
  if (!cookie.auth) {
    removeCookie("auth");
    return;
  }
  return;
}
