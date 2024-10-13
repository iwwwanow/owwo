import { defaultBlankHtml } from "test-templates";

import { AppendBodyRewriter } from "./append-body.rewriter";
import { AppendCssRewriter } from "./append-css.rewriter";
import { AppendHeadRewriter } from "./append-head.rewriter";
import type { SvelteComponentType } from "./rewriter.interfaces";

export class Bte {
  private blankHtmlPath: string;
  blankHtmlPage?: string;

  head?: string;
  body?: string;
  css?: string;

  constructor(blankHtmlPath?: string) {
    // TODO можно импортировать сразу html-страницу,
    // без дополнительных преобразований
    // см документацию bun

    this.blankHtmlPath = blankHtmlPath || defaultBlankHtml;
  }

  async init() {
    const blankHtmlFile = Bun.file(this.blankHtmlPath);
    const blankHtmlString = await blankHtmlFile.text();
    this.blankHtmlPage = blankHtmlString;
  }

  async getPageHtml(svelteComponent: SvelteComponentType, props) {
    // TODO если компонент не был проведен,
    // то возвращать бланковую html страницу

    const renderResult = svelteComponent.render(props);

    console.log(renderResult);

    this.head = renderResult.head;
    this.body = renderResult.html;
    this.css = renderResult.css.code;

    type Test = HTMLRewriterTypes.HTMLRewriterContentHandlers;

    const rewriter = new HTMLRewriter()
      .on("html", new AppendHeadRewriter(this.head))
      .on("html", new AppendBodyRewriter(this.body))
      .on("html", new AppendCssRewriter(this.css));

    const pageHtml = rewriter.transform(this.blankHtmlPage);
    return pageHtml;
  }
}
