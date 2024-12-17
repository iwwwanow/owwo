import { textMock } from "@test/mock";
import { hrefMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { Button } from "./button.component";

describe("ui, button", async () => {
  const markup = await Button({ text: textMock });

  document.body.innerHTML = markup;

  const button = document.querySelector("button");
  if (!button) throw new Error("button not found by tagname");
  test("classname", async () => {
    expect(button.className).toBe("button border");
  });
  test("inner html", async () => {
    const p = button.querySelector("p");
    if (!p) throw new Error("p not found by tagname");
    expect(p.innerHTML).toBe(textMock);
  });
});

describe("ui, button, with url", async () => {
  const markup = await Button({ text: textMock, url: hrefMock });

  document.body.innerHTML = markup;

  const a = document.querySelector("a");
  if (!a) throw new Error("a not found by tagname");
  test("classname", async () => {
    expect(a.className).toBe("button__url-container");
  });
  const button = a.querySelector("button");
  if (!button) throw new Error("button not found by tagname");
  test("button", async () => {
    expect(button.className).toBe("button button_url border");
  });
  test("inner html", async () => {
    const p = button.querySelector("p");
    if (!p) throw new Error("p not found by tagname");
    expect(p.innerHTML).toBe(textMock);
  });
});
