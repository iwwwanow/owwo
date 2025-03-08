import { ContentDto } from "@site/domain";
import { marked } from "marked";

import { getCleanHtml } from "./clean-html.getter.js";
import { getFileContent } from "./file-content.getter.js";

// TODO make preview 64 symbols?
export const getTextContentDto = async (
  fullPath: string,
): Promise<ContentDto> => {
  const extention = fullPath.split(".").at(-1);
  const fileContent = await getFileContent(fullPath);
  const cleanFileContent = getCleanHtml(fileContent);

  if (extention === "md") {
    // TODO использую фунции из directory content getter. както объединить, вынести
    const htmlRawContent = await marked.parse(cleanFileContent);
    const htmlCleanContent = getCleanHtml(htmlRawContent);

    return {
      html: htmlCleanContent,
      markdown: htmlCleanContent,
      preview: cleanFileContent,
    };
  } else if (extention === "html") {
    return {
      html: cleanFileContent,
      markdown: cleanFileContent,
      // BUG render special preview for html files
      preview: `${cleanFileContent}`,
    };
  }

  return {
    html: `<pre><code>${cleanFileContent}</code></pre>`,
    markdown: "some-markdown",
    preview: cleanFileContent,
  };
};
