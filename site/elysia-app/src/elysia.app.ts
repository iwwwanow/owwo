import { html } from "@elysiajs/html";
import { signupDto } from "@site/dto";
import { Elysia } from "elysia";

import { LISTEN_PORT } from "./elysia.constants";
import { PageRouterService } from "./services";
import { SignupService } from "./services";

const app = new Elysia()
  .use(html())

  .onError(
    (ctx) => {
      const { error, code } = ctx;
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

      console.error(error);
      return `<>${error.clientMessage}</>`;
    },
    // {
    // TODO create error dto
    //   // error: t.Object(),
    //   // code: t.Number(),
    // },
  )

  .get("/favicon.ico", () => {
    // TODO
    console.log("need to provide favicon");
    return "bla";
  })

  .get("/public/*", ({ params: { "*": filepathParam } }) => {
    return PageRouterService.getPublic({ param: filepathParam });
  })
  .get("/", () => {
    return PageRouterService.getHomePage();
  })

  .get("/login", () => {
    return PageRouterService.getLoginPage();
  })
  .get("/signup", () => {
    return PageRouterService.getSignupPage();
  })

  .get("/about", () => {
    return PageRouterService.getAboutPage();
  })
  .get("/error", () => {
    return PageRouterService.getErrorPage();
  })

  .get("/:nodeId", (ctx) => {
    const {
      params: { nodeId },
    } = ctx;
    return PageRouterService.getNodePage(nodeId);
  })

  .post(
    "/signup",
    (ctx) => {
      const signupData = ctx.body;
      return SignupService.processPostRequest(signupData);
    },
    {
      body: signupDto,
    },
  )

  .listen(LISTEN_PORT);

export { app };
