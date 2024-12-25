export interface SiteViewContext {
  init(): Promise<void>;

  getHomePage(homePageData): Promise<string>;
}
