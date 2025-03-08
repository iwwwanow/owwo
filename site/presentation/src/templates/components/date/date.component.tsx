import { CssModule } from "../index.js";
import type { DateComponentProps } from "./date.interface.js";
import Style from "./date.module.css";

export const DateComponent: Component<DateComponentProps> = (props) => {
  const { meta } = props;
  const { createdAt, updatedAt } = meta;

  const createdAtLocalString = createdAt.toLocaleDateString("ru-RU");
  const updatedAtLocalString = updatedAt.toLocaleDateString("ru-RU");

  return (
    <>
      <div class="date-container">
        <h5 class="date_creation">{createdAtLocalString}</h5>
        <h6 class="date_last">{updatedAtLocalString}</h6>
      </div>
      <CssModule filepath={Style} />
    </>
  );
};
