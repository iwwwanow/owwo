import { Eta } from "eta";
import * as path from "node:path";

const configEta = {
  views: path.join(import.meta.dir, "../views"),
  // debug: true,
  // cache: true,
  // autoEscape: false,
  useWith: true,
  tags: ["#$", "$#"],
};

export const eta = new Eta(configEta);
