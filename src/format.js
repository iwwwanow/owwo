import * as fs from "node:fs";

import File from "../middleware/file.middleware";
import Image from "../middleware/image.middleware";

console.log("format started");

const root = `./public/data_uploads/`;

const getDirectories = async (source) =>
  (await fs.promises.readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

// USERS
let dirUsers = root + "users/";
if (fs.existsSync(dirUsers)) {
  const dirs = await getDirectories(dirUsers);
  dirs.forEach(async (dir) => {
    dir = dirUsers + dir + "/";
    const files = await fs.promises.readdir(dir, { withFileTypes: true });
    files.forEach(async (file) => {
      const filename = file.name;
      const path = dir + filename;
      if (filename.split("@").length > 1) {
        fs.rmSync(path);
      } else {
        fs.readFile(path, async (error, buffer) => {
          if (error) {
            console.error(error.message);
          }

          const avatar64 = new Image(buffer);
          await avatar64.convert("webp_64");

          await File.write(avatar64.buffer, dir, "avatar@webp64.webp");
        });
      }
    });
  });
}
// удалить все изображения кроме ориги.
// конвертировать оригу.
