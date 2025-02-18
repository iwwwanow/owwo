import { Text } from "../../components";
import { BaseLayout } from "../../layouts";
import type { AboutPageType } from "./about-page.interface";

const AboutPage: AboutPageType = (props) => {
  const { aboutPageContent } = props;

  return (
    <BaseLayout>
      <div class="grid">
        <Text text={aboutPageContent} className="grid__right-content" />
      </div>
    </BaseLayout>
  );
};

export { AboutPage };
