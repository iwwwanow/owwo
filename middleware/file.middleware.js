import * as fs from "node:fs";
import sharp from "sharp";

export default class File {
  static async write(dir_type, blob, name, id) {
    let fileExtention = blob.type.split("/").at(-1);
    if (name === "script") fileExtention = "js";
    else if (name === "style") fileExtention = "css";

    let path = `./public/data_uploads/${dir_type}/${id}/`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    path += `/${name}.${fileExtention}`;
    await Bun.write(path, blob);
  }

  static async write_image(dir_type, blob, name, id) {
    const dir = `./public/data_uploads/${dir_type}/${id}/`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const write = async (image, ex, variant) => {
      let name_file;
      if (variant) name_file = name + `@${variant}`;
      else name_file = name;
      const path = `${dir}${name_file}.${ex}`;
      await Bun.write(path, image);
    };

    const ex_original = blob.type.split("/").at(-1);
    await write(blob, ex_original);

    const buf = await blob.arrayBuffer();
    const webp64 = await sharp(buf, { animated: true })
      .webp()
      .resize(64, 64, { fit: "cover" })
      .toBuffer();
    await write(webp64, "webp", "webp64");

    const webp190 = await sharp(buf, { animated: true })
      .webp()
      .resize(190, 190, { fit: "cover" })
      .toBuffer();
    await write(webp190, "webp", "webp190");
  }

  static get_src(dir_type, id) {
    let result = {};
    let dir = `./public/data_uploads/${dir_type}/${id}`;

    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        const name_full = file.split(".").at(0);
        const variant = name_full?.split("@").at(1) || "original";
        const name = name_full?.split("@").at(0);

        if (!result[name]) result[name] = {};

        const filePath = dir.substring(1) + "/" + file;
        result[name][variant] = filePath;
      });
    }
    return result;
  }

  static src(dir, fileName) {
    let result = {};
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        const name_full = file.split(".").at(0);
        const name = name_full?.split("@").at(0);
        if (name !== fileName) return;
        const variant = name_full?.split("@").at(1) || "original";
        if (!result[name]) result[name] = {};
        const filePath = dir.substring(1) + "/" + file;
        result[name][variant] = filePath;
      });
    }
    return result;
  }

  static srcCover(type, id) {
    // TODO почему не могу вернуть из внутренней функции? как работают стрелочные??
    let result;
    let dir = `./public/data_uploads/${type}/${id}`;
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        if (file.split(".").at(0) === "cover") {
          result = dir.substring(1) + "/" + file;
        }
      });
    }
    return result;
  }

  static async removeDir(type, id) {
    let dir = `./public/data_uploads/${type}/${id}/`;
    fs.rmSync(dir, { recursive: true, force: true });
    return;
  }

  static async removeFile(dir_type, id, file) {
    const filePath = `./public/data_uploads/${dir_type}/${id}/${file}`;
    fs.rmSync(filePath, { recursive: true, force: true });
  }

  static async removeImage(dir_type, id, imageName) {
    let dir = `./public/data_uploads/${dir_type}/${id}/`;
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        if (file.split(".").at(0)?.split("@").at(0) === imageName) {
          this.removeFile(dir_type, id, file);
        }
      });
    }
  }
}
