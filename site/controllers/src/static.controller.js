import { file } from "@stricjs/app/send";

export class StaticController {
  static async sendFile(ctx) {
    const filePath = "./site/" + ctx.path;
    return file(filePath);
  }
}
