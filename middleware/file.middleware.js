import * as fs from "node:fs";

export default class File {
  static sources(dir) {
    let result = {};
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
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

  static async write(file, dir, filename) {
    const path = dir + filename;
    await Bun.write(path, file);
  }

  static async remove(dir, filename) {
    if (!filename) {
      fs.rmSync("." + dir, { recursive: true, force: true });
    } else {
      fs.readdirSync(dir).forEach((file) => {
        if (file.split(".").at(0).split("@").at(0) === filename) {
          const path = dir + file;
          fs.rmSync(path, { recursive: true, force: true });
        }
      });
    }
  }

  static async write_image() {}

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
