import { ImageVariantName } from "@globals/constants";

export type NodeImageType = {
  [ImageVariantName.BLOB]: string;
  [ImageVariantName.ORIGINAL]: string;
  [ImageVariantName.HEIGHT_16PX]: string;
  [ImageVariantName.HEIGHT_16PX_2X]: string;
  [ImageVariantName.HEIGHT_32PX]: string;
  [ImageVariantName.HEIGHT_32PX_2X]: string;
  [ImageVariantName.WIDTH_1080PX]: string;
  [ImageVariantName.WIDTH_190PX]: string;
  [ImageVariantName.WIDTH_190PX_2X]: string;
};
