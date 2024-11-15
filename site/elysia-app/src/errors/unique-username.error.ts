import { ClientError } from "./_client.error";

export class UniqueUsernameError extends ClientError {
  // TODO locales
  clientMessage = "username is not unique";

  constructor() {
    super("error on site_elysia-app_signup-service, not unique username");
  }
}
