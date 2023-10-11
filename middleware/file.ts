import * as fs from "node:fs";

export default class File {
  static async write(media: any, page_id: string): Promise<void> {
    const fileExtention = media.type.split("/").at(-1);
    let path = `./data/pages/${page_id}/`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    path += `/cover.${fileExtention}`;
    await Bun.write(path, media);
  }
}
