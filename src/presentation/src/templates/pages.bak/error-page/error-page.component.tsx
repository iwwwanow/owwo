import { Hr } from "../../components";
import { BaseLayout } from "../../layouts";
import type { ErrorPageType } from "./error-page.interface";

const ErrorPage: ErrorPageType = (props) => {
  const { errorMessage, errorCode } = props;

  return (
    <BaseLayout>
      <div class="grid">
        <Hr text={`error: ${errorCode}`} color="var(--RED)" />
        <p>{errorMessage}</p>
      </div>
    </BaseLayout>
  );
};

export { ErrorPage };
