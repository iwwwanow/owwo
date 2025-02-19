import { CssModule } from "../";
import type { NodeTitleType } from "./node-title.interface";
import Style from "./node-title.module.css";

const NodeTitle: NodeTitleType = (props) => {
  const { title } = props;

  return (
    <>
      <h2 class="node-title">{title}</h2>
      <CssModule filepath={Style} />
    </>
  );
};

export { NodeTitle };
