import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export const convertMdHtmlHelper = async (markdownString) => {
  const textHtmlString = await marked.parse(markdownString);
  const textHtmlCleanString = DOMPurify.sanitize(textHtmlString);
  return textHtmlCleanString;
};
