import { FAVICON_PATH } from "./favicon.constants.js";
import type { SendFaviconReturnType } from "./favicon.interface.js";

export class FaviconController {
  static async send(): SendFaviconReturnType {
    const filePath = FAVICON_PATH;
    return Bun.file(filePath);
  }
}
