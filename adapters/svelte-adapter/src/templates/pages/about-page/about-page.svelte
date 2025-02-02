<script lang="ts">
  import type { AboutPageProps } from "./about-page.svelte";
  import { BaseLayout } from "../../layouts";
  import { Text } from "../../components";

  export let props: AboutPageProps;
  const { text = "" } = props;
</script>

<BaseLayout>
  <div class="grid">
    <Text {text} className="grid__right-content" />
  </div>
</BaseLayout>
