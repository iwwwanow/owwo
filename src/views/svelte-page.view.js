import { layoutConfig } from "../config/layout.config";

class AppendHeaderRewriter {
  constructor(appendContent) {
    this.appendContent = appendContent;
  }
  element(element) {
    element.append(this.appendContent, { html: true });
  }
}

class AppendBodyRewriter {
  constructor(appendContent) {
    this.appendContent = appendContent;
  }
  element(element) {
    element.append(this.appendContent, { html: true });
  }
}

class AppendCssRewriter {
  constructor(appendContent) {
    this.appendContent = appendContent;
  }
  element(element) {
    element.append(this.appendContent, { html: true });
  }
}

export class SveltePageView {
  constructor(SvelteComponent) {
    const renderResult = SvelteComponent.render();
    this.componentBody = renderResult.html;
    this.componentCss = renderResult.css.code;
    this.componentHead = renderResult.head;
  }

  async #getIndexHtml() {
    const indexHtmlPath = layoutConfig.indexHtmlPath;
    const indexHtmlFile = Bun.file(indexHtmlPath);
    const indexHtmlString = await indexHtmlFile.text();
    return indexHtmlString;
  }

  async getPageHtml() {
    // TODO подстановка стилей, HEAD и собственно body в index.html в src

    const indexHtml = await this.#getIndexHtml();

    const rewriter = new HTMLRewriter()
      .on(
        "head",
        // TODO переписать замену title
        new AppendRewriter(this.componentHead)
      )
      .on("body", new AppendRewriter(this.componentBody))
      .on("body", new AppendRewriter(this.componentCss));

    const pageHtml = rewriter.transform(indexHtml);
    console.log(pageHtml);

    // TODO append body
    // TODO append style

    // const pageHtml = this.html + `<style>${this.css}</style>`;
    return pageHtml;
  }
}
