import type { HttpServerAdapterPortConstructor } from "./http-server-adapter.port";

export interface HttpServerContextPortConstructor {
  new (adapter: HttpServerAdapterPortConstructor): HttpServerContextPort;
}

export interface HttpServerContextPort {
  init(): Promise<void>;
}
