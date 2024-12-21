export interface HttpServerPortConstructor {
  new (): HttpServerPort;
}

export interface HttpServerPort {
  listen(port: number): { url: URL };

  get(route: string, response: Response): Promise<void>;
}
