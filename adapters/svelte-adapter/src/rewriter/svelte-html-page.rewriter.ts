import { BodyHandler } from "./body.handler";
import { CssHandler } from "./css.handler";
import { HeadHandler } from "./head.handler";
import type { SvelteComponentType } from "./svelte-html-page.interfaces";

export class SvelteRewriter {
  private blankHtmlPath: string;
  blankHtmlPage?: string;

  constructor(blankHtmlPath: string) {
    // TODO можно импортировать сразу html-страницу,
    // без дополнительных преобразований
    // см документацию bun

    this.blankHtmlPath = blankHtmlPath;
  }

  async init() {
    const blankHtmlFile = Bun.file(this.blankHtmlPath);
    const blankHtmlString = await blankHtmlFile.text();
    this.blankHtmlPage = blankHtmlString;
  }

  async getPageHtml<PageProps>(
    svelteComponent: SvelteComponentType,
    props: PageProps,
  ) {
    // TODO если компонент не был проведен,
    // то возвращать бланковую html страницу

    const renderResult = svelteComponent.render<PageProps>(props);

    const head = renderResult.head;
    const body = renderResult.html;
    const css = renderResult.css.code;

    const rewriter = new HTMLRewriter()
      .on("html", new HeadHandler(head))
      .on("html", new BodyHandler(body))
      .on("html", new CssHandler(css));

    const pageHtml = rewriter.transform(this.blankHtmlPage);
    return pageHtml;
  }
}
