import { idMock } from "@test/mock";
import { nameMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { FileInput } from "./file-input.component";

const acceptMock = "accept-mock";
const requiredMock = true;
const imageSrcMock = "image-src-mock";

describe("ui, file input", async () => {
  const markup = await FileInput({
    id: idMock,
    name: nameMock,
    accept: acceptMock,
    required: requiredMock,
    imageSrc: imageSrcMock,
  });

  document.body.innerHTML = markup;

  const label = document.querySelector("label");
  if (!label) throw new Error("label not found by tagname");
  test("label for", async () => {
    expect(label.getAttribute("for")).toBe(idMock);
  });
  test("label classname", async () => {
    expect(label.className).toBe("border file-input__label");
  });

  const labelH6 = label.querySelector("h6");
  if (!labelH6) throw new Error("label h6 not found by tagname");
  test("label h6 classname", async () => {
    expect(labelH6.className).toBe("file-input__label-text");
  });
  test("label h6 inner html", async () => {
    expect(labelH6.innerHTML).toBe(nameMock);
  });

  const labelH6Img = label.querySelector("img");
  if (!labelH6Img) throw new Error("label h6 img not found by tagname");
  test("label h6 img src", async () => {
    expect(labelH6Img.src).toBe(imageSrcMock);
  });
  test("label h6 img alt", async () => {
    expect(labelH6Img.alt).toBe("");
  });
  test("label h6 img class", async () => {
    expect(labelH6Img.className).toBe("file-input__label-image");
  });

  const input = document.querySelector("input");
  if (!input) throw new Error("input not found by tagname");
  test("input id", async () => {
    expect(input.id).toBe(idMock);
  });
  test("input classname", async () => {
    expect(input.className).toBe("file-input");
  });
  test("input form", async () => {
    expect(input.getAttribute("form")).toBe("form");
  });
  test("input required", async () => {
    expect(input.required).toBe(requiredMock);
  });
  test("input name", async () => {
    expect(input.name).toBe(nameMock);
  });
  test("input accept", async () => {
    expect(input.accept).toBe(acceptMock);
  });
  test("input type", async () => {
    expect(input.type).toBe("file");
  });
});

describe("ui, file input, blank imageSrc", async () => {
  const markup = await FileInput({
    id: idMock,
    name: nameMock,
    accept: acceptMock,
    required: requiredMock,
  });

  document.body.innerHTML = markup;
  const label = document.querySelector("label");
  if (!label) throw new Error("label not found by tagname");
  const images = label.querySelectorAll("img");
  test("empty images", async () => {
    expect(images.length).toBe(0);
  });
});
