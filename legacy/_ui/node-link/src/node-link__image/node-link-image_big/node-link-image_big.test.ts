import { ImageVariantName } from "@globals/constants";
import { nodeImageMock } from "@test/mock";
import { describe } from "bun:test";
import { test } from "bun:test";
import { expect } from "bun:test";

import { NodeLinkImageBig } from "./node-link-image_big.component";
import { IMAGE_ALT } from "./node-link-image_big.constants";

describe("ui, node link image big", async () => {
  const markup = await NodeLinkImageBig({
    image: nodeImageMock,
  });

  document.body.innerHTML = markup;

  const picture = document.querySelector("picture");
  if (!picture) throw new Error("picture not found by tagname");

  const sources = picture.querySelectorAll("source");

  // TODO refactor
  const imageHeight32pxSource = nodeImageMock[ImageVariantName.HEIGHT_32PX];
  const imageHeight32px2xSource =
    nodeImageMock[ImageVariantName.HEIGHT_32PX_2X];
  const imageSrcset = `${imageHeight32pxSource}, ${imageHeight32px2xSource} 2x`;
  const image2xSrcset = imageHeight32px2xSource;

  test("source 1", async () => {
    expect(sources[0].srcset).toBe(imageSrcset);
  });

  test("source 2", async () => {
    expect(sources[1].srcset).toBe(image2xSrcset);
  });

  const img = picture.querySelector("img");
  // TODO use it error all app wide
  if (!img) throw new Error("html node img does not exist");

  test("image src", async () => {
    expect(img.src).toBe(image2xSrcset);
  });

  test("image alt", async () => {
    expect(img.alt).toBe(IMAGE_ALT);
  });
});
