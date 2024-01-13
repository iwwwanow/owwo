import { Eta } from "eta";
import * as path from "node:path";

const configEta = {
  views: path.join(import.meta.dir, "../views"),
  debug: true,
  // TODO if developement, then FASLE
  cache: false,
  // autoEscape: false,
  useWith: true,
};

export const eta = new Eta(configEta);
