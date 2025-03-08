import { ImageVariantEnum } from "../enums/index.js";
import type { CoverDto } from "../interfaces/index.js";

export class CoverEntity {
  [ImageVariantEnum.Blob]?: string;
  [ImageVariantEnum.Original]?: string;
  [ImageVariantEnum.Height_16px]?: string;
  [ImageVariantEnum.Height_16px_2x]?: string;
  [ImageVariantEnum.Height_32px]?: string;
  [ImageVariantEnum.Height_32px_2x]?: string;
  [ImageVariantEnum.Width_1080px]?: string;
  [ImageVariantEnum.Width_190px]?: string;
  [ImageVariantEnum.Width_190px_2x]?: string;

  static COVER_GLOB = "\\!cover.@(png|jpg|jpeg|gif|webp)";

  constructor(coverDto: CoverDto) {
    Object.assign(this, coverDto);
  }

  // private validate(coverDto: CoverDto) {
  // TODO validate on aggregate level
  //   // if (!coverDto[ImageVariantEnum.Original]) {
  //   //   throw new Error("Original variant is required");
  //   // }
  //   console.log("valildate cover entity");
  //   // TODO validate
  // }
}
