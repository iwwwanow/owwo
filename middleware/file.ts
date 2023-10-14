import * as fs from "node:fs";

export default class File {
  static async write(media: any, page_id: string): Promise<void> {
    const fileExtention = media.type.split("/").at(-1);
    let path = `./public/data_uploads/pages/${page_id}/`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    path += `/cover.${fileExtention}`;
    await Bun.write(path, media);
  }
  static async remove(page_id: string) {
    let path = `./public/data_uploads/pages/${page_id}/`;
    fs.rmSync(path, { recursive: true, force: true });
    return;
  }
}
