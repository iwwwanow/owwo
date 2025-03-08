export class ResourceNotFoundException extends Error {
  // TODO to enum
  public code: number = 404;

  constructor() {
    super("Resource not found");
  }
}
