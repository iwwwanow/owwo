// TODO он делается не аналогии с другими сервисами. это не экземпляр класса, объект а функция - helper
export const onErrorHelper = (ctx) => {
  const { error, code, redirect } = ctx;

  // console.log("error");
  // return redirect("/");

  console.log("error");
  return "error";
  return new Response("error");

  return "blaaa";

  console.log("ERROR ON ON ERROR HANDLER:");

  // TODO перенаправлять пользователя на ту же страницу, где была совершена обишка, только с объектом уведомнелия

  // TODO render error-code on client

  // TODO можно для каждой проверки валидации написать свой текст ошибки
  // и выводить её на клиент
  // https://elysiajs.com/essential/validation.html#onerror

  // TODO сделать локализацию в виде json для передачи ошибок на клиент
  // можно в текущих макетах добавить поле error, на самом верху странице, под шапкой. чтобы при ошибке отображать ту странциу, с которой она ушла, только с ТЕКСТОМ ЭТОЙ ОШИБКИ

  if (code === "VALIDATION") {
    console.error(error);
    console.error("error-validation-handing");
    return `<>${error}</>`;
  }

  console.log(error.clientMessage);

  return redirect("/");

  // return `<>${error.clientMessage}</>`;
  // return new Response(error.toString());

  return new Response("hi");
};
