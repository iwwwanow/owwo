import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

const getMarkdown = async (filepath) => {
  const textFile = Bun.file(filepath);
  const textMdString = await textFile.text();
  return textMdString;
};

const getHtml = async (markdownString) => {
  const textHtmlString = await marked.parse(markdownString);
  const textHtmlCleanString = DOMPurify.sanitize(textHtmlString);
  return textHtmlCleanString;
};

const cutText = (text, symbolsQuantity) => {
  if (text.lenth < symbolsQuantity) return text;
  // TODO проверь итоговую длину строки? какбудто это неверно
  else {
    // const shortenString = text.slice(0, 240);
    const shortenString = text.slice(0, symbolsQuantity);
    const wordsArray = shortenString.split(" ");
    const outputString = wordsArray.slice(0, -1).join(" ") + "...";
    return outputString;
  }
};

const getTextObj = async (filepath) => {
  const markdown = await getMarkdown(filepath);
  const html = await getHtml(markdown);
  const preview = cutText(markdown, 240);

  return {
    markdown,
    html,
    preview,
  };
};

const contentFilepath = "./test/test-assets/content.test-asset.md";

export const CONTENT_TEST_DATA = await getTextObj(contentFilepath);
