import * as path from "node:path";

const { NODE_ENV } = process.env;

export const defaultEtaConfig = {
  views: path.join("./src/templates"),
  debug: NODE_ENV === "developement" ? true : false,
  cache: NODE_ENV === "developement" ? true : false,
  // autoEscape: false,
  useWith: true,
  defaultExtension: ".eta",
};
