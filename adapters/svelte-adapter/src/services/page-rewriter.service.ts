import { OnBodyHandler } from "../handlers";
import { OnCssHandler } from "../handlers";
import { OnHeadHandler } from "../handlers";
import type { SvelteComponentType } from "../interfaces";

export class PageRewriterService {
  private blankHtmlPath: string;
  blankHtmlPage: string;

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
    props?: PageProps,
  ) {
    // TODO если компонент не был проведен,
    // то возвращать бланковую html страницу

    const renderResult = svelteComponent.render<PageProps>({ props });

    const head = renderResult.head;
    const body = renderResult.html;
    const css = renderResult.css.code;

    const rewriter = new HTMLRewriter()
      .on("html", new OnHeadHandler(head))
      .on("html", new OnBodyHandler(body))
      .on("html", new OnCssHandler(css));

    const pageHtml = rewriter.transform(this.blankHtmlPage);
    return pageHtml;
  }
}
