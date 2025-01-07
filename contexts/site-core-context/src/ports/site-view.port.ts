export interface SiteViewPort {
  init(): Promise<void>;

  getIndexPage(): Promise<string>;
}
