import { ImageVariantName } from "../constants";

export type NodeImageType = {
  [ImageVariantName.Blob]: string;
  [ImageVariantName.Original]: string;
  [ImageVariantName.Height_16px]: string;
  [ImageVariantName.Height_16px_2x]: string;
  [ImageVariantName.Height_32px]: string;
  [ImageVariantName.Height_32px_2x]: string;
  [ImageVariantName.Width_1080px]: string;
  [ImageVariantName.Width_190px]: string;
  [ImageVariantName.Width_190px_2x]: string;
};
