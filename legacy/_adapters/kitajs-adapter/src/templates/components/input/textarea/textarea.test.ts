import { idMock } from "@test/mock";
import { nameMock } from "@test/mock";
import { textMock } from "@test/mock";
import { placeholderMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { Textarea } from "./textarea.component";
import { TEXTAREA_CLASSNAME } from "./textarea.constants";
import { TEXTAREA_WRAPPER_CLASSNAME } from "./textarea.constants";

describe("ui, textarea", async () => {
  const rowsMock = "7";
  const requiredMock = true;

  const markup = await Textarea({
    id: idMock,
    name: nameMock,
    rows: rowsMock,
    text: textMock,
    required: requiredMock,
    placeholder: placeholderMock,
  });

  document.body.innerHTML = markup;

  const textareaContainer = document.querySelector("p");
  if (!textareaContainer)
    throw new Error("textarea container not found by classname");

  test("classname", async () => {
    expect(textareaContainer.className).toBe(TEXTAREA_WRAPPER_CLASSNAME);
  });

  const textarea = textareaContainer.querySelector("textarea");
  if (!textarea) throw new Error("textarea component not found by classname");

  test("textarea class", async () => {
    expect(textarea.className).toBe(TEXTAREA_CLASSNAME);
  });

  test("textarea id", async () => {
    expect(textarea.id).toBe(idMock);
  });

  test("textarea spellcheck", async () => {
    expect(textarea.getAttribute("spellcheck")).toBe("false");
  });

  test("textarea name", async () => {
    expect(textarea.name).toBe(nameMock);
  });

  test("textarea placeholder", async () => {
    expect(textarea.placeholder).toBe(placeholderMock);
  });

  test("textarea rows", async () => {
    expect(Number(textarea.rows)).toBe(Number(rowsMock));
  });

  test("textarea required", async () => {
    expect(textarea.required).toBe(requiredMock);
  });

  test("textarea inner html", async () => {
    expect(textarea.innerHTML).toBe(textMock);
  });
});
