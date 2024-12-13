import { idMock } from "@test/mock";
import { nameMock } from "@test/mock";
import { placeholderMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { TextInput } from "./text-input.component";

describe("ui, text input", async () => {
  const typeMock = "type-mock";
  const requiredMock = true;

  const markup = await TextInput({
    id: idMock,
    name: nameMock,
    type: typeMock,
    required: requiredMock,
    placeholder: placeholderMock,
  });

  document.body.innerHTML = markup;

  const container = document.querySelector("p");
  if (!container) throw new Error("container not found by tagname");

  test("classname", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });

  const input = container.querySelector("input");
  if (!input) throw new Error("input not found by tagname");

  test("input value", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input classname", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input autocomplete", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input autocapitalize", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input required", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input id", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input name", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input placeholder", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
  test("input type", async () => {
    expect(container.className).toBe("card__wrapper border_light");
  });
});
