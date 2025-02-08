import { getTextFileContentHelper } from "@site/helpers";
import { convertMdHtmlHelper } from "@site/helpers";
import type { NodeContentType } from "@site/interfaces";

import { ABOUT_FILEPATH } from "./about-page-content.constants.js";

const getAboutPageContent = async (): Promise<NodeContentType> => {
  const aboutPageContent = {
    markdown: "blank-markdown-about-text",
    html: "blank-html-about-text",
    preview: "about-page-text-preview",
  };

  aboutPageContent.markdown = await getTextFileContentHelper(ABOUT_FILEPATH);
  aboutPageContent.html = await convertMdHtmlHelper(aboutPageContent.markdown);

  return aboutPageContent;
};

export { getAboutPageContent };
