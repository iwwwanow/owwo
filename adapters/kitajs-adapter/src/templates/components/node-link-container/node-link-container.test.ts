import { childrenMock } from "@test/mock";
import { describe } from "bun:test";
import { expect } from "bun:test";
import { test } from "bun:test";

import { NodeLinkContainer } from "./node-link-container.component";

describe("ui, node link container", async () => {
  const markup = await NodeLinkContainer({
    children: childrenMock,
  });
  document.body.innerHTML = markup;

  const div = document.querySelector("div");
  if (!div) throw new Error("div does not exist");

  test("classname", async () => {
    expect(div.className).toBe(`node-link__container`);
  });
  test("chilren", async () => {
    expect(div.innerHTML).toBe(childrenMock);
  });
});
