export interface HttpServerAdapterPortConstructor {
  new (): HttpServerAdapterPort;
}

export interface HttpServerAdapterPort {
  listen(port: number): { url: URL };

  get(route: string, response: Response): Promise<void>;
}
