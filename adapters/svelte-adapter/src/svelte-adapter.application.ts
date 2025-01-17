import type { SiteViewPort } from "@contexts/site-core";

// import { IndexPage } from "./pages";
import { PageRewriterService } from "./services";
import { IndexPage } from "./templates";
import { LoginPage } from "./templates";
import { SignupPage } from "./templates";
import { AboutPage } from "./templates";
import { ErrorPage } from "./templates";
import { NodeExtendedPage } from "./templates";
import { NodePage } from "./templates";
import { commonHtml } from "./templates";

export class SvelteAdapter implements SiteViewPort {
  private svelteRewriter: PageRewriterService;

  async init(): Promise<void> {
    console.log("init svelte adapter");

    this.svelteRewriter = new PageRewriterService(commonHtml);
    await this.svelteRewriter.init();
  }

  async getIndexPage(props): Promise<string> {
    const indexPageHtml = await this.svelteRewriter.getPageHtml(
      IndexPage,
      props,
    );
    return indexPageHtml;
  }

  async getLoginPage(): Promise<string> {
    const loginPageHtml = await this.svelteRewriter.getPageHtml(LoginPage);
    return loginPageHtml;
  }

  async getSignupPage(): Promise<string> {
    const signupPageHtml = await this.svelteRewriter.getPageHtml(SignupPage);
    return signupPageHtml;
  }

  async getAboutPage(): Promise<string> {
    const aboutPageHtml = await this.svelteRewriter.getPageHtml(AboutPage);
    return aboutPageHtml;
  }

  async getErrorPage(): Promise<string> {
    const errorPageHtml = await this.svelteRewriter.getPageHtml(ErrorPage);
    return errorPageHtml;
  }

  async getNodeExtendedPage(props): Promise<string> {
    const nodeExtendedPageHtml = await this.svelteRewriter.getPageHtml(
      NodeExtendedPage,
      props,
    );
    return nodeExtendedPageHtml;
  }

  async getNodePage(props): Promise<string> {
    const nodePageHtml = await this.svelteRewriter.getPageHtml(NodePage, props);
    return nodePageHtml;
  }
}
