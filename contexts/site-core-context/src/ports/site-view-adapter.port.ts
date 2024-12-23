export interface SiteViewAdapterPortConstructor {
  new (): SiteViewAdapterPort;
}

export interface SiteViewAdapterPort {
  getHomePage(homePageData): Promise<string>;
}
