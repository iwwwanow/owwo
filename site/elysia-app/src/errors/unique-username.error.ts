import { ruLocale } from "@site/locales";

import { ClientError } from "./_client.error";

export class UniqueUsernameError extends ClientError {
  clientMessage = ruLocale.errors.client.uniqueUsername;

  constructor() {
    // TODO to locales
    super("error on site_elysia-app_signup-service, not unique username");
  }
}
