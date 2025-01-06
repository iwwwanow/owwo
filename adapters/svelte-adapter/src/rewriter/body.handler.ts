export class BodyHandler {
  appendContent: string;

  constructor(appendContent: string) {
    this.appendContent = appendContent;
  }

  element(element: HTMLRewriterTypes.Element) {
    element.append(this.appendContent, { html: true });
  }
}
