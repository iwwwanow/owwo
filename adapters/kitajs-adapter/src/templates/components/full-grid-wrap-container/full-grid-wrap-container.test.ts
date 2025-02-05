import { childrenMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { FullGridWrapContainer } from "./full-grid-wrap-container.component";
import { getStyle } from "./getters";

describe("ui, full grid wrap container", async () => {
  const limitMock = 7;
  const markup = await FullGridWrapContainer({
    limit: limitMock,
    children: childrenMock,
  });

  document.body.innerHTML = markup;

  const container = document.querySelector("div");
  if (!container) throw new Error("container not found by tagname");
  test("classname", async () => {
    expect(container.className).toBe("grid full-grid-wrap-container__wrapper");
  });
  test("style", async () => {
    const style = getStyle(limitMock);
    expect(container.style.cssText).toBe(style);
  });

  const span = container.querySelector("span");
  if (!span) throw new Error("span not found by tagname");
  test("span classname", async () => {
    expect(span.className).toBe("full-grid-wrap-container__container");
  });
  test("span inner html", async () => {
    expect(span.innerHTML).toBe(childrenMock);
  });
});

describe("ui, full grid wrap container, empty limit", async () => {
  const markup = await FullGridWrapContainer({
    children: childrenMock,
  });

  document.body.innerHTML = markup;

  const container = document.querySelector("div");
  if (!container) throw new Error("container not found by tagname");
  test("style", async () => {
    const style = getStyle();
    expect(container.style.cssText).toBe(style);
  });
});
