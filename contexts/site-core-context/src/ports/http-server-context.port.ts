export interface InitProps {
  port: number;
}

export abstract class HttpServerContext {
  abstract init({ port }: InitProps): Promise<void>;
  abstract listen(port: number): { url: URL };
  abstract get(route: string, response: Response): void;
}
