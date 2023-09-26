export default async function ({
  cookie: { auth },
  jwt,
}: {
  cookie: { auth: string };
  jwt: any;
}): Promise<{ username_cookie: string }> {
  const usernameObj = await jwt.verify(auth);

  let username_cookie = "";

  // TODO это пиздец какойто, исправь
  for (const [key, value] of Object.entries(usernameObj)) {
    if (!isNaN(Number(key))) {
      username_cookie += value;
    }
  }

  return { username_cookie };
}
