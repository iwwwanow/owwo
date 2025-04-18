import { PublicService } from "@site/services";

export class PublicController {
  static async get(req: Request): Promise<Response> {
    const file = await PublicService.getFile(req);
    return new Response(file);
  }
}
