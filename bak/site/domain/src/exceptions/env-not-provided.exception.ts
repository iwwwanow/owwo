export class EnvNotProvidedException extends Error {
  constructor() {
    super("EnvNotProvided");
  }
}
