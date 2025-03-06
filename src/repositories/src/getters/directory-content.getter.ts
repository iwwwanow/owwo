import { ReserverdFilenamesEnum } from "@site/domain";
import type { ContentDto } from "@site/domain";
import { marked } from "marked";
import { existsSync } from "node:fs";
import { join } from "node:path";

export const getDirectoryContent = async ({
  directoryPath,
  getFileContent,
  getCleanHtml,
  getContentPreview,
}): Promise<ContentDto> => {
  const indexHtmlPath = join(directoryPath, ReserverdFilenamesEnum.IndexHtml);
  const indexMarkdownPath = join(directoryPath, ReserverdFilenamesEnum.IndexMd);

  if (!indexHtmlPath || !indexMarkdownPath) return null;

  let content: ContentDto;

  if (existsSync(indexHtmlPath)) {
    const htmlRawContent = await getFileContent(indexHtmlPath);
    const htmlContent = getCleanHtml(htmlRawContent);
    const markdownContent = await marked.parse(htmlContent);

    // TODO html to markdown; currently didnt work

    content = {
      html: htmlContent,
      markdown: markdownContent,
      preview: getContentPreview(markdownContent),
    };
  } else if (existsSync(indexMarkdownPath)) {
    const markdownContent = await getFileContent(indexMarkdownPath);
    const htmlRawContent = await marked.parse(markdownContent);
    const htmlContent = getCleanHtml(htmlRawContent);

    content = {
      html: htmlContent,
      markdown: markdownContent,
      preview: getContentPreview(markdownContent),
    };
  }

  return content;
};
