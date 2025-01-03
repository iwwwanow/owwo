export interface SiteViewPort {
  init(): Promise<void>;

  getHomePage(): Promise<string>;
}
