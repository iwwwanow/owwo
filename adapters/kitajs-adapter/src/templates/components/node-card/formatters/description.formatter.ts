import type { NodeContentType } from "@site/interfaces";

export const LIMIT_SYMBOLS = 79;

export class DescriptionFormatter {
  static shortestPreview(description: NodeContentType): NodeContentType {
    const formattedDescription = description;
    if (description?.markdown.length > LIMIT_SYMBOLS) {
      formattedDescription.markdown =
        description.markdown.slice(0, LIMIT_SYMBOLS) + " ...";
    }
    return formattedDescription;
  }
}
