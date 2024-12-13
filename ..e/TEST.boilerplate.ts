import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

describe("blank, blank", async () => {
  const markup = await Component({});

  document.body.innerHTML = markup;

  const container = document.querySelector("a");
  if (!container) throw new Error("container not found by tagname");

  test("classname", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
});
