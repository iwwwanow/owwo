import { ruLocale } from "@site/locales";

import { ClientErrorAbstractClass } from "../interfaces";

export class ConfirmPasswordError extends ClientErrorAbstractClass {
  clientMessage = ruLocale.errors.client.uniqueUsername;

  constructor() {
    super(
      "error on site_elysia-app_signup-service, confirm-passwork-missmatch",
    );
  }
}
