export default async function ({ cookie: { auth }, jwt }): Promise<string> {
  const usernameObj = await jwt.verify(auth);

  let username = "";

  // TODO это пиздец какойто, исправь
  for (const [key, value] of Object.entries(usernameObj)) {
    if (!isNaN(Number(key))) {
      username += value;
    }
  }

  return { username };
}
