import { nodeImageMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeLinkImageBig } from "./node-link-image_big.component";

describe("ui-text-test", () => {
  test("markup-test", async () => {
    const requiredMarkupString = `<picture><source srcset="node-image-height-32px-mock-string, node-image-height-32px-2x-mock-string 2x"/><source srcset="node-image-height-32px-2x-mock-string"/><img src="node-image-height-32px-2x-mock-string" alt="node-info__image"/></picture>`;

    const textResult = await NodeLinkImageBig({
      image: nodeImageMock,
    });

    expect(textResult).toBe(requiredMarkupString);
  });
});
