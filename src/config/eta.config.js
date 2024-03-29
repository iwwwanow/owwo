import * as path from "node:path";

const { NODE_ENV } = process.env;

export const defaultEtaConfig = {
  views: path.join("./src/templates"),
  debug: NODE_ENV === "developement" ? false : true,
  cache: NODE_ENV === "developement" ? true : false,
  // autoEscape: false,
  varName: "props",
  useWith: true,
  defaultExtension: ".eta",
};
