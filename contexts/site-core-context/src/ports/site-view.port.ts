export interface SiteViewPort {
  init(): Promise<void>;

  getHomePage(homePageData): Promise<string>;
}
