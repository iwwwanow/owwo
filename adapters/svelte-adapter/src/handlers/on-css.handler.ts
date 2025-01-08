export class OnCssHandler {
  appendContent: string;

  constructor(appendContent: string) {
    this.appendContent = appendContent;
  }
  element(element: HTMLRewriterTypes.Element) {
    this.appendContent = `<style>${this.appendContent}</style>`;
    element.append(this.appendContent, { html: true });
  }
}
