class AppendBodyRewriter {
  constructor(appendContent) {
    this.appendContent = appendContent;
  }
  element(element) {
    element.append(this.appendContent, { html: true });
  }
}

export { AppendBodyRewriter };
