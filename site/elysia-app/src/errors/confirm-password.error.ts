import { ruLocale } from "@site/locales";

import { ClientError } from "./_client.error";

export class ConfirmPasswordError extends ClientError {
  clientMessage = ruLocale.errors.client.uniqueUsername;

  constructor() {
    super(
      // TODO to locales
      "error on site_elysia-app_signup-service, confirm-passwork-missmatch",
    );
  }
}
