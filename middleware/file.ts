import * as fs from "node:fs";

export default class File {
  static async write(
    type: string,
    blob: any,
    name: string,
    id: string
  ): Promise<void> {
    let fileExtention = blob.type.split("/").at(-1);

    if (name === "script") fileExtention = "js";
    else if (name === "style") fileExtention = "css";

    let path = `./public/data_uploads/${type}/${id}/`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    path += `/${name}.${fileExtention}`;
    await Bun.write(path, blob);
  }

  static src(type: string, id: string) {
    let result = {};
    let dir = `./public/data_uploads/${type}/${id}`;
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        const fileName = file.split(".").at(0);
        const filePath = dir.substring(1) + "/" + file;
        result[fileName] = filePath;
      });
    }
    return result;
  }

  static srcCover(type: string, id: string) {
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

  static async removeDir(type: string, id: string) {
    let dir = `./public/data_uploads/${type}/${id}/`;
    fs.rmSync(dir, { recursive: true, force: true });
    return;
  }

  static async removeFile(filePath: string) {
    console.log(filePath);
    fs.rmSync(filePath, { recursive: true, force: true });
  }
}
