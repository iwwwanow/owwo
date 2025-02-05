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
    expect(container.className).toBe("text-input__wrapper");
  });

  const input = container.querySelector("input");
  if (!input) throw new Error("input not found by tagname");

  test("input value", async () => {
    expect(input.value).toBe("test-input-value");
  });
  test("input classname", async () => {
    expect(input.className).toBe("text-input");
  });
  test("input autocomplete", async () => {
    expect(input.autocomplete).toBe("off");
  });
  test("input autocapitalize", async () => {
    expect(input.getAttribute("autocapitalize")).toBe("off");
  });
  test("input required", async () => {
    expect(input.required).toBe(requiredMock);
  });
  test("input id", async () => {
    expect(input.id).toBe(idMock);
  });
  test("input name", async () => {
    expect(input.name).toBe(nameMock);
  });
  test("input placeholder", async () => {
    expect(input.placeholder).toBe(placeholderMock);
  });
  test("input type", async () => {
    expect(input.type).toBe(typeMock);
  });
});
