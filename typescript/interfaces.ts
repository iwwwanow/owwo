// TODO Есть встроенный интерфейс контекста, нужно его расширить.
import { Context, Cookie } from "elysia";
import { CookieOptions } from "elysia/cookie";

export interface ExContext extends Context {
  body: Body;
  // jwt: object | any;
  jwt: {
    sign: (string: string) => Promise<string>;
    verify: (string: Cookie<any>) => Promise<string>;
  };
  // cookie: Record<string, string>;
  setCookie: (name: string, value: string, options: CookieOptions) => void;
  removeCookie: (name: string) => void;
  cookie_authUsername: string;
}

// export interface Context {
//   body: Body;
//   cookie: object | any;
//   set: { redirect: string } | any;
// }

export interface Body {
  username: string;
  password: string;
  confirm: string;
}
