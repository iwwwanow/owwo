/// <reference lib="dom" />
import { nodeContentMock } from "@test/mock";
import { describe } from "bun:test";
import { test } from "bun:test";
import { expect } from "bun:test";

import { NodeInfoDescription } from "./node-info__description.component";
import { HR_TITLE } from "./node-info__description.constants";

describe("ui, node info description", async () => {
  const markup = await NodeInfoDescription({
    description: nodeContentMock,
  });

  document.body.innerHTML = markup;
  const fieldset = document.querySelector("fieldset");

  test("hr content", async () => {
    const h6 = document.querySelector("h6");
    expect(h6?.innerHTML).toBe(HR_TITLE);
  });

  test("inner html", async () => {
    if (fieldset) {
      document.body.removeChild(fieldset);
      return expect(document.body.innerHTML).toBe(nodeContentMock.html);
    }

    throw new Error("fieldset not exist on document");
  });
});
