import { ELYSIA_APP_LAUNCH_TEXT } from "../elysia.constants.js";

export const getLaunchText = (url: URL) => {
  return `${ELYSIA_APP_LAUNCH_TEXT.toUpperCase()} ${url.href}`;
};
