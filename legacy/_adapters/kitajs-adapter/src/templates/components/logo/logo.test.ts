import { LogoSvg } from "@assets/svg";
import { classnameMock } from "@test/mock";
import { hrefMock } from "@test/mock";
import { expect } from "bun:test";
import { describe } from "bun:test";
import { test } from "bun:test";

import { getClassName } from "./getters";
import { LogoComponent } from "./logo.component";
import { LOGO_CLASSNAME } from "./logo.constants";
import { HOME_ROUTE_PATH } from "./logo.constants";

describe("ui, logo", async () => {
  const markup = await LogoComponent({
    href: hrefMock,
    className: classnameMock,
  });

  document.body.innerHTML = markup;

  const logoConteiner = document.querySelector("a");
  if (!logoConteiner) throw new Error("card component not found by classname");

  test("href", async () => {
    expect(logoConteiner.href).toBe(hrefMock);
  });

  test("classname", async () => {
    const expectedClassname = getClassName(classnameMock);
    expect(logoConteiner.className).toBe(expectedClassname);
  });

  test("content", async () => {
    const logoContent = await LogoSvg();
    expect(logoConteiner.innerHTML.toLowerCase()).toBe(
      logoContent.toLowerCase(),
    );
  });
});

describe("ui, logo, blank props", async () => {
  const markup = await LogoComponent({});

  document.body.innerHTML = markup;

  const logoConteiner = document.querySelector("a");
  if (!logoConteiner) throw new Error("card component not found by classname");

  test("href", async () => {
    expect(logoConteiner.href).toBe(HOME_ROUTE_PATH);
  });

  test("classname", async () => {
    expect(logoConteiner.className).toBe(LOGO_CLASSNAME);
  });
});
