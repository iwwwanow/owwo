import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export const getCleanHtml = (rawHtml: string): string => {
  const window = new JSDOM("").window;
  const purify = DOMPurify(window);
  const cleanHtml = purify.sanitize(rawHtml);
  return cleanHtml;
};
