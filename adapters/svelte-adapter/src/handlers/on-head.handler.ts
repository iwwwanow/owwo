export class OnHeadHandler {
  appendContent: string;

  constructor(appendContent: string) {
    this.appendContent = appendContent;
  }

  element(element: HTMLRewriterTypes.Element) {
    // TODO замена заголовка, если он есть!
    element.append(this.appendContent, { html: true });
  }
}
