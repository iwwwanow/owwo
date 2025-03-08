import { ImageVariantEnum } from "../enums/index.js";

export type CoverDto =
  | {
      [key in ImageVariantEnum]?: string;
    }
  | {};
