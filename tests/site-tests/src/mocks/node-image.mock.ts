import { ImageVariantName } from "@contexts/site-core";
import type { NodeImageType } from "@contexts/site-core";

export const nodeImageMock: NodeImageType = {
  [ImageVariantName.Blob]: "https://images.placeholders.dev/?width=8&height=8",
  [ImageVariantName.Original]:
    "https://images.placeholders.dev/?width=1080&height=1080",
  [ImageVariantName.Height_16px]:
    "https://images.placeholders.dev/?width=16&height=16",
  [ImageVariantName.Height_16px_2x]:
    "https://images.placeholders.dev/?width=32&height=32",
  [ImageVariantName.Height_32px]:
    "https://images.placeholders.dev/?width=32&height=32",
  [ImageVariantName.Height_32px_2x]:
    "https://images.placeholders.dev/?width=64&height=64",
  [ImageVariantName.Width_1080px]:
    "https://images.placeholders.dev/?width=1080&height=1080",
  [ImageVariantName.Width_190px]:
    "https://images.placeholders.dev/?width=190&height=190",
  [ImageVariantName.Width_190px_2x]:
    "https://images.placeholders.dev/?width=380&height=380",
};

// export const IMAGE_TEST_DATA_COVER = {
//   blob: "https://images.placeholders.dev/?width=8&height=8",
//   original: "https://images.placeholders.dev/?width=1080&height=1080",
//   h16: "https://images.placeholders.dev/?width=10&height=16",
//   h16_2x: "https://images.placeholders.dev/?width=22&height=32",
//   h32: "https://images.placeholders.dev/?width=22&height=32",
//   h32_2x: "https://images.placeholders.dev/?width=42&height=64",
//   w190: "https://images.placeholders.dev/?width=190&height=288",
//   w190_2x: "https://images.placeholders.dev/?width=380&height=576",
//   w1080: "https://images.placeholders.dev/?width=1080&height=1080",
// };
