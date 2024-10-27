import { BaseLayout } from "@site-ui/base-layout";

import { Text } from "@ui/text";

import type { AboutPageType } from "./about-page.interface";

const AboutPage: AboutPageType = (props) => {
  const { aboutPageContent } = props;

  // TODO type
  return (
    <BaseLayout>
      <div class="grid">
        <Text text={aboutPageContent} className="grid__right-content" />
      </div>
    </BaseLayout>
  );
};

export { AboutPage };
