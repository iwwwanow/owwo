import { CssModule } from "../";
import Style from "./node-title.module.css";
import type { NodeTitleType } from "./resource-title.interface";

export const ResourceTitle: NodeTitleType = (props) => {
  const { title } = props;

  return (
    <>
      <h2 class="node-title">{title}</h2>
      <CssModule filepath={Style} />
    </>
  );
};
