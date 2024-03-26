// TODO обязательно нужные тесты с базой данных

const re = /^[a-z0-9_-]{4,64}$/;

export const validateUsernameUtil = (username) => {
  if (typeof username !== "string") throw new Error("username is not string");
  const test = re.test(username);
  if (!test) throw new Error("username validation error");
};
