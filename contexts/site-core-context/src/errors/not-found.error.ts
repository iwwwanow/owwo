import { SiteError } from "../interfaces";

export class NotFoundError extends SiteError {
  code: number;

  constructor() {
    // TODO to locales
    super("Not found");
    // TODO code to constants or specification
    // errors-specification - better. move it into constants
    this.code = 404;
  }
}
