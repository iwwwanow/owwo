const configEta = {
  views: Deno.cwd() + "/views",
  // debug: true,
  // cache: true,
  // autoEscape: false,
  useWith: true,
  tags: ["#$", "$#"],
};

import { Eta } from "../deps.ts";
export const eta = new Eta(configEta);
