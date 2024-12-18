import { classnameMock } from "@test/mock";
import { childrenMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { CardContainer } from "./card-container.component";
import { getClassName } from "./getters";

describe("ui, card container", async () => {
  const markup = await CardContainer({
    className: classnameMock,
    children: childrenMock,
  });

  document.body.innerHTML = markup;

  const span = document.querySelector("span");
  if (!span) throw new Error("span not found by tagname");
  test("classname", async () => {
    const className = getClassName(classnameMock);
    expect(span.className).toBe(className);
  });
  test("inner html", async () => {
    expect(span.innerHTML).toBe(childrenMock);
  });
});
