import { childrenMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { FullGridWrapContainer } from "./full-grid-wrap-container.component";

describe("blank, blank", async () => {
  const limitMock = 7;
  const markup = await FullGridWrapContainer({
    limit: limitMock,
    children: childrenMock,
  });

  document.body.innerHTML = markup;

  const container = document.querySelector("div");
  if (!container) throw new Error("container not found by tagname");
  test("classname", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("style", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });

  const span = container.querySelector("span");
  if (!span) throw new Error("span not found by tagname");
  test("span classname", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("span inner html", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
});
