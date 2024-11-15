import { ClientError } from "./_client.error";

export class ConfirmPasswordError extends ClientError {
  // TODO locales
  clientMessage = "confirm-password missmatch";

  constructor() {
    super(
      "error on site_elysia-app_signup-service, confirm-passwork-missmatch",
    );
  }
}
