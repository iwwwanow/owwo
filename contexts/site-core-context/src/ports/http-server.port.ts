export interface InitProps {
  port: number;
}

export type RouteHandlerType = (req: Request) => Promise<Response>;

export abstract class HttpServerPort {
  abstract init({ port }: InitProps): Promise<void>;
  abstract listen(port: number): { url: URL };
  abstract get(route: string, routeHandler: RouteHandlerType): HttpServerPort;
}
