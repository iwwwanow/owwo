import * as fs from "node:fs";
import sharp from "sharp";

export default class File {
  static async write() {}

  static async write_image() {}

  static sources(dir) {
    let result = {};
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        console.log(file);
        const filePath = dir.substring(1) + "/" + file;
        const name_full = file.split(".").at(0);
        const variant = name_full?.split("@").at(1) || "original";
        const name = name_full?.split("@").at(0);

        if (name === "style" || name === "script") {
          result[name] = filePath;
        } else {
          if (!result[name]) result[name] = {};
          result[name][variant] = filePath;
        }
      });
    }
    return result;
  }

  static get_src() {
    return {};
  }

  static src() {
    return {};
  }

  static srcCover() {
    return {};
  }

  static async removeDir() {}

  static async removeFile() {}

  static async removeImage() {}
}
