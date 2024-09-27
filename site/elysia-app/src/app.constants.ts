// TODO func to utils; text leave here

export const getLaunchText = (url: URL) => {
  const ELYSIA_APP_LAUNCH_TEXT = `elysia app launched at:`;
  return `${ELYSIA_APP_LAUNCH_TEXT.toUpperCase()} ${url.href}`;
};
