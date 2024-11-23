import { IMAGE_VARIANT_NAME } from "@globals/constants";

type NodeImageType = {
  [IMAGE_VARIANT_NAME.blob]: string;
  [IMAGE_VARIANT_NAME.original]: string;
  [IMAGE_VARIANT_NAME.height16px]: string;
  [IMAGE_VARIANT_NAME.height16px2x]: string;
  [IMAGE_VARIANT_NAME.height32px]: string;
  [IMAGE_VARIANT_NAME.height32px2x]: string;
  [IMAGE_VARIANT_NAME.width1080px]: string;
  [IMAGE_VARIANT_NAME.width190px]: string;
  [IMAGE_VARIANT_NAME.width190px2x]: string;
};

export type { NodeImageType };
