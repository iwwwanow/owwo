import { glob } from "node:fs";
import { join } from "path";

export const getDirectoryCoverFullPath = async ({ fullPath }) => {
  // if (this.#file.type === "application/octet-stream") {
  const pattern = join(fullPath, "\\!cover.{png,jpg,jpeg,gif,webp}");

  return new Promise((resolve, reject) => {
    glob(pattern, (err, files) => {
      if (err) {
        return reject(err);
      }
      // FEATURE add a priority to file extentions
      resolve(files[0]);
    });
  });
  //     } else if (this.#file.type.split("/")[0] === "image") {
  // // TODO move that logic in class level
  //       return this.#fullPath;
  //     }
};
