// TODO он делается не аналогии с другими сервисами. это не экземпляр класса, объект а функция - helper

// TODO provide dto
export const onErrorHelper = (ctx) => {
  const { error, code } = ctx;
  console.log("error on helper");
  return "bla";
};
