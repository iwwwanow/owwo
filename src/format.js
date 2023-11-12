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
          await avatar64.convert("webp64");

          await File.write(avatar64.buffer, dir, "avatar@webp64.webp");
        });
      }
    });
  });
}

// PAGES
let dirPages = root + "pages/";
if (fs.existsSync(dirPages)) {
  const dirs = await getDirectories(dirPages);
  dirs.forEach(async (dir) => {
    dir = dirPages + dir + "/";
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

          const card = new Image(buffer);
          await card.convert("webp288");

          await File.write(card.buffer, dir, "cover@webp288.webp");
        });
      }
    });
  });
}

// ELEMENTS
let dirElements = root + "elements/";
if (fs.existsSync(dirElements)) {
  const dirs = await getDirectories(dirElements);
  dirs.forEach(async (dir) => {
    dir = dirElements + dir + "/";
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

          const card = new Image(buffer);
          await card.convert("webp288");

          await File.write(card.buffer, dir, "cover@webp288.webp");
        });
      }
    });
  });
}
