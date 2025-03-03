import { UploadsService } from "@site/services";

export class UploadsController {
  static async get(req: Request): Promise<Response> {
    const file = await UploadsService.getFile(req);
    return new Response(file);
  }
}
