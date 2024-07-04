<script>
  export let id;
  export let name;
  export let rows = 8;
  export let text = "";
  export let required = false;
  export let placeholder = "";
</script>

<p>
  <textarea
    class="textarea"
    {id}
    spellcheck="false"
    {name}
    {placeholder}
    {rows}
    {required}>{text}</textarea
  >
</p>

<style>
  .textarea {
    width: 100%;
    height: 100%;
    display: block;
    resize: none;

    padding: 4px;

    color: var(--DARK);
    background-color: var(--LIGHT);

    font-style: inherit;
    font-weight: inherit;
    text-transform: inherit;
  }

  .textarea:-moz-placeholder {
    color: var(--MEDIUM);
  }

  .textarea::-webkit-input-placeholder {
    color: var(--MEDIUM);
  }

  .textarea:focus {
    color: var(--BLACK);
    background-color: var(--WHITE);
    outline: 1px solid var(--BLACK);
    border: none;
  }

  @media screen and (max-width: 444px) {
    .textarea {
      border-radius: 4px;
      /* overflow: hidden; */
    }
  }
</style>
