export interface InitProps {
  port: number;
}

export type RouteHandlerType = (req: Request) => Promise<Response>;

export type RouteOptionsType = {
  slug: string;
};

export abstract class HttpServerPort {
  abstract init({ port }: InitProps): Promise<void>;
  abstract listen(port: number): { url: URL };
  abstract addRoute(
    route: string,
    routeHandler: RouteHandlerType,
    options?: RouteOptionsType,
  ): void;
}
