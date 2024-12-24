declare module "*.module.css";

declare type Exists<T> = Exclude<T, null | undefined>;

declare interface Constructor<T> {
  new (): T;
}
