import { nodeDataMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeInfoParents } from "./node-info__parents.component";

describe("ui, node info parents", async () => {
  const NUMBER_OF_CHILDS = 3;

  const markup = await NodeInfoParents({
    parents: Array(NUMBER_OF_CHILDS).fill(nodeDataMock),
  });

  document.body.innerHTML = markup;

  test("hr content", () => {
    const hr = document.querySelector(".hr_fieldset");
    const hrH6 = hr?.querySelector("h6");
    expect(hrH6?.innerHTML).toBe("pages");
  });

  test("number of node links", () => {
    const nodeLinkContainers = document.querySelectorAll("a");
    expect(nodeLinkContainers.length).toBe(NUMBER_OF_CHILDS);
  });
});
