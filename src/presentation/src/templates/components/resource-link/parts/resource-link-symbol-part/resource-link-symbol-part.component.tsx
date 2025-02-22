import type { ResourceLinkSymbolProps } from "./resource-link-symbol-part.interfaces";

export const ResourceLinkSymbolPart: Component<ResourceLinkSymbolProps> = (
  props,
) => {
  const { symbol } = props;

  return <h5 class="node-info__symbol">{symbol}</h5>;
};
