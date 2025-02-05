import { nodeDataMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { NodeInfoAuthor } from "./node-info__author.component";

describe("ui, node info author", async () => {
  const markup = await NodeInfoAuthor({ author: nodeDataMock });
  document.body.innerHTML = markup;

  test("hr content", () => {
    const hr = document.querySelector(".hr_fieldset");
    const h6 = hr?.querySelector("h6");
    // TODO to constants
    expect(h6?.innerHTML).toBe("author");
  });
});
