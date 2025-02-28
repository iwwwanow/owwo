import { ImageVariantEnum } from "../enums/index.js";
import type { CoverDto } from "../interfaces/index.js";

export class CoverEntity {
  [ImageVariantEnum.Blob]: string;
  [ImageVariantEnum.Original]?: string;
  [ImageVariantEnum.Height_16px]?: string;
  [ImageVariantEnum.Height_16px_2x]?: string;
  [ImageVariantEnum.Height_32px]?: string;
  [ImageVariantEnum.Height_32px_2x]?: string;
  [ImageVariantEnum.Width_1080px]?: string;
  [ImageVariantEnum.Width_190px]?: string;
  [ImageVariantEnum.Width_190px_2x]?: string;

  constructor(coverDto: CoverDto) {
    // Обязательное поле
    if (!coverDto[ImageVariantEnum.Original]) {
      throw new Error("Original variant is required");
    }

    // Инициализация полей
    // TODO check only expected keys
    Object.assign(coverDto, this);

    // this.validate()
  }

  private validate() {
    // TODO validate
  }
}
