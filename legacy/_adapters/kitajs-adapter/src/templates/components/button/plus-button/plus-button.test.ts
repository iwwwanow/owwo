import { PlusButtonSvg } from "@assets/svg";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { PlusButton } from "./plus-button.component";

describe("ui, plus button", async () => {
  const markup = await PlusButton({});

  document.body.innerHTML = markup;

  const button = document.querySelector("button");
  if (!button) throw new Error("button not found by tagname");

  test("classname", async () => {
    expect(button.className).toBe("button plus-button border");
  });
  test("inner html", async () => {
    const svgMarkup = await PlusButtonSvg();
    expect(button.innerHTML).toBe(svgMarkup);
  });
});

describe("ui, plus button, small variant", async () => {
  const markup = await PlusButton({ variant: "small" });

  document.body.innerHTML = markup;

  const button = document.querySelector("button");
  if (!button) throw new Error("button not found by tagname");

  test("classname", async () => {
    expect(button.className).toBe(
      "border button plus-button plus-button_variant_small",
    );
  });
  test("inner html", async () => {
    expect(button.innerHTML).toBe(
      '<h3 class="plus-button__text_variant_small">+</h3>',
    );
  });
});
