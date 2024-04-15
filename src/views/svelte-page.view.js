import {layoutConfig} from "../config/layout.config";

class AppendHeadRewriter {
	constructor(appendContent) {
		this.appendContent = appendContent;
	}
	element(element) {
		// TODO замена заголовка, если он есть!
		element.append(this.appendContent, {html: true});
	}
}

class AppendBodyRewriter {
	constructor(appendContent) {
		this.appendContent = appendContent;
	}
	element(element) {
		element.append(this.appendContent, {html: true});
	}
}

class AppendCssRewriter {
	constructor(appendContent) {
		this.appendContent = appendContent;
	}
	element(element) {
		this.appendContent = `<style>${this.appendContent}</style>`;
		element.append(this.appendContent, {html: true});
	}
}

export class SveltePageView {
	constructor(SvelteComponent, props) {
		const renderResult = SvelteComponent.render(props);
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
		const indexHtml = await this.#getIndexHtml();

		const rewriter = new HTMLRewriter()
			.on("html", new AppendHeadRewriter(this.componentHead))
			.on("html", new AppendBodyRewriter(this.componentBody))
			.on("html", new AppendCssRewriter(this.componentCss));

		const pageHtml = rewriter.transform(indexHtml);
		return pageHtml;
	}
}
