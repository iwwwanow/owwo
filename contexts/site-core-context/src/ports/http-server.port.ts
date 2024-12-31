export interface InitProps {
  port: number;
}

interface HanderRequest extends Request {
  params?: {
    slug?: string;
  };
}

export type RouteHandlerType = (req: HanderRequest) => Promise<Response>;

export type RouteOptionsType = {
  slug?: boolean;
};

export type RouteType = {
  path: string;
  handler: RouteHandlerType;
  options?: RouteOptionsType;
};

export abstract class HttpServerPort {
  abstract init({ port }: InitProps): Promise<void>;
  abstract listen(port: number): { url: URL };
  abstract addRoute(route: RouteType): void;
}
