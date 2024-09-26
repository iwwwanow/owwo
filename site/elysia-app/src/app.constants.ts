export const getLaunchText = (url: URL) => {
  const ELYSIA_APP_LAUNCH_TEXT = `elysia app launched at: ${url.href}`;
  return ELYSIA_APP_LAUNCH_TEXT.toUpperCase();
};
