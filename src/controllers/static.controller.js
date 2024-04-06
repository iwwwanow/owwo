import { file } from "@stricjs/app/send";

export class StaticController {
  static async sendFile(ctx) {
    const filePath = "./src/" + ctx.path;
    return file(filePath);
  }
}
