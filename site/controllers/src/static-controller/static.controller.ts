import { PUBLIC_PATH } from "./static.constants";
import type { SendFileReturnType } from "./static.interface";
import type { SendFileProps } from "./static.interface";

export class StaticController {
  static async sendFile({ param }: SendFileProps): SendFileReturnType {
    const filePath = PUBLIC_PATH + param;
    return Bun.file(filePath);
  }
}
