import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

export const convertMdHtmlHelper = async (
  markdownString: string,
): Promise<string> => {
  const textHtmlString = await marked.parse(markdownString);
  const textHtmlCleanString = DOMPurify.sanitize(textHtmlString);
  return textHtmlCleanString;
};
