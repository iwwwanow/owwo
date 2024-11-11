import { PUBLIC_PATH } from "./static.constants";
import type { SendFileReturnType } from "./static.interface";
import type { SendFileProps } from "./static.interface";

export class StaticController {
  static async sendFile({ filepath }: SendFileProps): SendFileReturnType {
    const filePath = PUBLIC_PATH + filepath;
    return Bun.file(filePath);
  }
}
