import * as path from "node:path";

const { NODE_ENV } = process.env;

export const configEta = {
  views: path.join("./src/templates"),
  debug: NODE_ENV === "developement" ? true : false,
  cache: NODE_ENV === "developement" ? false : true,
  // autoEscape: false,
  useWith: true,
  defaultExtension: ".eta",
};
