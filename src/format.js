import * as fs from "node:fs";

import File from "../middleware/file.middleware";
import Image from "../middleware/image.middleware";

const uploads = `./public/data_uploads/`;

const getDirectories = async (source) =>
  (await fs.promises.readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const convert = async (path, name, format) => {
  fs.readFile(path, async (error, buffer) => {
    if (error) throw new Error(error.message);

    const path_dir = path.split("/").slice(0, -1).join("/") + "/";

    const image = new Image(buffer);
    await image.convert(format);

    await File.write(image.buffer, path_dir, `${name}@${format}.webp`);
  });
};

const formatProject = async (root, name, format) => {
  if (fs.existsSync(root)) {
    const dirs = await getDirectories(root);
    dirs.forEach(async (dir) => {
      const path_dir = root + dir + "/";
      const files = await fs.promises.readdir(path_dir, {
        withFileTypes: true,
      });

      files.forEach(async (file) => {
        const path_file = path_dir + file.name;
        if (!(await File.removeVariant(path_file))) {
          await convert(path_file, name, format);
        }
      });
    });
  }
};

await formatProject(uploads + "users/", "avatar", "webp64");
await formatProject(uploads + "pages/", "cover", "webp288");
await formatProject(uploads + "elements/", "cover", "webp288");
