import * as path from "node:path";

export const configEta = {
  views: path.join(import.meta.dir, "../components"),
  debug: true,
  // TODO if developement, then FASLE
  cache: false,
  // autoEscape: false,
  useWith: true,
};
