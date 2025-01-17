export interface SiteViewPort {
  init(): Promise<void>;

  getIndexPage(): Promise<string>;

  getLoginPage(): Promise<string>;

  getSignupPage(): Promise<string>;

  getAboutPage(): Promise<string>;

  // is it used?
  getErrorPage(): Promise<string>;

  getNodeExtendedPage(): Promise<string>;

  getNodePage(): Promise<string>;
}
