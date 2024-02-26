import * as path from "node:path";

export const configEta = {
  views: path.join(import.meta.dir, "../views"),
  debug: true,
  // TODO if developement, then FASLE
  cache: false,
  // autoEscape: false,
  useWith: true,
};
