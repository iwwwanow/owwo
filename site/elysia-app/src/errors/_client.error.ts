export abstract class ClientError extends Error {
  abstract clientMessage: string;
}
