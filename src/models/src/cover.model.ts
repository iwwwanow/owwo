import type { ImageVariantEnum } from "./enums";

export interface CoverModel {
  [ImageVariantEnum.Blob]: string;
  [ImageVariantEnum.Original]: string;
  [ImageVariantEnum.Height_16px]: string;
  [ImageVariantEnum.Height_16px_2x]: string;
  [ImageVariantEnum.Height_32px]: string;
  [ImageVariantEnum.Height_32px_2x]: string;
  [ImageVariantEnum.Width_1080px]: string;
  [ImageVariantEnum.Width_190px]: string;
  [ImageVariantEnum.Width_190px_2x]: string;
}
