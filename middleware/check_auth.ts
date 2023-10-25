export default async function (c): Promise<void> {
  const { cookie, removeCookie, jwt } = c;
  if (cookie.auth) {
    cookie.auth = await jwt.verify(cookie.auth);
    console.log(cookie);
    if (!cookie.auth) {
      removeCookie("auth");
      return cookie;
    }
  }
  return;
}
