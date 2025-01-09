import { ImageVariantName } from "@contexts/site-core";
import type { NodeImageType } from "@contexts/site-core";

export const nodeImageMock: NodeImageType = {
  [ImageVariantName.BLOB]: "node-image-blob-mock-string",
  [ImageVariantName.ORIGINAL]: "node-image-blob-original-mock-string",
  [ImageVariantName.HEIGHT_16PX]: "node-image-height-16px-mock-string",
  [ImageVariantName.HEIGHT_16PX_2X]: "node-image-height-16px-2x-mock-string",
  [ImageVariantName.HEIGHT_32PX]: "node-image-height-32px-mock-string",
  [ImageVariantName.HEIGHT_32PX_2X]: "node-image-height-32px-2x-mock-string",
  [ImageVariantName.WIDTH_1080PX]: "node-image-width-1080px-mock-string",
  [ImageVariantName.WIDTH_190PX]: "node-image-width-190px-mock-string",
  [ImageVariantName.WIDTH_190PX_2X]: "node-image-width-190px-2x-mock-string",
};
