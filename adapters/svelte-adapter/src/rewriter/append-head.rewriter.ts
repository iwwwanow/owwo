export class AppendHeadRewriter
  implements HTMLRewriterTypes.HTMLRewriterElementContentHandlers
{
  appendContent: string;

  constructor(appendContent: string) {
    this.appendContent = appendContent;
  }

  element(element) {
    // TODO замена заголовка, если он есть!
    element.append(this.appendContent, { html: true });
  }
}
