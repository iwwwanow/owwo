// TODO обязательно нужны тесты с базой данных

// Minimum eight characters, at least one letter and one number:
// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$/;

export const validatePasswordUtil = (password) => {
  if (typeof password !== "string") throw new Error("password is not string");
  const test = re.test(password);
  if (!test) throw new Error("password validation error");
};
