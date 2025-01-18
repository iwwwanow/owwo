import type { IndexPageProps } from "../interfaces";

export interface SiteViewPort {
  init(): Promise<void>;

  getIndexPage(props: IndexPageProps): Promise<string>;

  getLoginPage(): Promise<string>;

  getSignupPage(): Promise<string>;

  getAboutPage(): Promise<string>;

  // is it used?
  getErrorPage(): Promise<string>;

  getNodeExtendedPage(): Promise<string>;

  getNodePage(): Promise<string>;
}
