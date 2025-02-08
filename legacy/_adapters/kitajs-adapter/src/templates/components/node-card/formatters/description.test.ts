import { nodeDataMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { DescriptionFormatter } from "./description.formatter";
import { LIMIT_SYMBOLS } from "./description.formatter";

describe("description formatter", async () => {
  const smallText = Array(20).fill("a").join();
  const bigText = Array(800).fill("a").join();

  test("smaller, than 80", async () => {
    const formattedDescription = DescriptionFormatter.shortestPreview({
      ...nodeDataMock.description,
      markdown: smallText,
    });
    expect(formattedDescription.markdown).toBe(smallText);
  });

  test("bigger, than 80", async () => {
    const formattedDescription = DescriptionFormatter.shortestPreview({
      ...nodeDataMock.description,
      markdown: bigText,
    });
    expect(formattedDescription.markdown.length).toBe(LIMIT_SYMBOLS + 1 + 3);
  });
});
