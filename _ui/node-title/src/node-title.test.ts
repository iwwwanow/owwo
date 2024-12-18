import { titleMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeTitle } from "./node-title.component";

describe("ui, node title", async () => {
  const markup = await NodeTitle({ title: titleMock });
  document.body.innerHTML = markup;

  const h2 = document.querySelector("h2");

  test("classname", async () => {
    expect(h2?.className).toBe("node-title");
  });

  test("content", async () => {
    expect(h2?.innerHTML).toBe(titleMock);
  });
});
