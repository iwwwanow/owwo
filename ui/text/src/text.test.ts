import { nodeContentMock } from "@test/mock";
import { classnameMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { Text } from "./text.component";

describe("ui, text", async () => {
  const markup = await Text({
    text: nodeContentMock,
    className: classnameMock,
  });

  document.body.innerHTML = markup;

  const textContainer = document.querySelector(`.${classnameMock}`);

  if (!textContainer) throw new Error("text component not found by classname");

  console.log(markup);

  test("test classname", async () => {
    expect(textContainer.className).toBe(`text ${classnameMock}`);
  });

  test("test inner html", async () => {
    expect(textContainer.innerHTML).toBe(nodeContentMock.html);
  });
});
