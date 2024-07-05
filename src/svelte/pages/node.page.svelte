<script>
  import BaseLayout from "../layouts/base.layout.svelte";

  import EditorForm from "../components/editor-form.component.svelte";
  import NodeInfo from "../components/node-info.component.svelte";
  import NodeCard from "../components/node-card.component.svelte";

  import Image from "../components/image.component.svelte";
  import Text from "../components/text.component.svelte";
  import Date from "../components/date.component.svelte";
  import PlusButton from "../components/buttons/plus.button.svelte";
  import TextInput from "../components/inputs/text.input.svelte";
  import Hr from "../components/hr.component.svelte";

  export let node;
  export let client;

  const { id } = node;
  const { image } = node;
  const { date } = node;
  const { description } = node;

  const { meta } = node;
  const childs = meta.childs;
  const authors = meta.authors;

  const ADD_NODE_INPUT_PLACEHOLDER =
    "N-(url/id) N-(url/id) N-(url/id)".toUpperCase();
</script>

<BaseLayout>
  <EditorForm {client} {node} />

  <div class="grid node-wrapper">
    <NodeInfo {node} />

    {#if node.content}
      <!-- TODO это не описание, это контент. и храниться он должен в MD или HTML файле на локалке -->
      <!-- TODO пересмотри этот момент. страница выглядит сильно пустой без описания -->
      <Text text={node.content} className="grid__right-content" />
    {/if}
  </div>

  <div class="grid todo" style="color: red;">
    <ul>
      <li>pages отображаются только в формате GRID</li>
      <li>
        возможность добавить скрипт из стандартной библиотеки, который меняет
        верстку на LIST
      </li>
    </ul>
  </div>

  <!-- TODO страницы, в которые пушил User -->

  <div class="grid user__pages-container">
    <Hr text="node-files"></Hr>
    {#if childs}
      {#each childs as childNode}
        <NodeCard node={childNode} />
      {/each}
    {/if}

    <span class="add-node__container">
      <div class="add-node__input-container">
        <TextInput
          id="add-node__input"
          name="node-data"
          required={true}
          placeholder={ADD_NODE_INPUT_PLACEHOLDER}
        />
        <PlusButton variant="small" />
      </div>
      <PlusButton />
    </span>
  </div>

  <div class="grid user__pages-container">
    <Hr text="child-nodes"></Hr>
    {#if childs}
      {#each childs as childNode}
        <NodeCard node={childNode} />
      {/each}
    {/if}

    <PlusButton />
  </div>
</BaseLayout>

<style>
  .add-node__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--GRID-GAP-2);
  }
  :global(.add-node__container *) {
    margin: 0;
  }
  .add-node__input-container {
    display: flex;
    flex-direction: row;
    gap: var(--GRID-GAP-4);
  }
</style>
