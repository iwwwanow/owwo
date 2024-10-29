import { ELYSIA_APP_LAUNCH_TEXT } from "../elysia.constants";

export const getLaunchText = (url: URL) => {
  return `${ELYSIA_APP_LAUNCH_TEXT.toUpperCase()} ${url.href}`;
};
