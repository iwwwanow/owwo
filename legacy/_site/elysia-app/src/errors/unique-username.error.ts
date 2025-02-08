import { ruLocale } from "@site/locales";

import { ClientErrorAbstractClass } from "../interfaces";

export class UniqueUsernameError extends ClientErrorAbstractClass {
  clientMessage = ruLocale.errors.client.uniqueUsername;

  constructor() {
    super("error on site_elysia-app_signup-service, not unique username");
  }
}
