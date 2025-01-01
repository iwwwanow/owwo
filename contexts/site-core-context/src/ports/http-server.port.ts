export interface InitProps {
  port: number;
}

interface HanderRequest extends Request {
  params?: {
    slug?: string;
  };
}

export type RouteHandlerType = (
  req: HanderRequest,
) => Promise<Response> | Response;

export type RouteType = {
  path: string;
  handler: RouteHandlerType;
};

export abstract class HttpServerPort {
  abstract init({ port }: InitProps): Promise<void>;
  abstract listen(port: number): { url: URL };
  abstract addRoute(route: RouteType): void;
}
