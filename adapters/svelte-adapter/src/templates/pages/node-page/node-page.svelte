<script lang="ts">
  import type { NodePageProps } from "./node-page.svelte";

  import { BaseLayout } from "../../layouts";

  import { EditorFormFragment } from "../../fragments";
  import { NodeInfo } from "../../components";
  import { NodeCard } from "../../components";

  import { Image } from "../../components";
  import { Text } from "../../components";
  import { Date } from "../../components";
  import { ButtonPlus } from "../../components";
  import { TextInput } from "../../components";
  import { Hr } from "../../components";

  export let props: NodePageProps;
  const { node, client } = props;

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
  <EditorFormFragment {client} {node} />

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
      <li>
        возможность добавлять url на файл. чтобы он рендерился на странице
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
      <ButtonPlus />
    </span>
  </div>

  <div class="grid user__pages-container">
    <Hr text="child-nodes"></Hr>
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
        <ButtonPlus variant="small" />
      </div>

      <ButtonPlus />
    </span>
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
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: var(--GRID-GAP-4);
  }
</style>
