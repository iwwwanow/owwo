import { ImageVariantName } from "@globals/constants";
import { nodeImageMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { ImageSourceGetter } from "./image-source.getters";

describe("ImageSourceGetter", async () => {
  test("width190pxSource", async () => {
    const result = ImageSourceGetter.width190pxSource(nodeImageMock);
    expect(result).toBe(nodeImageMock[ImageVariantName.WIDTH_190PX]);
  });

  test("width190px2xSource", async () => {
    const result = ImageSourceGetter.width190px2xSource(nodeImageMock);
    expect(result).toBe(nodeImageMock[ImageVariantName.WIDTH_190PX_2X]);
  });

  test("originalSource", async () => {
    const result = ImageSourceGetter.originalSource(nodeImageMock);
    expect(result).toBe(nodeImageMock[ImageVariantName.ORIGINAL]);
  });

  test("srcset2x", async () => {
    const str1 = ImageSourceGetter.width190pxSource(nodeImageMock);
    const str2 = ImageSourceGetter.width190px2xSource(nodeImageMock);

    const result = ImageSourceGetter.srcset2x(str1, str2);
    expect(result).toBe(`${str1}, ${str2} 2x`);
  });

  test("componentVariants", async () => {
    const result = ImageSourceGetter.componentVariants(nodeImageMock);
    expect(Object.keys(result).length).toBe(3);
  });
});
