// import { file } from "@stricjs/app/send";

// TODO to consts
const PUBLIC_PATH = "./site/public/";

export class StaticController {
  static async sendFile({ param }) {
    const filePath = PUBLIC_PATH + param;
    return Bun.file(filePath);
  }
}
