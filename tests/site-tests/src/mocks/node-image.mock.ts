import { ImageVariantName } from "@contexts/site-core";
import type { NodeImageType } from "@contexts/site-core";

export const nodeImageMock: NodeImageType = {
  [ImageVariantName.Blob]: "node-image-blob-mock-string",
  [ImageVariantName.Original]: "node-image-blob-original-mock-string",
  [ImageVariantName.Height_16px]: "node-image-height-16px-mock-string",
  [ImageVariantName.Height_16px_2x]: "node-image-height-16px-2x-mock-string",
  [ImageVariantName.Height_32px]: "node-image-height-32px-mock-string",
  [ImageVariantName.Height_32px_2x]: "node-image-height-32px-2x-mock-string",
  [ImageVariantName.Width_1080px]: "node-image-width-1080px-mock-string",
  [ImageVariantName.Width_190px]: "node-image-width-190px-mock-string",
  [ImageVariantName.Width_190px_2x]: "node-image-width-190px-2x-mock-string",
};
