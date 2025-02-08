import { PUBLIC_PATH } from "./static.constants.js";
import type { SendFileReturnType } from "./static.interface.js";
import type { SendFileProps } from "./static.interface.js";

export class StaticController {
  static async sendFile({ filepath }: SendFileProps): SendFileReturnType {
    const filePath = PUBLIC_PATH + filepath;
    return Bun.file(filePath);
  }
}
