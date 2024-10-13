<script>
  import BaseLayout from "../layouts/base.layout.svelte";
  import Text from "../components/text.component.svelte";

  export let text = "";
</script>

<BaseLayout>
  <div class="grid">
    <Text {text} className="grid__right-content" />
  </div>
</BaseLayout>
