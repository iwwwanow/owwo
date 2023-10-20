export default async function (c): Promise<void> {
  const { cookie, removeCookie, jwt, path, set } = c;

  if (cookie.auth) {
    cookie.auth = await jwt.verify(cookie.auth);
    if (!cookie.auth) {
      // TODO не работает удаление куки
      // removeCookie("auth");

      return cookie;
    }
  }
  return;
}
