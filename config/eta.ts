import { Eta } from "eta";
import * as path from "node:path";

const configEta = {
  views: path.join(import.meta.dir, "../templates"),
  debug: true,
  // cache: true,
  // autoEscape: false,
  useWith: true,
};

export const eta = new Eta(configEta);
