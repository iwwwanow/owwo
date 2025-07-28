// import { glob } from "node:fs";
import { Glob } from "bun";
import { join } from "node:path";

export const getDirectoryCoverFullPath = async ({ fullPath }) => {
  // if (this.#file.type === "application/octet-stream") {
  const pattern = join(fullPath, "\\!cover.{png,jpg,jpeg,gif,webp}");
  const glob = new Glob(pattern);
  return await glob.scan(".")[0];
};
