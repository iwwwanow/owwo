export default async function ({ cookie: { auth }, jwt }) {
  const usernameObj = await jwt.verify(auth);

  let cookie_authUsername = "";

  // TODO это пиздец какойто, исправь
  for (const [key, value] of Object.entries(usernameObj)) {
    if (!isNaN(Number(key))) {
      cookie_authUsername += value;
    }
  }

  return { cookie_authUsername };
}
