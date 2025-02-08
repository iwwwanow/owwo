import { nodeDataMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeInfoAuthors } from "./node-info__authors.component";

describe("ui, node info authors", async () => {
  const NUMBER_OF_AUTHORS = 3;
  const markup = await NodeInfoAuthors({
    authors: Array(NUMBER_OF_AUTHORS).fill(nodeDataMock),
  });
  document.body.innerHTML = markup;

  test("hr content", () => {
    const hr = document.querySelector(".hr_fieldset");
    const h6 = hr?.querySelector("h6");
    // TODO to constants
    expect(h6?.innerHTML).toBe("authors");
  });

  test("number of childs", () => {
    const as = document.querySelectorAll("a");
    expect(as.length).toBe(NUMBER_OF_AUTHORS);
  });
});
