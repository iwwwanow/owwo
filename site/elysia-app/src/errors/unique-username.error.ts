// TODO create parent class for all client errors
export class UniqueUsernameError extends Error {
  // TODO locales
  clientMessage = "username is not unique";

  constructor() {
    super("error on site_elysia-app_signup-service, not unique username");
  }
}
