import { BaseLayout } from "@site-ui/base-layout";

import { Hr } from "@ui/hr";

import type { ErrorPageType } from "./error-page.interface";

const ErrorPage: ErrorPageType = (props) => {
  const { errorMessage, errorCode } = props;

  /* TODO layout */
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
