// TODO create parent class for all client errors
export class ConfirmPasswordError extends Error {
  // TODO locales
  clientMessage = "confirm-password missmatch";

  constructor() {
    super(
      "error on site_elysia-app_signup-service, confirm-passwork-missmatch",
    );
  }
}
