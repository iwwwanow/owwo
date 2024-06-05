import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

const testTextPath = "./test/test-assets/text.test-asset.md";
const testTextFile = Bun.file(testTextPath);
const testTextMdString = await testTextFile.text();
const testTextHtmlString = await marked.parse(testTextMdString);
const testTextHtmlCleanString = DOMPurify.sanitize(testTextHtmlString);

const makeTextPreview = (text) => {
  if (text.lenth < 320) return text;
  // TODO проверь итоговую длину строки? какбудто это неверно
  else {
    // const shortenString = text.slice(0, 240);
    const shortenString = text.slice(0, 240);
    const wordsArray = shortenString.split(" ");
    const outputString = wordsArray.slice(0, -1).join(" ") + "...";
    return outputString;
  }
};

export const TEXT_TEST_DATA = {
  markdown: testTextMdString,
  html: testTextHtmlCleanString,
  preview: makeTextPreview(testTextMdString),
};
