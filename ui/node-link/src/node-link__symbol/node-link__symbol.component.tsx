import type { NodeLinkSymbolType } from "./node-link__symbol.interfaces";

export const NodeLinkSymbol: NodeLinkSymbolType = (props) => {
  const { symbol } = props;

  return <h5 class="node-info__symbol">{symbol}</h5>;
};
