import { EsceptionCodeEnum } from "../enums/index.js";
import { enLocale } from "../locales/index.js";

export class ResourceNotFoundException extends Error {
  public code: number = EsceptionCodeEnum.NotFound;

  constructor() {
    super(enLocale.exceptions["not-found"]);
  }
}
