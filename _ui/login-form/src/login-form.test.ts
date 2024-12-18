import { nodeDataMock } from "@test/mock";
import { childrenMock } from "@test/mock";
import { hrefMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { LoginForm } from "./login-form.component";

describe("ui, login form", async () => {
  const markup = await LoginForm({
    action: hrefMock,
    children: childrenMock,
  });

  document.body.innerHTML = markup;

  const form = document.querySelector("form");
  if (!form) throw new Error("form not found by tagname");

  test("method", async () => {
    expect(form.method).toBe("POST");
  });

  test("action", async () => {
    expect(form.getAttribute("action")).toBe(hrefMock);
  });

  test("class", async () => {
    expect(form.className).toBe("login-form");
  });

  test("children", async () => {
    expect(form.innerHTML).toBe(childrenMock);
  });
});
