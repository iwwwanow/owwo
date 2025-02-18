import { ImageVariantName } from "@globals/constants";
import { nodeImageMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { ImageSourceGetter } from "./getters";
import { NodeCardImage } from "./node-card__image.component";

describe("ui, node card image", async () => {
  const markup = await NodeCardImage({
    image: nodeImageMock,
  });

  document.body.innerHTML = markup;

  const picture = document.querySelector("picture");
  if (!picture) throw new Error("node card image not found by picture tagname");

  test("classname", async () => {
    expect(picture.className).toBe("card__cover-container");
  });

  const sources = picture.querySelectorAll("source");

  const { imageWidth190px2xSource, image2xSrcset, imageOriginalSource } =
    ImageSourceGetter.componentVariants(nodeImageMock);

  test("source 1 srcset", async () => {
    expect(sources[0].srcset).toBe(imageWidth190px2xSource);
  });

  test("source 1 media", async () => {
    expect(sources[0].media).toBe("(max-width: 360px)");
  });

  test("source 2 srcset", async () => {
    expect(sources[1].srcset).toBe(image2xSrcset);
  });

  const img = picture.querySelector("img");
  if (!img) throw new Error("img not exist on picture");

  test("img src", async () => {
    expect(img.src).toBe(imageOriginalSource);
  });

  test("img classname", async () => {
    expect(img.className).toBe("card__img");
  });

  test("img alt", async () => {
    expect(img.alt).toBe("page card cover");
  });
});
